let tl = gsap.timeline()


tl.from(".heroText ", {
    opacity: 0,
    scale: 0,
    ease: "back",
    duration: 1.75,
    delay: 0.5

})
tl.from(".hero-area img", {
        opacity: 0,
        ease: "back",
        xPercent: 100,
        duration: 0.5,
        delay: 0.5


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