
gsap.to(".fred", {x:400, scale:1.5, rotation:360, duration:3, repeat:1, yoyo:true});
gsap.fromTo(".fred-2",{x:700, opacity:0},{x:400, rotation:360, duration:3, opacity:1, delay:2});

//door-bottom
//door-top
let myDelay = 0.3;
let myDuration = 0.3;
gsap.to(".door-top",{height:0, duration:myDuration, delay: myDelay});
gsap.to(".door-bottom",{height:0, duration:myDuration, delay: myDelay});

gsap.to(".door-white-top",{height:0, duration:0.4, delay: 0.5});
gsap.to(".door-white-bottom",{height:0, duration:0.4, delay: 0.5});

//gsap.timeline().from();

//testing gitHub desktop