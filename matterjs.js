//preload images
// Preload the images
const imagesToPreloadmatter = [
    './logo/1.svg',
    './logo/2.svg',
    './logo/3.svg',
    './logo/4.svg',
    './logo/5.svg',
    './logo/6.svg',
    './logo/7.svg',
    './logo/8.svg',
    './logo/9.svg',
    './logo/10.svg',
    './logo/11.svg',
    './logo/12.svg',
    './logo/13.svg',
    './logo/14.svg',
    './logo/15.svg',
    './logo/16.svg',
    './logo/17.svg',
    './logo/18.svg',
    './logo/19.svg',
    './logo/20.svg',
];

function preloadImagesmatter(images, callback) {
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
preloadImagesmatter(imagesToPreloadmatter, () => {
    // Once images are preloaded, proceed with adding bodies
    addBodiesWithAnimation();
});

//preload images



const mediaQueryMatter = window.matchMedia('(max-width: 850px)')
// Check if the media query is true


document.addEventListener('DOMContentLoaded', function () {
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,

        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Composite = Matter.Composite,
        Bodies = Matter.Bodies;

    var engine = Engine.create(),
        world = engine.world;
        Body = Matter.Body;




    if (mediaQueryMatter.matches) {
        var render = Render.create({
            element: document.getElementById('canvas-container'),
            engine: engine,
            options: {
                width: 300,
                height: 400,
                showAngleIndicator: true,
                wireframes: false // Set to true for wireframe rendering
            }
        });

    }
    else {
        var render = Render.create({
            element: document.getElementById('canvas-container'),        
            engine: engine,
            options: {
                width: 800,
                height: 400,
                showAngleIndicator: true,
                wireframes: false // Set to true for wireframe rendering
            }
            });
    }

    var bodiesAdded = false; // Flag to track if bodies are already added


    let radius = getRadius()
    let radiusBig = getRadiusBig()



    // Render.run(render);
    // var runner = Runner.create();
    // Runner.run(runner, engine);

    function runrr() {
        Render.run(render);
    }

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(engine, {
        scrollTrigger: {
            trigger: "#canvas-container",
            start: "top center",
            end: "bottom center",
            scrub: 1, // Adjust the scrubbing intensity
            // markers: true 
        },
        onUpdate: function () {
            if (!bodiesAdded) {
                runrr();
                addBodiesWithAnimation();
                bodiesAdded = true; // Set the flag to true after adding bodies
            }
        }
    });

    var runner = Runner.create();
    Runner.run(runner, engine);

    function addBodiesWithAnimation() {
        let delay = 150;
    
        function addBodyWithAnimation(logo, delay) {
            setTimeout(() => {
                Composite.add(world, logo);
    
                // Use Tween.js for animation
                var initialY = logo.position.y;
                var targetY = 300; // Change this to the desired final Y position
                var tween = new TWEEN.Tween({ y: initialY })
                    .to({ y: targetY }, 2000) // Adjust duration as needed
                    .easing(TWEEN.Easing.Quadratic.Out) // Change easing function if needed
                    .onUpdate(function () {
                        Body.setPosition(logo, { x: logo.position.x, y: this.y });
                    })
                    .start();
            }, delay);
        }

        let logo1 = Bodies.circle(200, 50, radius, {
            density: 0.0001,
            frictionAir: 0.01,
            restitution: 1,
            friction: 0.05,
            render: {
                sprite: {
                    texture: './logo/1.svg',
                    xScale: getScaleFunction(),
                    yScale: getScaleFunction()
                }
            }
        }
        );

        // Add the logo composite to the world
        let logo2 = Bodies.circle(200, 50, radius, {
            density: 0.0001,
            frictionAir: 0.01,
            restitution: 1,
            friction: 0.05,
            render: {
                sprite: {
                    texture: './logo/2.svg',
                    xScale: getScaleFunction(),
                    yScale: getScaleFunction()
                }
            }
        }
        );


        let logo3 = Bodies.circle(200, 50, radiusBig, {
            density: 0.0001,
            frictionAir: 0.01,
            restitution: 1,
            friction: 0.05,
            render: {
                sprite: {
                    texture: './logo/3.svg',
                    xScale: getScaleFunction(),
                    yScale: getScaleFunction()
                }
            }
        }
        );

        let logo4 = Bodies.circle(200, 50, radius, {
            density: 0.0001,
            frictionAir: 0.01,
            restitution: 1,
            friction: 0.05,
            render: {
                sprite: {
                    texture: './logo/4.svg',
                    xScale: getScaleFunction(),
                    yScale: getScaleFunction()
                }
            }
        }
        );

        let logo5 = Bodies.circle(200, 50, radius, {
            density: 0.0001,
            frictionAir: 0.01,
            restitution: 1,
            friction: 0.05,
            render: {
                sprite: {
                    texture: './logo/5.svg',
                    xScale: getScaleFunction(),
                    yScale: getScaleFunction()
                }
            }
        }
        );

        let logo6 = Bodies.circle(200, 50, radius, {
            density: 0.0001,
            frictionAir: 0.01,
            restitution: 1,
            friction: 0.05,
            render: {
                sprite: {
                    texture: './logo/6.svg',
                    xScale: getScaleFunction(),
                    yScale: getScaleFunction()
                }
            }
        }
        );

        let logo7 = Bodies.circle(200, 50, radius, {
            density: 0.0001,
            frictionAir: 0.01,
            restitution: 1,
            friction: 0.05,
            render: {
                sprite: {
                    texture: './logo/7.svg',
                    xScale: getScaleFunction(),
                    yScale: getScaleFunction()
                }
            }
        }
        );

        let logo8 = Bodies.circle(200, 50, radius, {
            density: 0.0001,
            frictionAir: 0.01,
            restitution: 1,
            friction: 0.05,
            render: {
                sprite: {
                    texture: './logo/8.svg',
                    xScale: getScaleFunction(),
                    yScale: getScaleFunction()
                }
            }
        }
        );

        let logo9 = Bodies.circle(500, 10, radius, {
            density: 0.0001,
            frictionAir: 0.01,
            restitution: 1,
            friction: 0.05,
            render: {
                sprite: {
                    texture: './logo/9.svg',
                    xScale: getScaleFunction(),
                    yScale: getScaleFunction()
                }
            }
        }
        );

        let logo10 = Bodies.circle(500, 10, radius, {
            density: 0.0001,
            frictionAir: 0.01,
            restitution: 1,
            friction: 0.05,
            render: {
                sprite: {
                    texture: './logo/10.svg',
                    xScale: getScaleFunction(),
                    yScale: getScaleFunction()
                }
            }
        }
        );

        let logo11 = Bodies.circle(500, 50, radius, {
            density: 0.0001,
            frictionAir: 0.01,
            restitution: 1,
            friction: 0.05,
            render: {
                sprite: {
                    texture: './logo/11.svg',
                    xScale: getScaleFunction(),
                    yScale: getScaleFunction()
                }
            }
        }
        );

        let logo12 = Bodies.circle(500, 50, radius, {
            density: 0.0001,
            frictionAir: 0.01,
            restitution: 1,
            friction: 0.05,
            render: {
                sprite: {
                    texture: './logo/12.svg',
                    xScale: getScaleFunction(),
                    yScale: getScaleFunction()
                }
            }
        }
        );

        let logo13 = Bodies.circle(200, 50, radius, {
            density: 0.0001,
            frictionAir: 0.01,
            restitution: 1,
            friction: 0.05,
            render: {
                sprite: {
                    texture: './logo/13.svg',
                    xScale: getScaleFunction(),
                    yScale: getScaleFunction()
                }
            }
        }
        );

        let logo14 = Bodies.circle(500, 50, 40, {
            density: 0.0001,
            frictionAir: 0.01,
            restitution: 1,
            friction: 0.05,
            render: {
                sprite: {
                    texture: './logo/14.svg',
                    xScale: getScaleFunction(),
                    yScale: getScaleFunction()
                }
            }
        }
        );

        let logo15 = Bodies.circle(500, 10, radius, {
            density: 0.0001,
            frictionAir: 0.01,
            restitution: 1,
            friction: 0.05,
            render: {
                sprite: {
                    texture: './logo/15.svg',
                    xScale: getScaleFunction(),
                    yScale: getScaleFunction()
                }
            }
        }
        );

        let logo16 = Bodies.circle(500, 10, radius, {
            density: 0.0001,
            frictionAir: 0.01,
            restitution: 1,
            friction: 0.05,
            render: {
                sprite: {
                    texture: './logo/16.svg',
                    xScale: getScaleFunction(),
                    yScale: getScaleFunction()
                }
            }
        }
        );

        let logo17 = Bodies.circle(500, 10, radius, {
            density: 0.0001,
            frictionAir: 0.01,
            restitution: 1,
            friction: 0.05,
            render: {
                sprite: {
                    texture: './logo/17.svg',
                    xScale: getScaleFunction(),
                    yScale: getScaleFunction()
                }
            }
        }
        );

        let logo18 = Bodies.circle(500, 10, radius, {
            density: 0.0001,
            frictionAir: 0.01,
            restitution: 1,
            friction: 0.05,
            render: {
                sprite: {
                    texture: './logo/18.svg',
                    xScale: getScaleFunction(),
                    yScale: getScaleFunction()
                }
            }
        }
        );

        let logo19 = Bodies.circle(500, 10, radius, {
            density: 0.0001,
            frictionAir: 0.01,
            restitution: 1,
            friction: 0.05,
            render: {
                sprite: {
                    texture: './logo/19.svg',
                    xScale: getScaleFunction(),
                    yScale: getScaleFunction()
                }
            }
        }
        );

        let logo20 = Bodies.circle(500, 50, 50, {
        density: 0.0001,
        frictionAir: 0.01,
        restitution: 1,
        friction: 0.05,
        render: {
            sprite: {
                texture: './logo/20.svg',
        xScale: getScaleFunction(),
        yScale: getScaleFunction()
            }
        }}
        );

        addBodyWithAnimation(logo1, delay += 150);
        addBodyWithAnimation(logo2, delay += 150);
        addBodyWithAnimation(logo3, delay += 150);
        addBodyWithAnimation(logo4, delay += 150);
        addBodyWithAnimation(logo5, delay += 150);
        addBodyWithAnimation(logo6, delay += 150);
        addBodyWithAnimation(logo7, delay += 150);
        addBodyWithAnimation(logo8, delay += 150);
        addBodyWithAnimation(logo9, delay += 150);
        addBodyWithAnimation(logo10, delay += 150);
        addBodyWithAnimation(logo11, delay += 150);
        addBodyWithAnimation(logo12, delay += 150);
        addBodyWithAnimation(logo13, delay += 150);
        addBodyWithAnimation(logo14, delay += 150);
        addBodyWithAnimation(logo15, delay += 150);
        addBodyWithAnimation(logo16, delay += 150);
        addBodyWithAnimation(logo17, delay += 150);
        addBodyWithAnimation(logo18, delay += 150);
        addBodyWithAnimation(logo19, delay += 150);
        addBodyWithAnimation(logo20, delay += 150);
    }
    function getScaleFunction() {
        // You can implement logic here to adjust the scale based on screen size
        // For example, return a smaller scale for smaller screens
        if (mediaQueryMatter.matches) {
            return 2;
        }
        else
            return 1.5;
    }

    function getRadius() {
        // Set your logic for radius based on media query
        if (mediaQueryMatter.matches) {
            return 75; // Set the radius for smaller screens
        } else {
            return 55; // Set the radius for larger screens
        }
    }

    function getRadiusBig() {
        // Set your logic for radius based on media query
        if (mediaQueryMatter.matches) {
            return 150; // Set the radius for smaller screens
        } else {
            return 110; // Set the radius for larger screens
        }
    }

    if (mediaQueryMatter.matches) {
        Composite.add(world, [
            // walls
            Bodies.rectangle(400, -300, 800, 5, { isStatic: true }),
            Bodies.rectangle(400, 780, 800, 5, { isStatic: true }),
            Bodies.rectangle(800, 300, 5, 900, { isStatic: true }),
            Bodies.rectangle(0, 300, 5, 900, { isStatic: true })
        ]);
    }
    else {
        Composite.add(world, [
            // walls
            Bodies.rectangle(400, -50, 1000, 100, { isStatic: true }),
            Bodies.rectangle(400, 550, 1000, 100, { isStatic: true }),
            Bodies.rectangle(900, 300, 10, 700, { isStatic: true }),
            Bodies.rectangle(-120, 300, 50, 700, { isStatic: true })
            ]);
    }

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 800, y: 500 }
    });



});