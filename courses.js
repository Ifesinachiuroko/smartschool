function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  const isOpen = nav.style.display === 'flex';
  nav.style.display = isOpen ? 'none' : 'flex';
}

function enroll(courseName){
alert(`You have selected to enroll in: ${courseName}`);
  // Optionally redirect or store course info
  // window.location.href = "enroll.html?course=" + encodeURIComponent(courseName);
}
