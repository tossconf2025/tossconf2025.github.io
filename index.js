// DOM Elements
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileSidebar = document.querySelector(".mobile-sidebar");
const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
const heroContainer = document.getElementById("hero-container");
const mapElement = document.getElementById("map");

// Mobile Menu Toggle
mobileMenuButton.addEventListener("click", () => {
    mobileSidebar.classList.toggle("open");

    // Toggle hamburger icon animation
    const spans = document.querySelectorAll(".hamburger-icon span");
    if (mobileSidebar.classList.contains("open")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
    } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
    }
});

// Close mobile menu when clicking a link
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileSidebar.classList.remove("open");

        // Reset hamburger icon
        const spans = document.querySelectorAll(".hamburger-icon span");
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
    });
});

// Responsive Hero Content
function updateHeroContent() {
    const isMobile = window.innerWidth < 768;

    // Hero content for mobile and desktop
    const heroContent = `
        ${
            isMobile
                ? `
            <img src="assets/logo.png" alt="தமிழ் கட்டற்ற மென்பொருள் மாநாடு" class="hero-logo">
            <h1 class="hero-title">தமிழ் கட்டற்ற மென்பொருள் மாநாடு 2025</h1>
            <p class="hero-date">
                <span class="hero-date-label">மே 17-18, 2025</span>
            </p>
            <div class="hero-location">
                <p class="hero-location-text">
                    <span class="hero-location-label">இடம்:</span> 
                    செயிண்ட் ஜோசப் தொழில்நுட்ப நிறுவனம், சென்னை
                </p>
            </div>
        `
                : `
            <img src="assets/logo.png" alt="தமிழ் கட்டற்ற மென்பொருள் மாநாடு" class="hero-logo">
            <div class="hero-content-right">
                <h1 class="hero-title">தமிழ் கட்டற்ற மென்பொருள் மாநாடு 2025</h1>
                <p class="hero-date">
                    <span class="hero-date-label">மே 17-18, 2025</span>
                </p>
                <div class="hero-location">
                    <p class="hero-location-text">
                        <span class="hero-location-label">இடம்:</span> 
                        செயிண்ட் ஜோசப் தொழில்நுட்ப நிறுவனம், பழைய மஹாபலிபுரம் சாலை, காமராஜ் நகர், 
                        செம்மஞ்சேரி, சென்னை, தமிழ்நாடு – 600119
                    </p>
                </div>
            </div>
        `
        }
    `;

    // Update hero content
    heroContainer.innerHTML = heroContent;
}

// Initialize and update hero content on resize
updateHeroContent();
window.addEventListener("resize", updateHeroContent);

// Dynamic gradient background in hero section
const heroGradient = document.querySelector(".hero-gradient");
let gradientPos = 0;

function animateGradient() {
    gradientPos = (gradientPos + 1) % 360;
    heroGradient.style.background = `linear-gradient(${gradientPos}deg, rgba(24, 195, 193, 1) 18%, rgba(24, 141, 208, 1) 70%)`;
    requestAnimationFrame(animateGradient);
}

// Uncomment to enable gradient animation
// animateGradient();

// Fix the map container alignment
function fixMapAlignment() {
    // Add container for the map with proper styling
    const locationSection = document.querySelector(".location-section");
    const mapContainer = document.createElement("div");
    mapContainer.style.width = "100%";
    mapContainer.style.maxWidth = "72rem";
    mapContainer.style.margin = "0 auto";

    // Move the map inside the new container
    if (mapElement && locationSection) {
        mapElement.parentNode.insertBefore(mapContainer, mapElement);
        mapContainer.appendChild(mapElement);
    }
}

// Initialize Google Map
function initGoogleMap() {
    // St. Joseph's Institute of Technology coordinates (Chennai)
    const sjitLocation = { lat: 12.8688, lng: 80.2268 };

    // Create map
    const map = new google.maps.Map(document.getElementById("map"), {
        center: sjitLocation,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
    });

    // Create marker
    const marker = new google.maps.Marker({
        position: sjitLocation,
        map: map,
        title: "செயிண்ட் ஜோசப் தொழில்நுட்ப நிறுவனம்",
    });

    // Create info window
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div style="padding: 10px; max-width: 200px; font-family: system-ui, sans-serif;">
                <strong>செயிண்ட் ஜோசப் தொழில்நுட்ப நிறுவனம்</strong><br>
                பழைய மஹாபலிபுரம் சாலை,<br>
                காமராஜ் நகர், செம்மஞ்சேரி,<br>
                சென்னை, தமிழ்நாடு – 600119
            </div>
        `,
    });

    // Open info window on marker click
    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });

    // Open info window by default
    infoWindow.open(map, marker);
}

// Load Google Maps API
function loadGoogleMapsAPI() {
    const script = document.createElement("script");
    script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&callback=initGoogleMap";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

// Initialize map when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    fixMapAlignment();
    loadGoogleMapsAPI();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Offset for fixed navbar
            const navbarHeight = document.querySelector(".navbar").offsetHeight;
            const targetPosition =
                targetElement.getBoundingClientRect().top +
                window.pageYOffset -
                navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            });
        }
    });
});

// Add active class to nav links on scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionHeight = section.offsetHeight;

        if (
            window.pageYOffset >= sectionTop &&
            window.pageYOffset < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// Add reveal animations for elements when they enter viewport
const revealElements = document.querySelectorAll(
    ".section-heading, .about-image, .about-description, .org-item, .contact-card, .location-address"
);

function checkReveal() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("revealed");
        }
    });
}

// Add CSS for reveal animations
const style = document.createElement("style");
style.textContent = `
    .section-heading, .about-image, .about-description, .org-item, .contact-card, .location-address {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .nav-link.active, .mobile-nav-link.active {
        color: #2563eb;
        font-weight: 600;
    }
    
    .location-section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .location-info {
        max-width: 72rem;
        width: 100%;
        margin-bottom: 1.5rem;
    }
    
    .location-map {
        width: 100%;
        max-width: 72rem;
        margin: 0 auto;
    }
`;
document.head.appendChild(style);

// Check for elements to reveal on scroll and on load
window.addEventListener("scroll", checkReveal);
window.addEventListener("load", checkReveal);
