export default function popup() {
    $(function () {
      var popup = document.querySelectorAll('.popupBtn');
      if (popup.length != 0) {
        $('.popupBtn').magnificPopup({
          type: 'inline',
          preloader: false,
          focus: '#username',
          modal: true,
          fixedContentPos: true,
          removalDelay: 300,
          mainClass: 'mfp-fade',
          callbacks: {
            close: function () {
              $('video').each(function () {
                $(this).get(0).pause();
              });
            },
          },
        });
        $(document).on('click', '.closeBtn', function (e) {
          e.preventDefault();
          $.magnificPopup.close();
        });
      }
      var form = document.querySelectorAll('.popupForm');
      if (form.length != 0) {
        $('.popupForm').magnificPopup({
          type: 'inline',
          preloader: false,
          focus: '#username',
          modal: true,
          fixedContentPos: true,
          removalDelay: 300,
          closeOnBgClick: false,
          mainClass: 'mfp-fade popupWrap',
          callbacks: {
            close: function () {
              $('video').each(function () {
                $(this).get(0).pause();
              });
            },
          },
        });
        $(document).on('click', '.closeBtn', function (e) {
          e.preventDefault();
          $.magnificPopup.close();
        });
      }
      var video = document.querySelectorAll('.popupVideo');
      if (video.length != 0) {
        $('.popupVideo').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: true,
          removalDelay: 300,
          mainClass: 'mfp-fade',
        });
      }
      $(window).on('click', function (e) {
        if (
          $(e.target).closest('.popup').length === 0 &&
          $(e.target).closest('.popupWrap').length === 0 &&
          $(e.target).closest('.popupBtn').length === 0 &&
          $(e.target).closest('.popupForm').length === 0 &&
          $(e.target).closest('.popupVideo').length === 0
        ) {
          $.magnificPopup.close();
        }
      });
    });
  }
  