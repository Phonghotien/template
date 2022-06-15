export default function resize() {
  window.addEventListener('resize', () => {
    let txt1 = document.querySelectorAll('.txtbg1');
    let txt2 = document.querySelectorAll('.txtbg2');

    txt1.forEach((el) => {
      el.style.animatonDelay = '-20s';
    });
    txt2.forEach((el) => {
      el.style.animatonDelay = '40s';
    });
  });
}
