$(document).ready(function(){


    $('.owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:4000,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            1200:{
                items:4,
            }
        }
    });

    $(window).scroll(function(){

     var height = $(window).scrollTop();

      if(height > 800){

        $('#float-navigation').css({
            visibility:'visible',
            opacity:1,
            height: '100px'
        });
          
      }else{

        $('#float-navigation').css({
            visibility:'hidden',
            opacity:0,
            height: 0
        }); 
      }



    });



  
});