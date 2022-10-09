console.log("hi");
const arrowsDown = document.getElementById('arrows-down');
const bio = document.querySelector('.about-title');

arrowsDown.addEventListener('click', () => {
  bio.scrollIntoView({behavior: "smooth"});
});
