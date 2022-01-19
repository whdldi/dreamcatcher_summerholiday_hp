$(document).ready(function(){
      /* 네비메뉴 호버시나오게 */
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
  //1. header가 가지고 있는 위치값 = 0 > offset().top 
  //2. 스크롤을 했을때 스크롤바의 수직값 = 0 > $(window).scrollTop() 
  //스크롤을 했을때 hedaer가 가지고 있는 값(0)보다 스크롤바의 수직값이 더 클때 스타일 적용
  /* 이하-헤더 탑 이라는 그릇에 헤더의 탑값을 오프셋으로 담아냄 */
  var headerTop = $('header').offset().top;
  $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        // console.log(headerTop);
        // console.log(scrollTop);
        if(headerTop < scrollTop){
            //헤더 탑 값보다 스크롤했을때 값이 더 클때(내리니까 값이 커질수밖에 없음) 스크립트 코드작성(클래스명 fixed가 붙음)
            $('header').addClass('fixed'); //헤더가 고정된다
        } else {
            $('header').removeClass('fixed'); //값이 크지않을때(=원래자리에 있을때는 fixed 클래스가 없어진다 즉 색이랑 효과가 원래대로 돌아온다)
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
        /* headertop이라는 그릇에 header오프셋탑값을넣음 */
        var headerTop = $('header').offset().top;
        $(window).scroll(function(){
             var scrollTop = $(window).scrollTop();
             //console.log(headerTop);
             //console.log(scrollTop);
             if(headerTop < scrollTop){
                  //헤더 탑 값보다 스크롤했을때 값이 더 클때(내리니까 값이 커질수밖에 없음) 스크립트 코드작성(클래스명 fixed가 붙음)
                  $('header').addClass('fixed').stop(); //헤더가 고정
             } else {
                  $('header').removeClass('fixed'); //값이 크지않을때(=원래자리에 있을때는 fixed 클래스가 없어진다 css에서 .fixed에 효과를 넣어뒀어서 클래스명이 사라지며 색이랑 효과도 원래대로 돌아옴)
             }
        });
      })
      


});