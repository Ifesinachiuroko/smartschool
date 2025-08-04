// Show/hide mobile navigation menu
function toggleMenu() {
  const menu = document.querySelector('.nav-links');
  menu.classList.toggle('show');
}

// Navigate to the admission page on "Get Started"
function getStarted() {
  window.location.href = "admission.html";
}
