
  
 $(document).ready(function(){
 
	 
    // Responsywny footer znajdujący się zawsze na dole okna 
     var currentHeight= $(document).height();
     /*alert(currentHeight);*/
     var currentFooter=currentHeight;
     $('footer').css("top",currentFooter);
     
     
     //Sticky navbar 
	   $(window).on('scroll', function() {
	   /*var navHeight = $(window ).height() - 67;*/
       var heHeight=$('.header').height();
       
			 if ($(window).scrollTop() > heHeight) {
				 $('nav').addClass('sticky');
			 }
			 else {
				 $('nav').removeClass('sticky');
			 }
		});
     
 

  //Lazyload images 
  $("img.lazyload").lazyload();
	
     
     
	});

