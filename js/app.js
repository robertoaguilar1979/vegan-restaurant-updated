let tl = gsap.timeline();


tl.fromTo(".heroText ", {
    opacity: 0,
    scale: 0,

}, {
    opacity: 1,
    scale: 1,
    ease: "back",
    duration: 1.75,
    delay: 0.5,


})
tl.fromTo(".hero-area img", {
        opacity: 0,
        xPercent: 80,

    }, {
        duration: 1,
        ease: "back",
        delay: .5,
        xPercent: 0,
        opacity: 1
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