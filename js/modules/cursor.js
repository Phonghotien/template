export default function cursor() {
  // custom cursor
  let cD = document.querySelector('.curDiamond');
  let cS = document.querySelector('.curShape');
  let cSL = document.querySelector('.curShape .left');
  let cSR = document.querySelector('.curShape .right');
  let _hover = false;
  let _vid = false;
  let _hovX = 0;
  let _hovY = 0;
  window.addEventListener('mousemove', cursor);
  function cursor(e) {
    let _X = e.clientX;
    let _Y = e.clientY;
    cD.style.left = _X + `px`;
    cD.style.top = _Y + `px`;
    if (_hover) {
      cS.style.left = _hovX + `px`;
      cS.style.top = _hovY + `px`;
    } else {
      cS.style.left = _X + `px`;
      cS.style.top = _Y + `px`;
    }
  }

  //  get animation slower when hover ITEM
  let cIt = document.querySelectorAll('.curItem');
  cIt.forEach((el) => {
    let _w = el.offsetWidth + 20 + `px`;
    let _h = el.offsetHeight + 20 + `px`;
    el.addEventListener('mouseenter', () => {
      _hover = true;
      _hovX = el.getBoundingClientRect().left + el.offsetWidth / 2;
      _hovY = el.getBoundingClientRect().top + el.offsetHeight / 2;

      el.getAttribute('no-click') == 'true' ? '' : cD.classList.add('click');
      cS.style.width = _w;
      cS.style.height = _h;
      cSL.style.width = `1rem`;
      cSR.style.width = `1rem`;
      cS.style.transform = `translate(-50%, -50%)  rotate(0)`;
      cD.style.transform = `translate(-50%, -50%)  rotate(-45deg) scale(0.7)`;
    });
    el.addEventListener('mouseleave', curOut);
  });

  //  get animation when hover SQUARE ITEM
  let cI = document.querySelectorAll('.curItemSqr');
  cI.forEach((el) => {
    let _w = el.offsetWidth + 20 + `px`;
    let _h = el.offsetHeight + 20 + `px`;

    el.addEventListener('mouseenter', () => {
      cS.style.width = _w;
      cS.style.height = _h;
      cSL.style.width = `50%`;
      cSR.style.width = `50%`;
      cD.classList.add('click');
    });
    el.addEventListener('mouseleave', curOut);
  });

  //  get animation when hover INPUT
  let cIp = document.querySelectorAll('.curInp');
  cIp.forEach((el) => {
    el.addEventListener('mouseenter', curInp);
    el.addEventListener('mouseleave', curOut);
  });

  //  get animation when hover VIDEO
  if (window.innerWidth > 1200) {
    let board = document.querySelectorAll('.curBoard');
    board.forEach((el) => {
      let cIv = el.querySelector('.curVid');
      let play = el.querySelector('.curLink');

      el.addEventListener('mousemove', function vidPos(e) {
        play.classList.add('active');
        // play.style.top = e.offsetY + `px`;

        // play.style.left = (e.pageX % (window.innerWidth / 2)) + `px`;
        curVid();
      });

      el.addEventListener('mouseleave', function vidOut() {
        play.classList.remove('active');
        play.style.top = play.getAttribute('deftop');
        play.style.left = play.getAttribute('defleft');

        curOut();
      });
    });
  }

  // hover VIDEO hide cursor
  function curVid() {
    _vid = true;
    // cS.style.opacity = `0`;
    // cD.style.opacity = `0`;
  }

  // function IN OUT
  function curInp() {
    cD.style.opacity = `0`;
    cS.style.width = `1px`;
    cS.style.height = `3rem`;
    cSL.style.width = `1rem`;
    cSR.style.width = `1rem`;
    cS.style.transform = `translate(-50%, -50%)  rotate(0)`;
  }
  function curOut() {
    cD.classList.remove('click');
    cD.style.opacity = `1`;
    cS.style.opacity = `1`;
    cS.style.width = `4.4rem`;
    cS.style.height = `4.4rem`;
    cSL.style.width = `2.2rem`;
    cSR.style.width = `2.2rem`;
    cS.style.transform = `translate(-50%, -50%)  rotate(-45deg)`;
    cD.style.transform = `translate(-50%, -50%)  rotate(-45deg)`;
    _hover = false;
    _vid = false;
  }

  // Develope by xDyy 
}
