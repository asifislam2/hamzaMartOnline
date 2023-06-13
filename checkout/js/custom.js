

  // backtop button
$(".backtop").click(function(){
  $("html,body").animate({
    scrollTop:0,
  },
  )
},)

$(window).scroll(function(){
  var scrolling = $(this).scrollTop()
  
  if(scrolling > 10){
    $(".backtop").fadeIn(1000)
  }else{
     $(".backtop").fadeOut(1000)
  }
 
})
// navv scroll

$(window).scroll(function(){
  var scrolling = $(this).scrollTop()
  if(scrolling > 10){
    $("nav").addClass("navdown")
  }else{
     $("nav").removeClass("navdown")
  }
  
  
})


// ==================== checkout ==============
  
  // partner slider 
  
$('.partner_slider').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 5,
  prevArrow: '.partner_prev_1',
  nextArrow: '.partner_next_1',
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 5
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
			