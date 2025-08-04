function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  const isVisible = nav.style.display === 'flex';
  nav.style.display = isVisible ? 'none' : 'flex';
}

function submitApplication(event) {
  event.preventDefault();

  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const course = document.getElementById('course').value;
  const message = document.getElementById('message').value.trim();

  if (!fullName || !email || !phone || !course || !message) {
    alert('Please fill in all fields.');
    return false;
  }

  // You can add real form submission here
  alert(`Thank you, ${fullName}, your application for "${course}" has been submitted!`);

  document.querySelector('.admission-form').reset();
  return false;
}
