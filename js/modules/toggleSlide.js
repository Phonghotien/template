export default function toggleSlide() {
    $(document).ready(function () {
        $('.toggleHide').hide();
        $('.toggleHide').first().show();
        $('.toggleBtn').first().addClass('active')
        $(".toggleBtn").click(function (e) {
            e.preventDefault();
            $(this).toggleClass("active");
            $(this).next().stop().slideToggle();
        })
    })
}