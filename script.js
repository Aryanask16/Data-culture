const scroll = new LocomotiveScroll({
    el: document.querySelector('#main2'),
    smooth: true,
    smoothMobile: true, // if you want smooth scrolling on mobile devices
    multiplier: 0.5, // reduce the scrolling speed
    lerp: 0.1 // easing amount, a lower value means slower interpolation
});

document.addEventListener("DOMContentLoaded", function () {
    const words = ["We help organizations build data capabilities and get value from their data.", "Data maturity is a journey, not a destination. Second, people are the key to activating the power of data.", "We partner with best-in-class tools to build the right modern data stack for your organization."];
    const duration = 2500; // Duration in milliseconds
    let index = 0;

    const wordRotateContainer = document.querySelector(".front2");
    const wordRotateItem = wordRotateContainer.querySelector(".puku");

    function updateWord() {
        wordRotateItem.classList.remove("active");
        setTimeout(() => {
            wordRotateItem.textContent = words[index];
            wordRotateItem.classList.add("active");
        }, 250); // Matches the CSS transition duration

        index = (index + 1) % words.length;
    }

    setInterval(updateWord, duration);
    wordRotateItem.classList.add("active");
});
ScrollTrigger.scrollerProxy("#main2", {
    scrollTop(value) {
      return arguments.length
        ? scroll.scrollTo(value, 0, 0)
        : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
  });
  
  // Update Locomotive Scroll on scroll
  scroll.on("scroll", ScrollTrigger.update);
  gsap.to(".real ",{
    height:"1vh",
    duration:0.5,
    scrollTrigger:{
     trigger:".real ",
     scroller:"body",
     // markers:true,
     start:"top -10%",
     end:"top -11%",
     scrub:2
    }
 })
 scroll.on("scroll", ScrollTrigger.update);
 gsap.to("#imu ",{
   top:"3.2vh",
   duration:0.5,
   scrollTrigger:{
    trigger:"#imu ",
    scroller:"body",
    // markers:true,
    start:"top -10%",
    end:"top -11%",
    scrub:2
   }
})
scroll.on("scroll", ScrollTrigger.update);
  gsap.to("#nav ",{
    height:"1vh",
    duration:0.5,
    scrollTrigger:{
     trigger:"#nav ",
     scroller:"body",
     // markers:true,
     start:"top -10%",
     end:"top -11%",
     scrub:2
    }
 })