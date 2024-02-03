const splitTypes = document.querySelectorAll('.reveal-type');

splitTypes.forEach((char, i) => {
    const text = new SplitType(char, { types: 'chars' });

    // Set initial opacity to 0
    gsap.set(text.chars, { opacity: 1 });

    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: 'top 30%',
            end: 'top top',
            scrub: true,
            // markers: true,
        },
        duration: 0.5, // Adjust the duration as needed
        stagger: 0.1,
        opacity: 0.2, // Set the target opacity to 1
    }, "a");
});
