const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;

const nodemailer = require('nodemailer')
const { google } = require('googleapis')

const CLIENT_ID = '674436688116-eobjsa99t6jecubirt3pn4s3atrnfu5j.apps.googleusercontent.com'
const CLIENT_SECRET = 'qWp_MfVXauKN9U520Dk5k_L6'
const REDIRECT_URL = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//046C4560wlTUnCgYIARAAGAQSNwF-L9IrOYA3bTDWCQbKqlVMA8KgXpQ9fqN6VUUTWQ2BZsaEp0NPv8zlS7qsyvT_WPFxfUdWrqY';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL, REFRESH_TOKEN) 
oAuth2Client.setCredentials({ refresh_token : REFRESH_TOKEN })


app.use(express.urlencoded({extended:true}));


app.post('/email', async(req,res)=>{
const { body }= req;
const accesstoken = await oAuth2Client.getAccessToken()
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'officialabhishekgautam@gmail.com',
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accesstoken
    }
    
  })

try{
  const mailOptions = {
    from: 'officialabhishekgautam@gmail.com',
    to: 'officialabhishekgautam@gmail.com',
    subject: 'Message from '+body.name,
    html : body.email+"<br> Hi Abhishek I'm "+body.name+"<br>"+body.message,
    
  };
  const result = await transport.sendMail(mailOptions)
  res.json({
    status:'message has been sent'
  })

}

catch{
  res.json({
    status:'oops sed lyf'
  })
}
})

app.listen(PORT)
