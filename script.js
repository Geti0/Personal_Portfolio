// Toggle mobile menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Sticky navigation on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(el);
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu if open
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger-icon");
      if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        icon.classList.remove('open');
      }
    }
  });
});

// Add parallax effect to profile image
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const profileImg = document.querySelector('#profile-image');
  if (profileImg && scrolled < window.innerHeight) {
    profileImg.style.transform = `scale(${1 + scrolled * 0.0001}) translateY(${scrolled * 0.1}px)`;
  }
});

// Typing effect for tagline
const tagline = document.querySelector('.tagline');
if (tagline) {
  const text = tagline.textContent;
  tagline.textContent = '';
  tagline.style.opacity = '1';
  let index = 0;

  setTimeout(() => {
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        tagline.textContent += text.charAt(index);
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);
  }, 1000);
}

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });

  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Form submission feedback
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    const submitBtn = contactForm.querySelector('.submit-btn');
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Let the form submit naturally to Web3Forms
    // The button will reset on page reload or you can add success handling
  });
}
