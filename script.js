var buttons = document.querySelectorAll(".btfun").length;

for (var i = 0; i < buttons ; i++) {
    document.querySelectorAll(".btfun")[i].addEventListener("click",  _ => {
      document.getElementById("sidebar").classList.toggle("collapsed");
    });
}