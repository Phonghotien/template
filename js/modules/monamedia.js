export default function monamedia() {
  let txt = document.querySelectorAll('.preload__txt');
  txt.forEach((el, i) => {
    let time = i * 0.05 + `s`;
    el.style.transitionDelay = time;
    el.style.transform = `translate3d(0,0,0)`;
  });
}
