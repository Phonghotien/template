export default function active() {
  let aPanel = document.querySelectorAll('.actPanel');
  let body = document.querySelector('body');

  aPanel.forEach((v) => {
    let aBtn = v.querySelector('.actBtn');
    aBtn.addEventListener('click', () => {
      v.classList.toggle('active');

      body.classList.toggle('no-scroll-pop');
    });
    let cBtn = v.querySelector('.closeBtn');
    if (cBtn) {
      cBtn.addEventListener('click', () => {
        v.classList.remove('active');

        body.classList.remove('no-scroll-pop');
      });
    }
    document.addEventListener('click', function (e) {
      let aCheck = e.target.closest('.actPanel');
      if (aCheck !== v) {
        v.classList.remove('active');
        body.classList.remove('no-scroll-pop');
      }
    });
  });
}
