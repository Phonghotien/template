export default function realPrl() {
  if (document.querySelector('.realPRL')) {
    VanillaTilt.init(document.querySelectorAll('.realPRL'), {
      max: 15,
      speed: 400,
    });
  }
  if (document.querySelector('.realPRLsmall')) {
    VanillaTilt.init(document.querySelectorAll('.realPRLsmall'), {
      max: 35,
      speed: 400,
    });
  }
}
