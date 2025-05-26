
function showDay(dayId) {
  // Hide all timelines
  document.querySelectorAll('.timeline').forEach(timeline => {
    timeline.classList.remove('active');
  });
  
  // Show selected timeline
  document.getElementById(dayId).classList.add('active');
  
  // Update button states
  document.querySelectorAll('.day-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Add active class to clicked button
  event.target.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {

        const dayBtns = document.querySelectorAll('.day-btn');
        const timelines = document.querySelectorAll('.timeline');
        
        dayBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                dayBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                // Hide all timelines
                timelines.forEach(timeline => timeline.classList.remove('active'));
                // Show selected timeline
                const day = btn.getAttribute('data-day');
                document.querySelector(`.timeline.${day}`).classList.add('active');
            });
        });




  const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-container')) {
        navMenu.classList.remove('active');
      }
    });
  // Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
  const sections = document.querySelectorAll('section');

const observerOptions = {
root: null, // use viewport as reference
rootMargin: '0px',
threshold: 0.1 // trigger when at least 10% of the section is visible
};

const sectionObserver = new IntersectionObserver(function(entries) {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    // Optionally stop observing the section after it's been animated
    // sectionObserver.unobserve(entry.target);
  }
});
}, observerOptions);
// Observe all sections
sections.forEach(section => {
sectionObserver.observe(section);
});
});
        // Tab switching functionality
        document.querySelectorAll('.tab-btn').forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and days
                document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.schedule-day').forEach(day => day.classList.remove('active'));

                // Add active class to clicked button and corresponding day
                button.classList.add('active');
                document.querySelector(`.schedule-day.${button.dataset.day}`).classList.add('active');
            });
        });

// Fixed Popup Script

document.addEventListener('DOMContentLoaded', function() {
    // Tab Functionality
    const tabBtns = document.querySelectorAll('.tab-btn');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and content
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.schedule-day').forEach(day => day.classList.remove('active'));

            // Add active class to clicked button and relevant content
            this.classList.add('active');
            const dayId = this.getAttribute('data-day');
            document.querySelector(`.${dayId}`).classList.add('active');
        });
    });

    // Toggle Navigation Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container')) {
            navMenu.classList.remove('active');
        }
    });

    // Popup Functionality
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.getAttribute('data-title');
            const time = item.querySelector('.time').textContent;
            const description = item.getAttribute('data-description');
            const imageSrc = item.getAttribute('data-image');

            const popup = document.querySelector('.popup');
            const popupTitle = popup.querySelector('#popup-title');
            const popupTime = popup.querySelector('#popup-time');
            const popupDescription = popup.querySelector('#popup-description');
            const popupImage = popup.querySelector('#popup-image');

            popupTitle.textContent = title;
            popupTime.textContent = time;
            popupDescription.textContent = description;
            popupImage.src = imageSrc;
            popup.classList.add('show');
        });
    });

    // Close Popup
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('popup-close') || e.target.classList.contains('popup')) {
            document.querySelector('.popup').classList.remove('show');
        }
    });
});
