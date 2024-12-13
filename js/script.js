const cardContainer = document.getElementById('cardContainer');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

    // Fungsi untuk scroll ke kiri
    prevButton.addEventListener('click', () => {
      cardContainer.scrollBy({
        left: -300, // Geser ke kiri sejauh 300px
        behavior: 'smooth'
      });
    });

    // Fungsi untuk scroll ke kanan
    nextButton.addEventListener('click', () => {
      cardContainer.scrollBy({
        left: 300, // Geser ke kanan sejauh 300px
        behavior: 'smooth'
      });
    });

    
    // Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function(){
      hamburger.classList.toggle('hamburger-active');
      navMenu.classList.toggle('hidden');
  } );
  
  //Navbar Fixed
  
  window.onscroll = function(){
      const header = document.querySelector('header');
      const fixedNav = header.offsetTop;
  
      if(window.scrollY > fixedNav) {
          header.classList.add('navbar-fixed');
      } else {
          header.classList.remove('navbar-fixed');
      }
  };