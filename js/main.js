import createScrollTop from './modules/scrollToTop.js';
import menu from './modules/menu.js';
import active from './modules/active.js';
import linkFormat from './modules/link.js';
import SSwiper from './modules/swiper.js';
import counting from './modules/counting.js';
import round from './modules/roundtxt.js';
import paralax from './modules/paralax.js';
import formani from './modules/formani.js';
import select2 from './modules/select2.js';
import cursor from './modules/cursor.js';
import resize from './modules/resize.js';
import road from './modules/road.js';
import realPrl from './modules/realparallax.js';
import TableOfContentModule from './modules/TableOfContentModule.js';
import ScrollToSectionModule from './modules/ScrollToSectionModule.js';
import preload from './modules/preload.js';
import monamedia from './modules/monamedia.js';
import monaScroll from './modules/mona-scroll.js';
import createSlideDown from './modules/slidedown.js';
import playing from './modules/playing.js';
import newfeedPage from './modules/newfeedPage.js';
import newfeedFixed from './modules/newfeedFixed.js';
import { maps } from './modules/maps.js';
import gallery from './modules/gallery.js';
import popup from './modules/popup.js';
import smoothScroll from './modules/smoothScroll.js';
import typingLib from './modules/typingLib.js';
import toggleSlide from './modules/toggleSlide.js';
import readMore from './modules/readMore.js';
import listSub from './modules/listSub.js';
import getValueInputGroup from './modules/getValueInputGroup.js';

window.addEventListener('DOMContentLoaded', () => {
  monamedia();
  createScrollTop();
  menu();
  active();
  linkFormat();
  SSwiper();
  counting();
  round();
  formani();
  select2();
  resize();
  road();
  playing();
  newfeedPage();
  newfeedFixed();
  createSlideDown();
  TableOfContentModule();
  ScrollToSectionModule();
  maps();
  gallery();
  popup();
  smoothScroll();
  typingLib();
  toggleSlide();
  readMore();
  listSub();
  getValueInputGroup();
  if (window.innerWidth > 900) {
    cursor();
    paralax();
    realPrl();
  }
  monaScroll();
  preload();
});
AOS.init({
  once: true,
  // mirror: true,
  // anchorPlacement: 'top-bottom',
  disable: function () {
    var maxWidth = 1025;
    return window.innerWidth < maxWidth;
  },
  duration: '1000',
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    cursor();
  }
});
