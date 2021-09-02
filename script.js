const buttons = document.querySelectorAll("button");

buttons.forEach(button =>
  button.addEventListener("click", _ => {
    document.getElementById("sidebar").classList.toggle("collapsed");
    
  })
);

