// JavaScript for interactivity
document.addEventListener('DOMContentLoaded', () => {
  // Slideshow logic
  const slides = document.querySelectorAll('.slideshow img');
  let currentIndex = 0;

  setInterval(() => {
    slides.forEach((slide, index) => {
      slide.style.display = index === currentIndex ? 'block' : 'none';
    });
    currentIndex = (currentIndex + 1) % slides.length;
  }, 3000); // Change slide every 3 seconds
});

function scrollLeft(listId) {
  const list = document.getElementById(listId);
  list.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight(listId) {
  const list = document.getElementById(listId);
  list.scrollBy({ left: 300, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  // Existing JavaScript...

  // Contact form submission handling
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
      // Here, send the email (needs backend setup, e.g., using a server or email API)
      alert('Thank you! I will try to read your message and get back to you as soon as possible.');
      contactForm.reset(); // Clear the form after submission
    } else {
      alert('Please fill out all fields.');
    }
  });
});
