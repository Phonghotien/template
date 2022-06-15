export default function newfeedFixed() {
    const nfhdBVtn = document.querySelector('.nfhd-btn');
    const nffixed = document.querySelector('.newfeed-fixed');

    const toggleClass = () => {
        pageYOffset >= 200 ? nffixed.classList.add('active') : nffixed.classList.remove('active');
    };
    
    if (nffixed) {
        document.addEventListener('DOMContentLoaded', toggleClass);
        window.addEventListener('scroll', toggleClass);
    }
    
    if (nfhdBVtn) {
        nfhdBVtn.onclick = () => {
            nffixed.classList.toggle('hide');
            const newfeedBody = document.querySelector('.newfeed__body');
            if(newfeedBody.style.display == 'none'){
                newfeedBody.style.display = 'block'
            } 
        }
    }

    ////////////// handle slidetoggle
    $(document).ready(function () {
        $(".slideToggleBtn").click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).toggleClass("active");
            $(this).parent().next(".slide-toggle-hidden").stop().slideToggle('500', 'linear');
        });
    });

    $(window).on("resize", function () {
        if ($(window).width() > 600) {
            $('.slide-toggle-hidden').css('display','block');
        }
    }).resize();

    if(window.innerWidth < 1201) {
        $('.newfeed-main-title').click(function (e) {
            e.stopPropagation();
            $(this).next('.newfeed__container').stop().slideToggle()
            $('body').removeClass('no-scroll-pop');
        })
    }
}