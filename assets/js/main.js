const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav__list');

burger.addEventListener('click', function() {
  burger.classList.toggle('active');
  navList.classList.toggle('active');
});
