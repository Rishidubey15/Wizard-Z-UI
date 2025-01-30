function page1Animation() {
  var tl = gsap.timeline();

  tl.from("nav #logo, #part2 h3, #part2 button, #part2 i", {
    y: -80,
    opacity: 0,
    delay: 0.7,
    duration: 0.5,
    stagger: 0.2,
  });

  tl.from("#LPpart1 h1", {
    x: -100,
    opacity: 0,
    duration: 0.6,
  });

  tl.from(
    "#LPpart2 img",
    {
      x: 100,
      opacity: 0,
      duration: 0.6,
    },
    "-=0.5"
  );

  tl.from("#LPpart1>p, #Lpbtn", {
    x: -100,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
  });

  tl.from("#companies>img", {
    y: 100,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
  });
}

function page2Animation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#section2",
      scroller: "body",
        // markers: true,
      start: "top 100%",
      end: "bottom 40%",
      scrub: 5, // Adjust end point if needed
      //   toggleActions: "play pause resume reset", // Adjust actions as necessary
    },
  });

  tl.from("#services h1, #services p", {
    y: -50,
    opacity: 0,
    ease: "slow.out",
    duration: 0.5,
    stagger: 0.2,
  });

  tl.from(
    ".line1.left",
    {
      x: -300,
      opacity: 0,
      ease: "slow.out",
      duration: 0.7,
      stagger: 0.2,
    },
    "anim"
  );

  tl.from(
    ".line1.right",
    {
      x: 300,
      opacity: 0,
      ease: "slow.out",
      duration: 0.7,
      stagger: 0.2,
    },
    "anim"
  );
  tl.from(
    ".line2.left",
    {
      x: -300,
      opacity: 0,
      ease: "slow.out",
      duration: 0.7,
      stagger: 0.2,
    },
    "anim2"
  );

  tl.from(
    ".line2.right",
    {
      x: 300,
      opacity: 0,
      ease: "slow.out",
      duration: 0.7,
      stagger: 0.2,
    },
    "anim2"
  );
  tl.from(
    ".line3.left",
    {
      x: -300,
      opacity: 0,
      ease: "slow.out",
      duration: 0.7,
      stagger: 0.2,
    },
    "anim3"
  );

  tl.from(
    ".line3.right",
    {
      x: 300,
      opacity: 0,
      ease: "slow.out",
      duration: 0.7,
      stagger: 0.2,
    },
    "anim3"
  );
  tl.from(
    ".line4.left",
    {
      x: -300,
      opacity: 0,
      ease: "slow.out",
      duration: 0.7,
      stagger: 0.2,
    },
    "anim4"
  );

  tl.from(
    ".line4.right",
    {
      x: 300,
      opacity: 0,
      ease: "slow.out",
      duration: 0.7,
      stagger: 0.2,
    },
    "anim4"
  );
}


function page3Animation(){
    var tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#section3",
          scroller: "body",
          start: "top 80%",
          end: "bottom 95%",
          // markers: true,
          scrub: 2,
        },
      });
    
      tl.from("#subpart1 h1, #subpart1 p, #subpart1 button", {
        x: -200,
        opacity: 0,
        ease: "slow.out",
        duration: 0.7,
        stagger: 0.2,
        delay: 1  
      });

      tl.from(".box3>img", {
        x: 200,
        opacity: 0,
        // ease: "slow.out",
        duration: 0.7,
        stagger: 0.2,
      },"-=0.7");

      tl.from("#caseStudy h1, #caseStudy p", {
        y: -50,
        opacity: 0,
        ease: "slow.out",
        duration: 0.5,
        stagger: 0.2,
      });

      tl.from(".text, hr", {
        x: -50,
        opacity: 0,
        ease: "slow.out",
        duration: 0.5,
        stagger: 0.2,
      });
    
}

// document.addEventListener("DOMContentLoaded", function () {
//   gsap.registerPlugin(ScrollTrigger);
//   page1Animation();
//   page2Animation();
// });

page1Animation();
page2Animation();
page3Animation();


// document.addEventListener("DOMContentLoaded", function() {
//   function reorderBoxes() {
//     const container = document.querySelector("#boxes"); // Make sure this is the parent container of your boxes
//     const boxes = Array.from(document.querySelectorAll(".box"));
    
//     // Clear the container
//     container.innerHTML = "";

//     // Append boxes in alternating order
//     for (let i = 0; i < boxes.length; i += 2) {
//       if (boxes[i]) container.appendChild(boxes[i]);
//       if (boxes[i + 1]) container.appendChild(boxes[i + 1]);
//     }
//   }

//   // Initial reorder
//   reorderBoxes();

//   // Reorder on window resize
//   window.addEventListener("resize", function() {
//     if (window.innerWidth <= 640) {
//       reorderBoxes();
//     }
//   });
// });
