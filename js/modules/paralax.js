export default function paralax() {
  let parallax = document.querySelector('.project-show');
  if (parallax) {
    let item = parallax.querySelectorAll('.project-show-item');
    item.forEach((el) => {
      let _w = el.offsetWidth;
      let _h = el.offsetHeight;
      let img = el.querySelector('img');
      el.addEventListener('mousemove', (e) => {
        let _x = e.offsetX;
        let _y = e.offsetY;

        let X = (_x - _w / 2) / 10;
        let Y = (_y - _h / 2) / 10;

        img.style.transform = `translate(` + X + `px,` + Y + `px)`;
      });
      el.addEventListener('mouseleave', () => {
        img.style.transform = `none`;
      });
    });
  }

  // ADD PARALLAX FOR PADE WEBDEMO_DETAIL
  let parallax_two = document.querySelector('.all');
  if (parallax_two) {
    let item = parallax_two.querySelectorAll('.layer');
    item.forEach((el) => {
      let _w = el.offsetWidth;
      let _h = el.offsetHeight;
      let img = el.querySelector('img');
      el.addEventListener('mousemove', (e) => {
        let _x = e.offsetX;
        let _y = e.offsetY;

        let X = (_x - _w / 2) / 10;
        let Y = (_y - _h / 2) / 10;

        img.style.transform = `translate(` + X + `px,` + Y + `px)`;
      });
      el.addEventListener('mouseleave', () => {
        img.style.transform = `none`;
      });
    });
  }
}
