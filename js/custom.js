// home banner slider
$('.bannerslider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'.prevvv',
    nextArrow:'.nextvv',
   
    centerMode:true,
    centerPadding:"0"
  });

  // homeposter slider

  $('.posterslidr').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:'.prevvv',
    nextArrow:'.nextvv',
   
    
  });

  // home mixitup
  var mixer = mixitup('.mixup');

  // mix slider

  $('.mixitslider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:'.prevvv',
    nextArrow:'.nextvv',
   
    
  });

  // latest product slider

  $('.latestslider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:'.prev',
    nextArrow:'.next',
   
    
  });

 

  // testimonial slider
  $('.testslider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow:'.previous',
    nextArrow:'.nexts',
   
    
  });

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


