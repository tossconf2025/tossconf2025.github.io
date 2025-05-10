
// Simple tab functionality for schedule
document.addEventListener('DOMContentLoaded', function() {
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
