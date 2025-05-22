// Navbar Toggle Functionality
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close nav on link click
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });

    // Close nav if clicking outside the menu
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-container')) {
        navMenu.classList.remove('active');
      }
    });
  }

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

  // Intersection Observer for Animation
  const sections = document.querySelectorAll('section');
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  // Schedule Tab Switching
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.schedule-day').forEach(day => day.classList.remove('active'));

      this.classList.add('active');
      const dayId = this.getAttribute('data-day');
      document.querySelector(`.${dayId}`).classList.add('active');
    });
  });

  // Timeline Day Switching
  const dayBtns = document.querySelectorAll('.day-btn');
  const timelines = document.querySelectorAll('.timeline');

  dayBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dayBtns.forEach(b => b.classList.remove('active'));
      timelines.forEach(timeline => timeline.classList.remove('active'));

      btn.classList.add('active');
      const day = btn.getAttribute('data-day');
      document.querySelector(`.timeline.${day}`).classList.add('active');
    });
  });

  // Timeline Popup
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach(item => {
    item.addEventListener('click', () => {
      const title = item.getAttribute('data-title');
      const time = item.querySelector('.time')?.textContent || '';
      const description = item.getAttribute('data-description');
      const imageSrc = item.getAttribute('data-image');

      const popup = document.querySelector('.popup');
      if (popup) {
        popup.querySelector('#popup-title').textContent = title;
        popup.querySelector('#popup-time').textContent = time;
        popup.querySelector('#popup-description').textContent = description;
        popup.querySelector('#popup-image').src = imageSrc;
        popup.classList.add('show');
      }
    });
  });

  // Close Popup
  document.addEventListener('click', (e) => {
    if (
      e.target.classList.contains('popup') ||
      e.target.classList.contains('popup-close')
    ) {
      document.querySelector('.popup')?.classList.remove('show');
    }
  });
});
