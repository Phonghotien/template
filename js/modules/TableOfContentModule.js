export default function TableOfContentModule() {
  // $('.tb-of-content .title').on('click', function () {
  // 	$(this).next('.content').stop().slideToggle();
  // 	$(this).toggleClass('active');
  // });
  $(".tb-of-content .title").click(function () {
    $(this).toggleClass('active')
	$(".content").slideToggle("fast","linear");
  });

  $(".tb-of-content .tb-of-content-dropdown > a").each((idx, i) => {
    const arrow = `<div class="icon"><i class="fas fa-chevron-down"></i></div>`;
    $(i).append(arrow);
  });
  $(".tb-of-content .tb-of-content-dropdown .icon").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    const $parent = $(this).closest(".tb-of-content-dropdown");
    $parent.toggleClass("active");
    $parent.find("> ul").stop().slideToggle("fast","linear");
  });

  // get position table of content mobile
  const $tbOfCnt = $(".tb-of-content");
  const $tbOfCntMobile = $(".tb-of-content-mobile");
  const $header = $(".header");
  if ($tbOfCnt.length) {
    let stoScroll;
    const tbOfCntOffsetTop = $tbOfCnt.offset().top;
    const tbOfCntHeight = $tbOfCnt.closest(".left").height() - 80;
    const headerHeight = $header.outerHeight();

    $tbOfCntMobile.addClass("over-area");

    $(document).on("scroll", function () {
      const scrollPos = window.scrollY + headerHeight;
      if (stoScroll) {
        clearTimeout(stoScroll);
      }
      if (scrollPos >= tbOfCntOffsetTop && scrollPos <= tbOfCntHeight) {
        $tbOfCntMobile.addClass("active");
        $tbOfCntMobile.removeClass("over-area");
      } else {
        $tbOfCntMobile.removeClass("active");
        $tbOfCntMobile.addClass("over-area");
      }
      stoScroll = setTimeout(() => {
        $tbOfCntMobile.removeClass("active");
      }, 2000);
    });
  }
}
