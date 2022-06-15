export default function menu() {
  ////////////// menu resize //////////////
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  ////////////// menu control //////////////

  var menuBtn = document.querySelector('.menuBtn');
  var menu = document.querySelector('.menuBoard');
  var menuBg = document.querySelector('.menuBg');

  menuBtn.addEventListener('click', menuAct);
  menuBg.addEventListener('click', menuAct);
  function menuAct() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');

    $('body').toggleClass('no-scroll');
  }
  document.addEventListener('click', function (e) {
    let mCheck = e.target.closest('.menuBoard');
    let bCheck = e.target.closest('.menuBtn');
    if (mCheck == null && bCheck == null) {
      menuBtn.classList.remove('active');
      menu.classList.remove('active');
      $('body').removeClass('no-scroll');
    }
  });

  ///////  header small  ////////
  window.addEventListener('scroll', () => {
    let hdSmall = document.querySelector('.hdSmall');
    window.scrollY > 0 ? hdSmall.classList.add('small') : hdSmall.classList.remove('small');
  });

  $('.btnDrop').click(function() {
    $(this).toggleClass('active')
    $(this).closest('.menu-item').find('.submenu').stop().slideToggle()
  })
}
