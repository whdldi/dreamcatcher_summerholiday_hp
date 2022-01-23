$(document).ready(function(){
  $(function(){
      $('header nav ul.gnb .lymenu_sub1').hover(function(){
            $('header nav ul.sub1').stop().slideToggle();
      });
      
  });
  $(function(){
    $('header nav ul.gnb .memmenu_sub2').hover(function(){
          $('header nav ul.sub2').stop().slideToggle();
    });
    
});
     


  $(function(){
  var headerTop = $('header').offset().top;
  $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(headerTop < scrollTop){
            $('header').addClass('fixed'); 
        } else {
            $('header').removeClass('fixed');
        }
  });
  });

     
     /* 메인이미지 슬라이드 */
     $(function(){
          $('.ly_wrap').slick({
               dots: true,
               infinite: true,
               speed: 1000,
               slidesToShow: 1,
               slidesToScroll: 1,
               autoplay:true,
               responsive: [
                 {
                   breakpoint: 1024,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                     infinite: true,
                     dots: true
                   }
                 },
                 {
                   breakpoint: 600,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                   }
                 },
                 {
                   breakpoint: 360,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                   }
                 }
               ]
             });
     });


      /* 헤더고정 스크롤 했을때 */
      $(function(){
        var headerTop = $('header').offset().top;
        $(window).scroll(function(){
             var scrollTop = $(window).scrollTop();
             if(headerTop < scrollTop){
                  $('header').addClass('fixed').stop(); 
             } else {
                  $('header').removeClass('fixed'); 
             }
        });
      })
      

/* 이하 카드 모달 */
    $(function(){
      // 	이미지 클릭시 해당 이미지 모달
        $(".jiu").click(function(){
          $(".modal").fadeIn();
        });
        
        //.modal안에 button을 클릭하면 .modal닫기
        $(".modal button").click(function(){
          $(".modal").fadeOut();
        });
        
        //.modal밖에 클릭시 닫힘
        $(".modal").click(function (e) {
          if (e.target.className != "modal") {
            return false;
          } else {
            $(".modal").fadeOut();
          }
        });
      });



});