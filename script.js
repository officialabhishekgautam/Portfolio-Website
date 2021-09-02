
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



function sendEmail() {
  var name = document.getElementsByName("name");
  var from = document.getElementsByName("email");
  var msg = document.getElementsByName("message");

  Email.send({
      SecureToken : "460e8804-23d4-4411-bd1e-fd43af126c9b",
      To : 'officialabhishekgautam@gmail.com',
      From : from,
      Subject : "Email from Portfolio Website",
      Body : "Hi Abhishek "+name+" here,<br>"+msg,
  }).then(
    message => alert("Email sent")
  );
  }