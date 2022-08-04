let btn = document.querySelector(".eye-off");
let btn2 = document.querySelector(".eye");

btn.addEventListener("click", function () {
  let input = document.querySelector("#password");

  if (input.getAttribute("type") == "password") {
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
  }
});

btn2.addEventListener("click", function () {
  let input = document.querySelector("#password");

  if (input.getAttribute("type") == "password") {
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
  }
});

const eye = document.querySelector("#eye");
const eyeOff = document.querySelector("#eye-off");

eye.addEventListener("click", () => {
  eye.classList.add("sumir");
  eyeOff.classList.add("aparecer");
});

eyeOff.addEventListener("click", () => {
  eye.classList.remove("sumir");
  eyeOff.classList.remove("aparcer");
});
