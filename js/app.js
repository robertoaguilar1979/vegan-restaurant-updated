// let tl = gsap.timeline();


gsap.from(".heroText ", {

    duration: 1.75,
    opacity: 0,
    scale: 0,
    ease: "back",
    delay: 1.25,



})
gsap.from(".hero-area img", {
        duration: 1,
        opacity: 0,
        ease: "back",
        delay: 1.25,
        xPercent: 80,
    },
    "<"
)

gsap.from(".menu-img .card", {
    scrollTrigger: ".card",
    yPercent: 50,
    duration: 1.25,
    ease: "back",
    stagger: 0.5,
    delay: 0.5,
    opacity: 0
});