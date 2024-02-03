const lenis = new Lenis({
  duration: 4,
  smooth:true,
  // easing: (t, friction = 0.1) => {
  //   const easedValue = Math.min(1, 1.001 - Math.pow(2, -10 * t));
  //   const frictionedValue = easedValue - friction * t;
  //   return Math.min(1, frictionedValue);
  // }
});
function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


function heroCursor() {
  var hero = document.querySelector(".hero")

  // ---------------------------Hero------------------------
  hero.addEventListener("mouseenter", function () {
   gsap.to(".cursorHero", {
        transform: "translate(-50%,-50%) scale(1)",
        backgroundColor: "#ff1e006f",
        border: "2px solid rgb(239, 191, 191)",
        innerHTML: `<h1>SCRATCH HERE</h1>`,
        color: "antiquewhite",
      })
  });

  hero.addEventListener("mouseleave", function () {
    gsap.to(".cursorHero", {
      transform: "translate(-50%,-50%) scale(0)",
    });
  });

  const bridge = document.querySelector("#bridge")
  bridge.addEventListener("mousedown",()=>{
    bridge.style.cursor = "grabbing";
  })

  bridge.addEventListener("mouseup",()=>{
    bridge.style.cursor = "grab";
  })
  // ---------------------------Hero------------------------



  // -----------------------------Menu------------------------
  document.querySelectorAll('.hover').forEach(function (el) {
    el.addEventListener("mouseover", function () {
      gsap.to(".cursorHero", {
        transform: "translate(-50%,-50%) scale(0.7)",
        backgroundColor: "rgba(22, 14, 14, 0.468)",
        border: "2px solid red",
        innerHTML: `<h1></h1>`,
      });
    });
  })


  document.querySelectorAll('.hover').forEach(function (el) {
    el.addEventListener("mouseout", () => {
      gsap.to(".cursorHero", {
        transform: "translate(-50%,-50%) scale(1)",
        backgroundColor: "#ff1e006f",
        border: "2px solid rgb(239, 191, 191)",
        innerHTML: `<h1>SCRATCH HERE</h1>`,
        color: "antiquewhite",
      })
    });
  })
  // -----------------------------Menu------------------------

  // --------------------------------Work_Cards------------------------

  document.querySelectorAll('.card').forEach(function (el) {
    el.addEventListener("mouseover", function () {
      gsap.to(".cursorHero", {
        transform: "translate(-50%,-50%) scale(0.7)",
        backgroundColor: "rgba(22, 14, 14, 0.468)",
        border: "2px solid red",
        innerHTML: `<h1></h1>`,
      });
    });
  })


  document.querySelectorAll('.card').forEach(function (el) {
    el.addEventListener("mouseout", () => {
      gsap.to(".cursorHero", {
        transform: "translate(-30%,-30%) scale(0.2)",
        backgroundColor: "#B31312",
        innerHTML: ""
      })
    });
  })



  // ----------------------Main---------------------
  var main = document.querySelector(".main")
  main.addEventListener("mouseenter", function () {
    gsap.to(".cursorHero", {
      transform: "translate(-30%,-30%) scale(0.2)",
      backgroundColor: "#B31312",
      innerHTML: ""
    },
    );
  });
  // ----------------------Main---------------------




  // ----------------Content---------------------
  var content = document.querySelector(".content")
  content.addEventListener("mouseenter", function () {
    gsap.to(".cursorCanvas", {
      transform: "translate(-30%,-30%) scale(0.6)",
    },
    );
  });

  content.addEventListener("mouseleave", function () {
    gsap.to(".cursorCanvas", {
      transform: "translate(-30%,-30%) scale(0)",
    },
    );
  });

  content.addEventListener("mousemove", function (dets) {
    gsap.to(".cursorCanvas", {
      left: dets.x,
      top: dets.y,
    });
  });

  content.addEventListener("mouseenter", function () {
    gsap.to(".cursorHero", {
      transform: "translate(-30%,-30%) scale(0)",
    },
    );
  });

  content.addEventListener("mouseleave", function () {
    gsap.to(".cursorHero", {
      transform: "translate(-30%,-30%) scale(0.2)",
      backgroundColor: "#B31312",
      innerHTML: ""
    },
    );
  });
  // ----------------Content---------------------


  var work = document.querySelector(".titlePg4")
  work.addEventListener("mouseover", function () {
    gsap.to(".cursorHero", {
      transform: "translate(-30%,-30%) scale(0.8)",
      backgroundImage:"url(./img/work.webp)",
      borderRadius:"10px",
      width:"270px",
      height:"200px",
      border:"0",
    },
    );
  });

  work.addEventListener("mouseout", function () {
    gsap.to(".cursorHero", {
      transform: "translate(-30%,-30%) scale(0.2)",
      backgroundColor: "#B31312",
      borderRadius:"50%",
      innerHTML: "",
      backgroundImage:"",
      width:"150px",
      height:"150px",
    },
    );
  });


  var about = document.querySelectorAll(".aboutH")
  about.forEach(function(el){
  el.addEventListener("mouseover", function () {
    gsap.to(".cursorHero", {
      transform: "translate(-30%,-30%) scale(0.8)",
      backgroundImage:"url(./img/batman.gif)",
      borderRadius:"10px",
      width:"150px",
      height:"150px",
      border:"0",
    },
    );
  });
})

about.forEach((el)=>{
  el.addEventListener("mouseout", function () {
    gsap.to(".cursorHero", {
      transform: "translate(-30%,-30%) scale(0.2)",
      backgroundColor: "#B31312",
      borderRadius:"50%",
      innerHTML: "",
      backgroundImage:"",
      width:"150px",
      height:"150px",
    },
    );
  });
})



  var tech = document.querySelectorAll(".ScrollHeading")
  tech.forEach(function(el){
  el.addEventListener("mouseover", function () {
    gsap.to(".cursorHero", {
      transform: "translate(-30%,-30%) scale(0.8)",
      backgroundImage:"url(./img/tech.gif)",
      borderRadius:"10px",
      width:"270px",
      height:"200px",
      border:"0",
    },
    );
  });
})

tech.forEach((el)=>{
  el.addEventListener("mouseout", function () {
    gsap.to(".cursorHero", {
      transform: "translate(-30%,-30%) scale(0.2)",
      backgroundColor: "#B31312",
      borderRadius:"50%",
      innerHTML: "",
      backgroundImage:"",
      width:"150px",
      height:"150px",
    },
    );
  });
})







  document.body.addEventListener("mouseleave", function () {
    gsap.to(".cursorHero", {
      transform: "translate(-50%,-50%) scale(0)",
    });
  });

  document.body.addEventListener("mousemove", function (dets) {
    gsap.to(".cursorHero", {
      left: dets.x,
      top: dets.y,
    });
  });



}
heroCursor()

