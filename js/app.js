let tl = gsap.timeline();


tl.from(".heroText ", {

    opacity: 0,
    scale: 0,
    ease: "back",
    duration: 1.75,
    delay: 0.5,



})
tl.from(".hero-area img", {
        duration: 1,
        ease: "back",
        delay: .5,
        xPercent: 80,
        opacity: 0
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