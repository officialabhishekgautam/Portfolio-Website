
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