export default function animate() {
  let aFade = document.querySelectorAll(".fadeItem");
  aFade.forEach((v, i) => {
    setTimeout(function () {
      v.classList.add("active");
    }, 200 + 200 * i);
  });

  let aUp = document.querySelectorAll(".upItem");
  aUp.forEach((v, i) => {
    setTimeout(function () {
      v.classList.add("active");
    }, 200 + 100 * i);
  });
}
