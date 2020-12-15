const tl = gsap.timeline({
    defaults: {
        ease: "power1.out",
        opacity: "0"
    }
});

tl.to(".text", {
    y: "0%",
    duration: 1,
    stagger: 0.25
});
tl.to(".slider", {
    y: "100%",
    duration: 0.4,
    delay: 0.6
});
tl.to(".intro", {
    opacity:1,
    y: "-100%",
    duration: 1
}, "-=1");
tl.fromTo("nav", {
    opacity: 0
}, {
    opacity: 1,
    duration: 1
});
tl.fromTo(".big-text", {
    opacity: 0
}, {
    opacity: 1,
    duration: 1
}, "-=1");