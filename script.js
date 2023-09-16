let css = document.querySelector(".value");

let colorFirst = document.querySelector(".color-first");
let colorSecond = document.querySelector(".color-second");

let element = document.querySelector("#element");

let border = document.querySelector("#border");

const setGradient = () => {
  element.style.background =
    "linear-gradient(to right, " +
    colorFirst.value +
    ", " +
    colorSecond.value +
    ")";

  css.textContent = body.style.background + ";";
};

colorFirst.addEventListener("input", setGradient);

colorSecond.addEventListener("input", setGradient);

border.addEventListener("change", function () {
  element.style.borderRadius = `${border.value}px`;
});
