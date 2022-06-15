export default function round() {
  let btn = document.querySelectorAll('.round360');
  btn.forEach((v) => {
    let arr = v.textContent.split('');
    v.innerHTML = '';
    arr.forEach((av) => {
      v.innerHTML += `<div class="letter">` + av + `</div>`;
    });
    let letter = v.querySelectorAll('.letter');
    letter.forEach((lv, li) => {
      let deg = -(li * 14 - 20);
      let delay = li * 0.1;
      lv.style.transform = `rotate(` + deg + `deg)`;
      lv.style.animationDelay = delay + `s`;
    });
  });
  let txt = document.querySelectorAll('.roundTxt');
  txt.forEach((v) => {
    let arr = v.textContent.split('');
    v.innerHTML = '';
    arr.forEach((av) => {
      v.innerHTML += `<div class="letter">` + av + `</div>`;
    });
    let letter = v.querySelectorAll('.letter');
    letter.forEach((lv, li) => {
      let deg = -(li * 11 - 20);
      let delay = li * 0.1;
      lv.style.transform = `rotate(` + deg + `deg)`;
      lv.style.animationDelay = delay + `s`;
    });
  });
}
