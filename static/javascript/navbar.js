const navbarBurger = document.getElementById("burger");
const navbarMenu = document.querySelector(".navbar-end");
const burgerLines = document.querySelectorAll(".burger-line");

navbarBurger.addEventListener("click", () => {
  navbarMenu.classList.toggle("display");
  [...burgerLines].forEach((e) => e.classList.toggle("display"));
});
