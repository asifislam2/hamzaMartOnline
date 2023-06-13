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
  