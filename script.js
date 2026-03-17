const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list a');
const cards = document.querySelectorAll('.city');

if (hamburger && navList) {
  hamburger.addEventListener('click', function () {
    navList.classList.toggle('show');
    hamburger.classList.toggle('active');
  });
}

if (navLinks.length > 0) {
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navList && hamburger) {
        navList.classList.remove('show');
        hamburger.classList.remove('active');
      }
    });
  });
}

let currentPage = window.location.pathname.split('/').pop();

if (currentPage === "") {
  currentPage = "index.html";
}

navLinks.forEach(function (link) {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  if (cards.length > 0) {
    cards.forEach(function (card, index) {
      setTimeout(function () {
        card.classList.add('show');
      }, index * 150);
    });
  }
});