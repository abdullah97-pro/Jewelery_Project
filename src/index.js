const navbar = document.getElementById('navbar-collapse');
const btntoggler = document.getElementById('navbar-toggler');
const discard = document.getElementById('discard');

btntoggler.addEventListener('click', () => {
  navbar.classList.add('active');
});

discard.addEventListener('click', () => {
  navbar.classList.remove('active');
});
