const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

let navigation = document.querySelector(".navUl");

hamburger.addEventListener("click", () => {
    navigation.classList.add("open");
})

close.addEventListener("click", function () {
    navigation.classList.remove("open");
})