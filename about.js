function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  const isOpen = nav.style.display === 'flex';
  nav.style.display = isOpen ? 'none' : 'flex';
}