function colorChanger() {
  gsap.to(".top", {
    scrollTrigger: {
      trigger: ".page3",
      // markers: false,
      start: "-30% 60%",
      end: "top 40%",
      scrub: true,
    },
    backgroundColor: "#fff"
  })

  gsap.to(".main", {
    scrollTrigger: {
      trigger: ".page3",
      // markers: false,
      start: "-30% 60%",
      end: "top 40%",
      scrub: true,
    },
    backgroundColor: "#fff"
  })
}
colorChanger()

function scrollOpener() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".ScrollToOpen",
      start: "51% 50%",
      end: "150% top",
      scrub: 1,
      pin: true,
      // markers: true
    }
  })

  tl.to(".top", {
    top: "-50%"
  }, "a")

  tl.to(".bottom", {
    bottom: "-50%"
  }, "a")

  tl.to(".content", {
    marginTop: "0"
  }, "a")
}
scrollOpener()


function horizintalScroll() {
  const section_2 = document.getElementById("horizontal");
  let box_items = gsap.utils.toArray(".horizontal__item");

  gsap.to(box_items, {
    xPercent: -85 * (box_items.length - 1),
    ease: "sine.out",
    scrollTrigger: {
      trigger: section_2,
      pin: true,
      scrub: 1,
      snap: 1 / (box_items.length - 1),
      end: "+=" + section_2.offsetWidth
    }
  });
}
horizintalScroll()

function page5ColorChange() {
  gsap.to(".page5", {
    scrollTrigger: {
      trigger: ".page5",
      start: "top 70%",
      end: "center 70%",
      // markers: true,
      scrub: 3,
    },
    backgroundColor: "white"
  }, "same")

  gsap.to("#horizontal", {
    scrollTrigger: {
      trigger: ".page5",
      start: "top 70%",
      end: "center 70%",
      // markers: true,
      scrub: 3,
    },
    backgroundColor: "white"
  }, "same")
}
page5ColorChange();


