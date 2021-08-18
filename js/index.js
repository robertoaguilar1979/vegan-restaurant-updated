const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
let navigation = document.querySelector(".navUl");
const upArrow = document.querySelector(".upArrow");






hamburger.addEventListener("click", () => {
    navigation.classList.add("open");
})

close.addEventListener("click", function () {
    navigation.classList.remove("open");
})

window.addEventListener("scroll", e => {

    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        upArrow.classList.add("visible");
    } else {
        upArrow.classList.remove("visible");
    }
});


// navigation on click remove mobile navigation 
const list = document.querySelectorAll(".list");


for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function () {
        navigation.classList.remove("open");

    })
}