$(function(){
 $(".offer-carousel").owlCarousel({
        nav: false,
        loop: true,
        startPosition: 1,
        dots: true,
        margin: 0,
        dotClass: 'owl-dot',
       responsive:{
            0:{
                items:1
            },
            1000:{
                items:1
            }
       }
    });

    $(".works-carousel").owlCarousel({
        nav: true,
        loop: true,
        startPosition: 1,
        dots: false,
        margin: 30,
        navText: ['<img src="i/left.svg">','<img src="i/right.svg">'],
       responsive:{
            0:{
                items:1
            },
            1000:{
                items:1.3
            }
       }
    });



    $('ul.work-tabs').on('click', 'li:not(.active)', function(e){
        e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active')
    .closest('section.tabs').find('div.tabs__content').removeClass('active')
    });

    $('.works-wrap').isotope({
        itemSelector: '.works-wrap__item',
        
      });

      $(document).on("click", ".work-tabs__item", e => {
        e.preventDefault();
        e.stopPropagation();
        const filter = "." + $(e.target).data("filter");
        $('.works-wrap').isotope({ filter });
    }); 



    $(".contributor-carousel").owlCarousel({
        nav: true,
        loop: true,
        dots: false,
        margin: 0,
        navText: ['<img src="i/left.svg">','<img src="i/right.svg">'],
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:1
            }
       }      
    });


});