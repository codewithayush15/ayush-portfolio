// Navbar animation
gsap.from(".navbar",{
    y:-100,
    opacity:0,
    duration:1,
    ease:"power3.out"
});

// Hero text animation
gsap.from(".hero-content > *", {
    y: 35,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out",
    delay: 0.4
});

// Hero image animation
gsap.from(".profile-circle",{
    x:100,
    opacity:0,
    duration:1.2,
    ease:"power3.out",
    delay:0.8
});

window.addEventListener("scroll",()=>{

    const navbar=document.querySelector(".navbar");

    if(window.scrollY>50){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});

gsap.from(".social-icons a",{

    y:40,

    opacity:0,

    duration:1,

    stagger:0.15,

    delay:1.2,

    ease:"power3.out"

});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links li");
const menuIcon = menuToggle.querySelector("i");

let menuOpen = false;

menuToggle.addEventListener("click", () => {

    if (!menuOpen) {

        menuOpen = true;
        menuIcon.classList.remove("fa-bars");
menuIcon.classList.add("fa-xmark");

        navLinks.classList.add("active");

        gsap.fromTo(
            navLinks,
            {
                opacity: 0,
                y: -20
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.4,
                ease: "power2.out"
            }
        );

        gsap.fromTo(
            navItems,
            {
                opacity: 0,
                y: -10
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.3,
                stagger: 0.08,
                ease: "power2.out"
            }
        );

    } else {

        menuOpen = false;
        menuIcon.classList.remove("fa-xmark");
menuIcon.classList.add("fa-bars");

        gsap.to(navLinks, {
            opacity: 0,
            y: -20,
            duration: 0.25,
            ease: "power2.in",
            onComplete: () => {
                navLinks.classList.remove("active");
            }
        });

    }

});

// Close mobile menu after clicking a navigation link

navItems.forEach(item => {
    item.addEventListener("click", () => {

        if (menuOpen) {

            menuOpen = false;

            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");

            gsap.to(navLinks, {
                opacity: 0,
                y: -20,
                duration: 0.25,
                ease: "power2.in",
                onComplete: () => {
                    navLinks.classList.remove("active");
                }
            });

        }

    });
});

// About section scroll animation

gsap.from(".about-content", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power3.out"
});

gsap.fromTo(".about-card",
    {
        opacity: 0,
        y: 40
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".about-cards",
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    }
);

// Skills section scroll animation

gsap.fromTo(".skill-card",
    {
        opacity: 0,
        y: 50
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    }
);

// Projects section scroll animation

gsap.fromTo(".project-card",
    {
        opacity: 0,
        y: 60
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    }
);
// Contact section animation

gsap.fromTo(".contact-header",
    {
        opacity: 0,
        y: 50
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".contact",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    }
);

gsap.fromTo(".contact-info",
    {
        opacity: 0,
        x: -50
    },
    {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".contact-container",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    }
);

gsap.fromTo(".contact-form",
    {
        opacity: 0,
        x: 50
    },
    {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".contact-container",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    }
);


// Contact form interaction

const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const submitButton = contactForm.querySelector(".contact-submit");

        submitButton.disabled = true;
        submitButton.style.opacity = "0.7";

        formStatus.textContent = "Sending...";

        const formData = new FormData(contactForm);

        try {

            const response = await fetch(
                "https://formspree.io/f/mrpzewdd",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );

            if (response.ok) {

                formStatus.textContent =
                    "Message sent successfully! ✓";

                contactForm.reset();

            } else {

                formStatus.textContent =
                    "Something went wrong. Please try again.";

            }

        } catch (error) {

            formStatus.textContent =
                "Unable to send message. Please try again.";

        }

        submitButton.disabled = false;
        submitButton.style.opacity = "1";

    });

}
const hireButton = document.querySelector(".hire-btn");

if (hireButton) {
    hireButton.addEventListener("click", function () {
        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// Back to top button

const backToTop = document.querySelector("#backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

