export default function createScrollTop() {
  const scrollTopBtn = document.querySelector('.backToTop');
  const toggleClass = () => {
    pageYOffset >= 300 ? scrollTopBtn.classList.add('active') : scrollTopBtn.classList.remove('active');
  };
  const scrollTop = () => {
    if (pageYOffset > 0) {
      window.scrollTo(0, pageYOffset - pageYOffset / 8);
      requestAnimationFrame(scrollTop);
    }
  };
  document.addEventListener('DOMContentLoaded', toggleClass);
  window.addEventListener('scroll', toggleClass);
  scrollTopBtn.addEventListener('click', scrollTop);
}
