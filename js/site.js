$(document).ready(function(){
    
    $(".container-fluid").css({"display":"block"})
    
    window_height = $(window).height();
    window_width = $(window).width();
    header_height = $("header").height();

    console.log(window_width);

    contents_item_width=$(".contents-item").width();
    // $(".contents-item-body").css({"height": contents_item_width/2+"px"})
    if(window_width>=768){
        $(".contents-item").css({"height": contents_item_width/2+"px"})
        $(".contents-item-image").css({"height": contents_item_width/2+"px", "background-size":contents_item_width*0.48+"px "+contents_item_width/2+"px"})
    }else{
        $(".contents-item-image").css({"height": contents_item_width+"px", "background-size":contents_item_width+"px "+contents_item_width+"px"})

    }

    
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    

});