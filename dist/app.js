const menuUl = document.querySelector("#menu");
const burgerDiv = document.querySelector("#burger");

burgerDiv.addEventListener("click", () => {
    menuUl.classList.toggle("hidden");
    menuUl.classList.add("flex");
});