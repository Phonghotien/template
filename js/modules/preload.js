export default function preload() {
  let pre = document.querySelector('.preload');
  let ban = document.querySelector('.banner');
  if (pre) {
    setTimeout(() => {
      pre.style.transform = `translate3d(0,100%,0)`;
      setTimeout(() => {
        pre.remove();
        if (ban) {
          ban.classList.add('active');
        }
      }, 450);
    }, 1200);
  }
}
