export default function monaScroll() {
  let pos = document.querySelectorAll('.scrollPos');
  pos.forEach((el) => {
    let ani = true;
    window.addEventListener('scroll', () => {
      let _Pos = el.getBoundingClientRect().top;
      if (window.innerWidth > 900) _Pos += 200;
      if (ani && _Pos < window.innerHeight * 0.8) {
        el.classList.add('active');
        ani = !ani;
      }
    });
  });
}
