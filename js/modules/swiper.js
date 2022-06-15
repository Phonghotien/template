export default function SSwiper() {
  let Slide = document.querySelectorAll('.swiper-chung');
  Slide.forEach((s, i, a) => {
    let sCon = s.querySelector('.swiper-container');
    let sPag = s.querySelector('.swiper-pagination');
    let sNext = s.querySelector('.swiper-button-next');
    let sPrev = s.querySelector('.swiper-button-prev');
    let cter = s.querySelector('.autocenter');
    // fade
    let fade = s.querySelector('.sFade');
    let sEffect = 'slide';
    if (fade) {
      sEffect = 'fade';
    }
    // direction
    let direction = s.querySelector('.sVer');
    let sDir = 'horizontal';
    if (direction) {
      sDir = 'vertical';
    }

    // loop
    let sCheckLoop = s.querySelector('.noloop');
    let sLoop = true;
    if (sCheckLoop) {
      sLoop = false;
    }
    // check Item to enable slide
    let sItem = s.querySelectorAll('.swiper-slide');
    let checkItem = 0;
    sItem.forEach((i) => {
      checkItem += i.offsetWidth;
    });

    if (checkItem > sCon.offsetWidth) {
      //enable swiper
      sNext.style.display = 'block';
      sPrev.style.display = 'block';

      let swiper = new Swiper(sCon, {
        direction: sDir,
        loop: sLoop,
        slidesPerView: 'auto',
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        effect: sEffect,
        speed: 1000,
        autoplay: {
          delay: 5000,
          // disableOnInteraction: false,
        },
        // Navigation dot
        pagination: {
          el: sPag,
          type: 'progressbar',
        },
        // Navigation arrows
        navigation: {
          nextEl: sNext,
          prevEl: sPrev,
        },
      });
      // move slide to center
      if (cter) {
        swiper.slideTo(1);
      }
      if (direction) {
        swiper.allowTouchMove = false;
      }
    } else if (sItem.length >= 1) {
      sItem[0].classList.add('swiper-slide-active');
    }
  });

  let Slide2 = document.querySelectorAll('.swiper-chung2');
  Slide2.forEach((s, i, a) => {
    let sCon = s.querySelector('.swiper-container');
    let sPag = s.querySelector('.swiper-pagination');
    let sNext = s.querySelector('.swiper-button-next');
    let sPrev = s.querySelector('.swiper-button-prev');
    let cter = s.querySelector('.autocenter');
    // fade
    let fade = s.querySelector('.sFade');
    let sEffect = 'slide';
    if (fade) {
      sEffect = 'fade';
    }
    // direction
    let direction = s.querySelector('.sVer');
    let sDir = 'horizontal';
    if (direction) {
      sDir = 'vertical';
    }

    // loop
    let sCheckLoop = s.querySelector('.noloop');
    let sLoop = true;
    if (sCheckLoop) {
      sLoop = false;
    }
    // check Item to enable slide
    let sItem = s.querySelectorAll('.swiper-slide');
    let checkItem = 0;
    sItem.forEach((i) => {
      checkItem += i.offsetWidth;
    });

    if (checkItem > sCon.offsetWidth) {
      //enable swiper
      sNext.style.display = 'block';
      sPrev.style.display = 'block';

      let swiper = new Swiper(sCon, {
        direction: sDir,
        loop: sLoop,
        slidesPerView: 'auto',
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        effect: sEffect,
        speed: 1200,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        // Navigation dot
        pagination: {
          el: sPag,
          clickable: true,
        },
        // Navigation arrows
        navigation: {
          nextEl: sNext,
          prevEl: sPrev,
        },
      });
      // move slide to center
      if (cter) {
        swiper.slideTo(1);
      }
      if (direction) {
        swiper.allowTouchMove = false;
      }
    } else if (sItem.length >= 1) {
      sItem[0].classList.add('swiper-slide-active');
    }
  });

  let mulSlide = document.querySelectorAll('.swiper-row');
  mulSlide.forEach((s, i, a) => {
    let sCon = s.querySelector('.swiper-container');
    let sPag = s.querySelector('.swiper-pagination');
    let sNext = s.querySelector('.swiper-button-next');
    let sPrev = s.querySelector('.swiper-button-prev');
    let cter = s.querySelector('.autocenter');

    // check Item to enable slide
    let sItem = s.querySelectorAll('.swiper-slide');
    let checkItem = 0;
    sItem.forEach((i) => {
      checkItem += i.offsetWidth;
    });
    checkItem = checkItem / 2;
    if (checkItem > sCon.offsetWidth) {
      // enable swiper
      sNext.style.display = 'block';
      sPrev.style.display = 'block';
      let swiper = new Swiper(sCon, {
        slidesPerGroup: 2,
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',

        observer: true,
        observeParents: true,
        observeSlideChildren: true,

        speed: 1200,

        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        // Navigation dot
        pagination: {
          el: sPag,
          type: 'progressbar',
        },

        // Navigation arrows
        navigation: {
          nextEl: sNext,
          prevEl: sPrev,
        },
        breakpoints: {
          600: {
            slidesPerGroup: 3,
            slidesPerView: 3,
          },
          768: {
            slidesPerGroup: 4,
            slidesPerView: 4,
          },
          1024: {
            slidesPerGroup: 5,
            slidesPerView: 5,
          },
        },
      });
    } else if (sItem.length >= 1) {
      sItem[0].classList.add('swiper-slide-active');
    }
  });

  let lead = document.querySelectorAll('.swiper-lead');
  lead.forEach((s, i, a) => {
    let sCon = s.querySelector('.swiper-container');
    let sPag = s.querySelector('.swiper-pagination');
    let sNext = s.querySelector('.swiper-button-next');
    let sPrev = s.querySelector('.swiper-button-prev');

    // check Item to enable slide
    let sItem = s.querySelectorAll('.swiper-slide');
    let checkItem = 0;
    sItem.forEach((i) => {
      checkItem += i.offsetWidth;
    });
    checkItem = checkItem / 2;
    if (checkItem > sCon.offsetWidth) {
      // enable swiper
      sNext.style.display = 'block';
      sPrev.style.display = 'block';
      let swiper = new Swiper(sCon, {
        slidesPerGroup: 1,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'collumn',
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        spaceBetween: 15,
        speed: 1200,

        // Navigation dot
        pagination: {
          el: sPag,
          type: 'progressbar',
        },

        // Navigation arrows
        navigation: {
          nextEl: sNext,
          prevEl: sPrev,
        },
        breakpoints: {
          400: {
            slidesPerGroup: 1,
            slidesPerView: 2,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
          },
          768: {
            slidesPerGroup: 3,
            slidesPerView: 3,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
            spaceBetween: 30,
          },
        },
      });
    } else if (sItem.length >= 1) {
      s.classList.add('no-slide');
      sItem[0].classList.add('swiper-slide-active');
    }
  });

  let member = document.querySelectorAll('.swiper-member');
  member.forEach((s, i, a) => {
    let sCon = s.querySelector('.swiper-container');
    let sPag = s.querySelector('.swiper-pagination');
    let sNext = s.querySelector('.swiper-button-next');
    let sPrev = s.querySelector('.swiper-button-prev');

    // check Item to enable slide
    let sItem = s.querySelectorAll('.swiper-slide');
    let checkItem = 0;
    sItem.forEach((i) => {
      checkItem += i.offsetWidth;
    });
    checkItem = checkItem / 2;
    if (checkItem > sCon.offsetWidth) {
      // enable swiper
      sNext.style.display = 'block';
      sPrev.style.display = 'block';
      let swiper = new Swiper(sCon, {
        slidesPerView: 2,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        spaceBetween: 15,
        speed: 1200,
        loop: true,

        // Navigation dot
        pagination: {
          el: sPag,
          type: 'progressbar',
        },

        // Navigation arrows
        navigation: {
          nextEl: sNext,
          prevEl: sPrev,
        },
        breakpoints: {
          600: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      });
      if (window.innerWidth > 1200) {
        swiper.slideTo(2);
      }
      swiper.on('slideChangeTransitionEnd', function () {
        swiper.update();
        console.log(swiper);
      });
    } else if (sItem.length >= 1) {
      sItem[0].classList.add('swiper-slide-active');
    }
  });

  let project = document.querySelectorAll('.swiper-project');
  project.forEach((s, i, a) => {
    let sCon = s.querySelector('.swiper-container');
    let sPag = s.querySelector('.swiper-pagination');
    let sNext = s.querySelector('.swiper-button-next');
    let sPrev = s.querySelector('.swiper-button-prev');

    // check Item to enable slide
    let sItem = s.querySelectorAll('.swiper-slide');
    let checkItem = 0;
    sItem.forEach((i) => {
      checkItem += i.offsetWidth;
    });
    let sLoop = false;
    let sEffect = 'fade';
    if (window.innerWidth <= 768) {
      sLoop = !sLoop;
      sEffect = 'slide';
    }
    if (checkItem > sCon.offsetWidth) {
      //enable swiper
      sNext.style.display = 'block';
      sPrev.style.display = 'block';

      let swiper = new Swiper(sCon, {
        slidesPerView: 'auto',
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        effect: sEffect,
        loop: sLoop,
        speed: 1200,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        // Navigation dot
        pagination: {
          el: sPag,
          type: 'progressbar',
        },
        // Navigation arrows
        navigation: {
          nextEl: sNext,
          prevEl: sPrev,
        },
      });
    } else if (sItem.length >= 1) {
      sItem[0].classList.add('swiper-slide-active');
    }
  });

  let bubble = document.querySelector('.swiper-bubble');
  if (bubble) {
    let con = bubble.querySelector('.swiper-container');
    let dot = bubble.querySelector('.swiper-pagination');
    let swiper = new Swiper(con, {
      slidesPerView: 1,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      spaceBetween: 55,
      centeredSlides: true,
      speed: 1200,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
      },
      // Navigation dot
      pagination: {
        el: dot,
        clickable: true,
      },
    });
  }

  let banner = document.querySelector('.swiper-ban');
  if (banner) {
    let con = banner.querySelector('.swiper-container');
    let swiper = new Swiper(con, {
      slidesPerView: 1,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      centeredSlides: true,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      speed: 1200,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    });

    let slideCtrl = document.querySelector('.ban-slider-nav');
    let slideBtn = slideCtrl.querySelectorAll('.ban-slider-item');
    slideBtn[swiper.realIndex].classList.add('active');

    slideBtn.forEach((el, i) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        swiper.slideTo(i + 1);
      });
    });
    swiper.on('slideChange', function () {
      slideBtn.forEach((el, i) => {
        if (i === swiper.realIndex) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    });
  }

  let feedback = document.querySelector('.swiper-feedback');
  if (feedback) {
    let images = feedback.querySelector('.swiper-feedback-img');
    let iCon = images.querySelector('.swiper-container');

    // Enable images slider
    var swiperImg = new Swiper(iCon, {
      slidesPerView: 1,
      effect: 'fade',
      freeMode: true,
      watchSlidesProgress: true,
      speed: 1200,
    });

    let client = feedback.querySelector('.swiper-feedback-client');
    let cCon = client.querySelector('.swiper-container');
    let cPrev = client.querySelector('.swiper-button-prev');
    let cNext = client.querySelector('.swiper-button-next');
    let cPag = client.querySelector('.swiper-pagination');

    // Enable client slider
    var swiperClient = new Swiper(cCon, {
      loop: true,
      speed: 1200,
      centeredSlides: true,
      slidesPerView: 1,
      watchSlidesProgress: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: cNext,
        prevEl: cPrev,
      },
      // Navigation Progress
      pagination: {
        el: cPag,
        type: 'progressbar',
      },
      thumbs: {
        swiper: swiperImg,
      },
    });
  }

  let tag = document.querySelector('.swiper-tag');
  if (tag) {
    let tCon = tag.querySelector('.pro-tag-top .swiper-container');
    let bCon = tag.querySelector('.pro-tag-bottom .swiper-container');

    let next = tag.querySelector('.swiper-button-next');
    let prev = tag.querySelector('.swiper-button-prev');
    let pag = tag.querySelector('.swiper-pagination');

    next.style.display = 'block';
    prev.style.display = 'block';

    let swiper1 = new Swiper(tCon, {
      slidesPerView: 1,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      speed: 1200,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
      },
      // Navigation dot
      pagination: {
        el: pag,
        type: 'progressbar',
      },
      // Navigation arrows
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      breakpoints: {
        769: {
          slidesPerView: 2,
        },
      },
    });
    let swiper2 = new Swiper(bCon, {
      slidesPerView: 1,
      loop: true,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      speed: 1200,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
      },
      // Navigation dot
      pagination: {
        el: pag,
        type: 'progressbar',
      },
      // Navigation arrows
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      breakpoints: {
        769: {
          slidesPerView: 2,
        },
      },
    });
  }

  let proact = document.querySelector('.swiper-active');
  if (proact) {
    let con = proact.querySelector('.swiper-container');
    let next = proact.querySelector('.swiper-button-next');
    let prev = proact.querySelector('.swiper-button-prev');
    let pag = proact.querySelector('.swiper-pagination');

    next.style.display = 'block';
    prev.style.display = 'block';

    let swiper = new Swiper(con, {
      slidesPerView: 1.3,
      spaceBetween: 30,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      speed: 1000,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
      },
      // Navigation dot
      pagination: {
        el: pag,
        type: 'progressbar',
      },
      // Navigation arrows
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      breakpoints: {
        550: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
    swiper.on('slideChangeTransitionEnd', function () {
      swiper.update();
    });
  }

  if (document.querySelector('#slide-new--feed')) {
    const swiper = document.querySelector('#slide-new--feed');
    const sliderContainer = swiper.querySelector('.swiper-container');
    const SliderPagination = swiper.querySelector('.swiper-pagination');
    const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
    const sliderNextBtn = swiper.querySelector('.swiper-button-next');
    try {
      const swiper = new Swiper(sliderContainer, {
        speed: 1200,
        loop: true,
        slidesPerColumnFill: 'row',
        slidesPerView: 1,
        slidesPerColumn: 2,
        spaceBetween: 10,
        autoplay: {
          delay: 3000,
        },
        navigation: {
          nextEl: '.new-feed-bd .swiper-button-next',
          // prevEl: sliderPrevBtn,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  if (document.querySelector('#slide-blog-recom')) {
    const swiper = document.querySelector('#slide-blog-recom');
    const sliderContainer = swiper.querySelector('.swiper-container');
    const SliderPagination = swiper.querySelector('.swiper-pagination');
    const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
    const sliderNextBtn = swiper.querySelector('.swiper-button-next');
    try {
      const swiper = new Swiper('.slide-thumb-recom .swiper-container', {
        speed: 1200,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: '.slide-thumb-recom .swiper-button-next',
          prevEl: '.slide-thumb-recom .swiper-button-prev',
        },
        pagination: {
          el: '.slide-thumb-recom .swiper-pagination',
          type: 'progressbar',
        },
        breakpoints: {
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          670: {
            slidesPerView: 3,
          },
          450: {
            slidesPerView: 2,
          },
        },
        // autoplay: {
        //   delay: 3000,
        // },
      });
      const swiper1 = new Swiper('.slide-gallery-recom .swiper-container', {
        speed: 1200,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
          delay: 3000,
        },
        thumbs: {
          swiper: swiper,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  if (document.querySelector('#slide-category')) {
    const swiper = document.querySelector('#slide-category');
    const sliderContainer = swiper.querySelector('.swiper-container');
    const SliderPagination = swiper.querySelector('.swiper-pagination');
    const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
    const sliderNextBtn = swiper.querySelector('.swiper-button-next');
    try {
      const swiper = new Swiper('.slide-thumb-category .swiper-container', {
        speed: 1200,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: '.slide-thumb-category .swiper-button-next',
          prevEl: '.slide-thumb-category .swiper-button-prev',
        },
        pagination: {
          el: '.slide-thumb-category .swiper-pagination',
          type: 'progressbar',
        },
        breakpoints: {
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          670: {
            slidesPerView: 3,
          },
          450: {
            slidesPerView: 2,
          },
        },
        // autoplay: {
        //   delay: 3000,
        // },
      });
      const swiper1 = new Swiper('.slide-gallery-category .swiper-container', {
        speed: 1200,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
          delay: 3000,
        },
        thumbs: {
          swiper: swiper,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  const satisfied = new Swiper('.swiper-check .swiper-container', {
    speed: 1200,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.satisfied .swiper-pagination',
    },
  });

  // ADD SWIPER FOR PAGE WEBSITEDEMO-DETAIL
  const product_related = new Swiper('.card-list.swiper', {
    speed: 1200,
    loop: true,
    slidesPerView: 5,
    spaceBetween: 10,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
}
