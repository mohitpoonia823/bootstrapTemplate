$(document).ready(function(){
    //click event
    $(".menus li a").click(function(e){
        let target = $(this).attr("href");
        console.log(target)
        $("html,body").animate({
            scrollTop:$(target).offset().top-30,
        },1000);
        e.preventDefault();
    });
});