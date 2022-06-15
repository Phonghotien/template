import cursor from './cursor.js';

export default function newfeedPage() {
    $(function () {

        ////////////////  handle list image
        $(".newfeedItem").map((index, element) => {
            var target_element = $(element);
            var imgCurent = $(target_element[0]).find(".newfeedShow");

            imgCurent.hide();
            imgCurent.slice(0, 5).show();

            var countImg = imgCurent.length;
            $(imgCurent[4]).find(".count").text(`+${countImg - 5}`);

            if (countImg <= 5) {
                $(imgCurent[4]).find(".bg").css("background", "none");
                $(imgCurent[4]).find(".count").text(``);
            }
        })

        /////////////// handle view more
        $(function () {
            $(".newfeed__list > .newfeedItem").hide();
            $(".newfeed__list > .newfeedItem").slice(0, 6).show();
            $(".newfeedBtn").on('click', function (e) {
                e.preventDefault();
                $(".newfeed__list > .newfeedItem:hidden").slice(0, 6).slideDown();
                if ($(".newfeed__list > .newfeedItem:hidden").length == 0) {
                    $("#load").fadeOut('slow');
                }
                $('html,body').animate({
                    scrollTop: $(this).offset().top
                }, 1500);

                cursor();
            });
        });
    });
}