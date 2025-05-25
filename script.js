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



        const eventDetails = {
            keynote1: {
                image: "./images/schedule/scikit.png",
                title: "Scikit-Image பயன்படுத்தி படிமச் செயலாக்கம் ",
                speaker: "செந்தில்குமார்",
                time: "9:00 AM - 10:00 AM",
                location: "Main Auditorium",
                
                description: "இந்த இணைய உரையில், செந்தில்குமார் அவர்கள் Scikit-Image நூலகத்தின் மூலம் படிமங்களை எளிமையாகவும் திறமையாகவும் எவ்வாறு செயலாக்கலாம் என்பதைக் கற்பிப்பார். இது படிம வடிவமைப்பு, அம்ச சோதனை மற்றும் கணினிக் காட்சி பயில்வோருக்கான ஒரு சிறந்த வாய்ப்பாகும்."
              
              },
           
           
                workshop1: {
                image: "./images/schedule/inkscape.jpeg",
                title: "Inkscape மூலம் வடிவமைப்புகளை உருவாக்குதல் :ஆரம்பநிலைக்கு எளிதான வழிகாட்டி",
                speaker: "பரமேஷ்வர் அருணாசலம்",
                time: "10:30 AM - 12:00 PM",
                location: "Workshop Room A",
                description: "இந்த பணிமனைச் செய்முறைத் தொடரில், Inkscape மென்பொருள் பயன்படுத்தி எளிய மற்றும் ஈர்க்கக்கூடிய வடிவமைப்புகளை உருவாக்குவது கற்றுக்கொள்ளலாம். இது ஆரம்பநிலையர்களுக்கான சிறந்த வடிவமைப்பு பயிற்சி ஆகும்."
               },



            panel1: {
                image: "./images/schedule/ai_future.jpeg",
                title: "செயற்கை நுண்ணறிவுக் காலத்தில் கட்டற்ற மென்பொருட்களின் பங்கும் பயனும்",
                speaker: "மயூரன்",
                time: "1:00 PM - 2:30 PM",
                location: "Conference Hall B",
                description: "இந்த கலந்துரையாடலில், செயற்கை நுண்ணறிவின் வளர்ச்சியுடன் கட்டற்ற மென்பொருட்கள் எவ்வாறு முக்கிய பங்கு வகிக்கின்றன என்பதையும், அவற்றின் நன்மைகள் என்ன என்பதையும் விவாதிக்கப்படும். "
              },




            networking1: {
                image: "./images/schedule/golang.png",
                title: "Golang பற்றிய அறிமுகம்",
                speaker: "மோகன் ராமன்",
                time: "3:30 PM - 4:30 PM",
                location: "Networking Lounge",
                description: "இந்த நிகழ்வில், Golang மென்பொருள் மொழியின் அடிப்படை அம்சங்களை மற்றும் அதன் செயல்திறனையும் பயனாளர்களுக்காக எளிமையாக அறிமுகப்படுத்தப்படும். செயல்திறனும் நம்பகத்தன்மையும் தேடும் டெவலப்பர்களுக்கான சிறந்த தொடக்கவழிகாட்டி."
            
              },






            closing1: {
              image: "./images/schedule/games.jpeg",
                title: "லினக்ஸ் Games: ஒரு அறிமுகம உரை",
                speaker: "கலைஅரசன்",
                time: "5:00 PM - 5:30 PM",
                location: "Main Auditorium",
                description: "இந்த உரையில், லினக்ஸ் தளத்தில் விளையாட்டுகளை இயக்குவதற்கான விருப்பங்கள், சாதனைகள் மற்றும் அண்மைய முன்னேற்றங்கள் பற்றிய எளிய mutta சுவாரசியமான பார்வை வழங்கப்படும்."
           
              },




            keynote2: {
              image: "./images/schedule/ai_linux.jpeg",
                title: "செயற்கை நுண்ணறிவு பற்றிய சுருக்கமான அறிமுகம்",
                speaker: "ராஜவசந்தன்",
                time: "9:00 AM - 10:00 AM",
                location: "Main Auditorium",
                description: "இந்த தொடக்க உரையில், செயற்கை நுண்ணறிவு என்ன, அது எவ்வாறு செயல்படுகிறது மற்றும் அதன் பயன்பாடுகள் எதென்று எளிமையாக அறிமுகப்படுத்தப்படும். தொழில்நுட்ப உலகை புரிந்துகொள்ள விரும்புபவர்களுக்கு ஒரு சிறந்த ஆரம்பம்."
           
              },




            demo1: {
              image: "./images/schedule/docker.png",
                title: "Docker: புதியவர்களுக்கான எளிய அறிமுகம் மற்றும் பயன்பாட்டு விளக்கம்",
                speaker: "சாகில்",
                time: "10:30 AM - 12:00 PM",
                location: "Innovation Showcase Area",
                description: "இந்த அமர்வில், தொகுப்பு மற்றும் கொண்டெய்னர் மாடலில் பயன்படும் Docker குறித்த அடிப்படைக் கருத்துகள் மற்றும் நடைமுறை பயன்பாடுகள் தெளிவாக விளக்கப்படும். புதியவர்களுக்கு இது ஒரு நடைமுறை வழிகாட்டியாக அமையும்."
        
              },



            workshop2: {
              image: "./images/schedule/fastapi.png",
                title: "FastAPI - ஒரு அறிமுகம உரை்",
                speaker: "அதிபன்",
                time: "1:00 PM - 2:30 PM",
                location: "Workshop Room A",
                description: "இந்த அமர்வில், மேற்படிநிலை வலை சேவைகளை விரைவாக உருவாக்க உதவும் FastAPI பற்றிய அடிப்படை விளக்கங்களும், அதன் செயல்திறன் மற்றும் எளிதான நடைமுறைகளும் அறிமுகப்படுத்தப்படும். Python டெவலப்பர்களுக்கான ஒரு விரைவான தொடக்கவழிகாட்டி."
           
              },



            awards: {
              image: "./images/schedule/ml_scikit.jpeg",
                title: "Scikit Learn மூலம் கற்கும் கருவிகள் உருவாக்கம் - ஒரு அறிமுகம உரை",
                speaker: "பிரவீன் ஆர்",
                time: "3:30 PM - 4:30 PM",
                location: "Main Auditorium",
                description: "இந்த உரையில், இயந்திர கற்றலை (Machine Learning) Scikit Learn நூலகம் மூலம் எளிமையாக புரிந்து கொண்டு, கற்றல் மாடல்கள் உருவாக்கும் முறை பற்றிய அறிமுகம் வழங்கப்படும். ஆரம்ப நிலை ஆர்வலர்களுக்கு ஏற்ற தொடக்கமாக அமையும்."
          
          
              },



            closing2: {
              image: "./images/schedule/lambda.png",
                title: "லேம்டா (lambda functions) - ஓர் அறிமுகம்",
                speaker: "பிரித்திவிராஜ்",
                time: "5:00 PM - 6:00 PM",
                location: "Main Auditorium",
                description: "இந்த உரையில், Python இல் உள்ள லேம்டா செயல்பாடுகள் பற்றிய அடிப்படைகளை, அவை எப்போது மற்றும் எவ்வாறு பயன்படுத்தப்படுகின்றன என்பதை எளிதாக விளக்கும் தொடக்கவழிகாட்டி வழங்கப்படும். குறும்பணிகளை எழுத ஆர்வமுள்ளவர்களுக்கு இது பயனளிக்கும்."
           
              }



        };

        function switchDay(dayId, button) {
            // Hide all day contents
            document.querySelectorAll('.schedule-content').forEach(content => {
                content.style.display = 'none';
            });

            // Show selected day
            document.getElementById(dayId).style.display = 'block';

            // Update active tab
            document.querySelectorAll('.day-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            button.classList.add('active');
        }

        function openModal(eventId) {
            const event = eventDetails[eventId];
            if (!event) return;

            const modalContent = document.getElementById('modalContent');
            modalContent.innerHTML = `
                <div class="speaker-photo">
                    <img src= ${event.image} alt="Description of image">

                </div>
                <div class="event-details">
                    <h3>${event.title}</h3>
                    <div class="event-meta">
                        <p><strong>Speaker:</strong> ${event.speaker}</p>
                        <p><strong>Time:</strong> ${event.time}</p>
                        <p><strong>Location:</strong> ${event.location}</p>
                    </div>
                    <div class="event-description">
                        <h4>About this Session:</h4>
                        <p>${event.description}</p>
                    </div>
                </div>
            `;

            document.getElementById('modalOverlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal(event) {
            if (event && event.target !== event.currentTarget) return;
            
            document.getElementById('modalOverlay').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });
