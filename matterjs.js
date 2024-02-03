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

    Render.run(render);

    // Create a composite for logos
    var runner = Runner.create();
    Runner.run(runner, engine);

    let radius = getRadius()
    let radiusBig = getRadiusBig()


    function createBodies() {
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

        Composite.add(world, logo1);

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

        Composite.add(world, logo2);


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

        Composite.add(world, logo3);

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

        Composite.add(world, logo4);

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

        Composite.add(world, logo5);

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

        Composite.add(world, logo6);

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

        Composite.add(world, logo7);

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

        Composite.add(world, logo8);

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

        Composite.add(world, logo9);

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

        Composite.add(world, logo10);

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

        Composite.add(world, logo11);

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

        Composite.add(world, logo12);

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

        Composite.add(world, logo13);

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

        Composite.add(world, logo14);

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

        Composite.add(world, logo15);

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

        Composite.add(world, logo16);

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

        Composite.add(world, logo17);

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

        Composite.add(world, logo18);

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

        Composite.add(world, logo19);

        // let logo20 = Bodies.circle(500, 50, 50, {
        // density: 0.0001,
        // frictionAir: 0.01,
        // restitution: 1,
        // friction: 0.05,
        // render: {
        //     sprite: {
        //         texture: './logo/20.svg',
        // xScale: getScaleFunction(),
        // yScale: getScaleFunction()
        //     }
        // }}
        // );

        // Composite.add(world, logo20);
    }
    createBodies()

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
            Bodies.rectangle(400, -50, 800, 10, { isStatic: true }),
            Bodies.rectangle(400, 550, 1000, 110, { isStatic: true }),
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