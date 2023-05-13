$(function(){
        /*--------------------------
	 Global Variable
	---------------------------- */
    var patsala = $(window);
    var page = $('html, body');

          /*--------------------------
    scroll to top active
    ---------------------------- */
    $(".scrolltop").on('click', function(){
        $("html,body").animate({
            scrollTop:0
        }, 1000)
    });

    /*--------------------------
     Menu Scroll Fix Function
    ---------------------------- */
    patsala.on('scroll',function(){
        if (patsala.scrollTop() > 700) {
             $('.menu_part').addClass('animated slideInDown fix')
          } else {
              $('.menu_part').removeClass('animated slideInDown fix ')
          }
    })
    
    patsala.on('scroll',function(){
        if (patsala.scrollTop() > 700) {
             $('.menu_part').addClass('none_menu')
          } else {
              $('.menu_part').removeClass('none_menu')
          }
    });
    
     $('.banner_slide').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText:['<i class="fa-solid  fa-long-arrow-left arrow_lft_bn"></i>','<i class="fa-solid fa-long-arrow-right arrow_rt_bn"></i>'],
        smartSpeed:1000,
        autoplay:true,
        mouseDrag:true,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    
    
    
    $('.product_slide').owlCarousel({
        loop:true,
        margin:30,
        navText:['<i class="fa-solid  fa-long-arrow-left arrow_lft_bn1"></i>','<i class="fa-solid fa-long-arrow-right arrow_rt_bn1"></i>'],
        nav:false,
        smartSpeed:1000,
        autoplay:true,
        mouseDrag:true,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            1000:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
    

     $('.venobox').venobox(); 
    
    /* zoom js paluging js */
    var urls = [
        'images/zoom_rice1.jpg',
        'images/rice_item2.jpg',
        'images/rice_item3.jpg',
        'images/rice_item4.jpg',
        'images/rice_item5.jpg',
    ];
    var options = {
        //thumbLeft:true,
        //thumbRight:true,
        //thumbHide:true,
        //width:300,
        //height:500,
    };
    $('#el').zoomy(urls,options);
    
    /*  this is for input group */
    $(".quantity_form_input input[type='number']").InputSpinner();
    
    
    $('.counter').counterUp({
        delay: 10,
        time: 8000,
    });
    
})