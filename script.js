function scrollToCollection() {
  document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! We will reach out soon.');
  this.reset();
});
