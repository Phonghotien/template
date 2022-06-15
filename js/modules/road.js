export default function road() {
  let item = document.querySelectorAll('.road__item');
  item.forEach((el) => {
    let a = true;
    window.addEventListener('scroll', () => {
      let pos = el.getBoundingClientRect().top + 200;
      if (a && pos < window.innerHeight * 0.95) {
        el.classList.add('active');
        a = !a;
      }
    });
  });
}
