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

let count = 0;
const box = document.getElementById("loaderTimer");

function startLoader() {
  box.innerHTML = count + "%";
  nextLoader();
}
function nextLoader() {
  if (count < 100) {
    count++;
    setTimeout(startLoader, 50);
  } 
}
startLoader()



// Preload the images
const imagesToPreload = [
  './img/linkedin.png',
  './img/insta.png',
  './img/github.png',
  './img/gmail.png',
  './img/tech.gif',
  './img/work.webp',
  './img/batman.gif',
  "./img/bgVideo.mp4"
];

function preloadImages(images, callback) {
  let loaded = 0;
  const onLoad = () => {
      loaded++;
      if (loaded === images.length) {
          callback();
      }
  };
  images.forEach(src => {
      const img = new Image();
      img.onload = onLoad;
      img.src = src;
  });
}

// Call the preload function before adding bodies to the world
preloadImages(imagesToPreload, () => {
  // Once images are preloaded, proceed with adding bodies
  addBodiesWithAnimation();
});



function loaderAnimation(){
  var loader = document.querySelector("#loader")
     setTimeout(function(){
     loader.style.top = "-100%"
     },6450)
    // },450)

 }
 loaderAnimation()






function heroCursor() {
  var hero = document.querySelector(".hero")

  // ---------------------------Hero------------------------
  hero.addEventListener("mouseenter", function () {
   gsap.to(".cursorHero", {
        transform: "translate(-50%,-50%) scale(1)",
        backgroundColor: "#dc0000a6",
        border: "2px solid antiquewhite",
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

  // -------phone------
  hero.addEventListener("mouseenter", function () {
    gsap.to(".cursorHero1", {
         transform: "translate(-50%,-50%) scale(1)",
         backgroundColor: "#dc0000a6",
         border: "2px solid antiquewhite",
         innerHTML: `<h1>SCRATCH HERE</h1>`,
         color: "antiquewhite",
       })
   });
 
   hero.addEventListener("mouseleave", function () {
     gsap.to(".cursorHero1", {
       transform: "translate(-50%,-50%) scale(0)",
     });
   });
 
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

// -------------------------Footer-------------------

let link = document.querySelector('.linkedin') 
  link.addEventListener("mouseover", function () {
    gsap.to(".cursorHero", {
      transform: "translate(-30%,-30%) scale(0.8)",
      backgroundImage:"url(./img/linkedin.png)",
      backgroundColor: "black",
      borderRadius:"10px",
      width:"200px",
      height:"200px",
      border:"0",
    });
  });

  link.addEventListener("mouseout", () => {
    gsap.to(".cursorHero", {
      transform: "translate(-30%,-30%) scale(0.2)",
      backgroundColor: "#B31312",
      borderRadius:"50%",
      innerHTML: "",
      backgroundImage:"",
      width:"150px",
      height:"150px",
    })
  });

  let insta = document.querySelector('.instagram') 
  insta.addEventListener("mouseover", function () {
    gsap.to(".cursorHero", {
      transform: "translate(-30%,-30%) scale(0.8)",
      backgroundImage:"url(./img/insta.png)",
      backgroundColor: "black",
      borderRadius:"10px",
      width:"200px",
      height:"200px",
      border:"0",
    });
  });

  insta.addEventListener("mouseout", () => {
    gsap.to(".cursorHero", {
      transform: "translate(-30%,-30%) scale(0.2)",
      backgroundColor: "#B31312",
      borderRadius:"50%",
      innerHTML: "",
      backgroundImage:"",
      width:"150px",
      height:"150px",
    })
  });

  let github = document.querySelector('.github') 
  github.addEventListener("mouseover", function () {
    gsap.to(".cursorHero", {
      transform: "translate(-30%,-30%) scale(0.8)",
      backgroundImage:"url(./img/github.png)",
      backgroundColor: "black",
      borderRadius:"10px",
      width:"200px",
      height:"200px",
      border:"0",
    });
  });

  github.addEventListener("mouseout", () => {
    gsap.to(".cursorHero", {
      transform: "translate(-30%,-30%) scale(0.2)",
      backgroundColor: "#B31312",
      borderRadius:"50%",
      innerHTML: "",
      backgroundImage:"",
      width:"150px",
      height:"150px",
    })
  });

  let gmail= document.querySelector('.gmail') 
  gmail.addEventListener("mouseover", function () {
    gsap.to(".cursorHero", {
      transform: "translate(-30%,-30%) scale(0.8)",
      backgroundImage:"url(./img/gmail.png)",
      backgroundColor: "black",
      borderRadius:"10px",
      width:"200px",
      height:"200px",
      border:"0",
    });
  });

  gmail.addEventListener("mouseout", () => {
    gsap.to(".cursorHero", {
      transform: "translate(-30%,-30%) scale(0.2)",
      backgroundColor: "#B31312",
      borderRadius:"50%",
      innerHTML: "",
      backgroundImage:"",
      width:"150px",
      height:"150px",
    })
  });





  // --------------------------------Work_Cards------------------------

  document.querySelectorAll('.card').forEach(function (el) {
    el.addEventListener("mouseover", function () {
      gsap.to(".cursorHero", {
        transform: "translate(-50%,-50%) scale(0.7)",
        backgroundColor: "#d1483657",
        border: "2px solid red",
        innerHTML: `<h1>View</h1>`,
        color:"antiquewhite"
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
      width:"200px",
      height:"150px",
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
      width:"170px",
      height:"170px",
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
      width:"220px",
      height:"160px",
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


  document.body.addEventListener("touchmove", function (dets) {
    var x = dets.changedTouches[0].pageX;
    var y = dets.changedTouches[0].pageY;
    // console.log(x, y);

    gsap.to(".cursorHero1", {
      left: x,
      top: y,
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

  gsap.to(".about2", {
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
    // ease: "sine.out",
    scrollTrigger: {
      trigger: section_2,
      pin: true,
      // markers: true,
      scrub: 1,
      snap: 100 / (box_items.length - 1),
      // end: "+=" + section_2.offsetWidth
    }
  });
}
horizintalScroll()

function page5ColorChange() {
  gsap.to(".colChange", {
    scrollTrigger: {
      trigger: ".blankpg5",
      start: "top 70%",
      end: "150% 70%",
      // markers: true,
      scrub: 3,
    },
    backgroundColor: "white"
  }, "same")

//   gsap.to(".blankpg5", {
//     scrollTrigger: {
//       trigger: ".blankpg5",
//       start: "top 70%",
//       end: "center 70%",
//       // markers: true,
//       scrub: 3,
//     },
//     backgroundColor: "white"
//   }, "same")

//   gsap.to("#horizontal", {
//     scrollTrigger: {
//       trigger: ".blankpg5",
//       start: "top 70%",
//       end: "center 70%",
//       // markers: true,
//       scrub: 3,
//     },
//     backgroundColor: "white"
//   }, "same")
}
page5ColorChange();


function dom() {
  const canvas = document.querySelector(".page5>canvas");
  const context = canvas.getContext("2d");
  const imageSeq = {
    frame: 0,
  };

  function setCanvasSize() {
    const img = images[imageSeq.frame];
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth;
    render();
  }

  window.addEventListener("resize", setCanvasSize);


  function files(index) {
    let frameNumber = String(index).padStart(3, '0');
    const data = `
      ./img/SequenceImages/ezgif-frame-${frameNumber}.jpg`;
      console.log(data);

    return data.trim();
  }

  const frameCount = 71 ;
  const images = [];

  for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 1,
      // pin: true,
      trigger: ".page5",
      start: "top center",
      end: "center top",
      // markers: true,
    },
    onUpdate: render,
  });

  gsap.to(imageSeq, {
    scrollTrigger: {
      scrub: 1,
      pin: true,
      trigger: ".page5",
      start: "top top",
      end: "center top",
      // markers: true,
    },
  });

  images[0].onload = setCanvasSize;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  
function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.min(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
}

dom();



function horscrolltext(){

const scrollingText = gsap.utils.toArray(".rail h4");

const tl = horizontalLoop(scrollingText, {
  repeat: -1,
  paddingRight: 20,
  speed: 0.6,
});

// Default direction is scrolling down
let direction = 1;
let t;

ScrollTrigger.create({
  trigger: ".scrollFooter",
  start: "-1000% top",
  end: "bottom top",
  onUpdate: (self) => {
    if (self.direction !== direction) {
      direction = self.direction;
      t && t.kill();
      t = gsap.to(tl, {
        duration: 0.3,
        timeScale: self.direction
      });
    }
  },
  // markers: true
});

/*
This helper function makes a group of elements animate along the x-axis in a seamless, responsive loop.

Features:
 - Uses xPercent so that even if the widths change (like if the window gets resized), it should still work in most cases.
 - When each item animates to the left or right enough, it will loop back to the other side
 - Optionally pass in a config object with values like "speed" (default: 1, which travels at roughly 100 pixels per second), paused (boolean),  repeat, reversed, and paddingRight.
 - The returned timeline will have the following methods added to it:
   - next() - animates to the next element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - previous() - animates to the previous element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - toIndex() - pass in a zero-based index value of the element that it should animate to, and optionally pass in a vars object to control duration, easing, etc. Always goes in the shortest direction
   - current() - returns the current index (if an animation is in-progress, it reflects the final index)
   - times - an Array of the times on the timeline where each element hits the "starting" spot. There's also a label added accordingly, so "label1" is when the 2nd element reaches the start.
 */
function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
    totalWidth,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;
  gsap.set(items, {
    // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
    xPercent: (i, el) => {
      let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
          gsap.getProperty(el, "xPercent")
      );
      return xPercents[i];
    }
  });
  gsap.set(items, { x: 0 });
  totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      gsap.getProperty(items[length - 1], "scaleX") +
    (parseFloat(config.paddingRight) || 0);
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop =
      distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          )
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false
        },
        distanceToLoop / pixelsPerSecond
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  function toIndex(index, vars) {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length); // always go in the shortest direction
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      // if we're wrapping the timeline's playhead, make the proper adjustments
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  tl.next = (vars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render for performance
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
}
}
horscrolltext()

