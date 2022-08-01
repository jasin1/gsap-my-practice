
gsap.to(".fred", {x:400, scale:1.5, rotation:360, duration:3, repeat:1, yoyo:true});
gsap.fromTo(".fred-2",{x:700, opacity:0},{x:400, rotation:360, duration:3, opacity:1, delay:2});

//door-bottom
//door-top
gsap.to(".door-top",{height:0, duration:2});