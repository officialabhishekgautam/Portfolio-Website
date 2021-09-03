
/*
const buttons = document.querySelectorAll("button");

buttons.forEach(button =>
  button.addEventListener("click", _ => {
    document.getElementById("sidebar").classList.toggle("collapsed");
    
  })
);
*/

var buttons = document.querySelectorAll(".btfun").length;

for (var i = 0; i < buttons ; i++) {
    document.querySelectorAll(".btfun")[i].addEventListener("click",  _ => {
      document.getElementById("sidebar").classList.toggle("collapsed");
    });
}


/*
const name = document.getElementById("name").value;
    const email = document.getElementById("email").value; 
    const msg = document.getElementById("message").value; 


const nodemailer = require('nodemailer')
const { google } = require('googleapis')

const CLIENT_ID = '674436688116-eobjsa99t6jecubirt3pn4s3atrnfu5j.apps.googleusercontent.com'
const CLIENT_SECRET = 'qWp_MfVXauKN9U520Dk5k_L6'
const REDIRECT_URL = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//046C4560wlTUnCgYIARAAGAQSNwF-L9IrOYA3bTDWCQbKqlVMA8KgXpQ9fqN6VUUTWQ2BZsaEp0NPv8zlS7qsyvT_WPFxfUdWrqY';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL, REFRESH_TOKEN) 
oAuth2Client.setCredentials({ refresh_token : REFRESH_TOKEN })

async function sendMail(){
  try{
    
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

    const mailOptions = {
      from: 'abhigautam404070@gmail.com',
      to: 'officialabhishekgautam@gmail.com',
      subject: 'Message from',
      text : '<h1>hehe waah yaar</h1>',
      
    };
    const result = await transport.sendMail(mailOptions)
    return result

  } catch(error){
    return(error)
  }
}

sendMail()
  .then((result) => console.log('Email sent...', result))
  .catch((error) => console.log(error.message));
*/