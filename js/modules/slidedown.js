export default function createSlideDown(){
    if($('.new-feed-hd')){
        $('.new-feed-hd').click(function (e) { 
            e.preventDefault();
            $(this).next().slideToggle();
        });
    }
    if('.c-blog-custom'){
        $('.c-blog-custom .btn-show-content').click(function (e) { 
            e.preventDefault();
            $(this).parent().toggleClass('not--active');
            $(this).parent().next().slideToggle();;
        });
    }
}