/*
	Cosmix by TEMPLATE STOCK
	templatestock.co @templatestock
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/


 /* ==============================================
  	 Main-Slider
  	=============================================== */ 

            function google(stateWrapper, ready) {
            window.open("https://google.com");
            ready();
        }
        function bing(stateWrapper, ready) {
            window.open("https://bing.com");
            ready();
        }
        var rollbackTo = false;
        var originalState = false;
        function storeState(stateWrapper, ready) {
            rollbackTo = stateWrapper.current;
            console.log("storeState called: ",rollbackTo);
            ready();
        }
        function rollback(stateWrapper, ready) {
            console.log("rollback called: ", rollbackTo, originalState);
            console.log("answers at the time of user input: ", stateWrapper.answers);
            if(rollbackTo!=false) {
                if(originalState==false) {
                    originalState = stateWrapper.current.next;
                        console.log('stored original state');
                }
                stateWrapper.current.next = rollbackTo;
                console.log('changed current.next to rollbackTo');
            }
            ready();
        }
        function restore(stateWrapper, ready) {
            if(originalState != false) {
                stateWrapper.current.next = originalState;
                console.log('changed current.next to originalState');
            }
            ready();
        }

$(document).ready(function() {
$.validator.setDefaults({
		submitHandler: function() {
			// alert("submitted!");
		}
	});
 $(".select2_el").select2({
            });
        //Toggle fullscreen
        $(".chat-bot-icon").click(function () {
            $(this).children('img').toggleClass('hide');
            $(this).children('svg').toggleClass('animate');
            $('.chat-screen').toggleClass('show-chat');
            $('.chat-bodyf').toggleClass('hide');
             $('.chat-header-option').toggleClass('hide');
        });
        $('.chat-mail button').click(function () {
            $('.chat-mail').addClass('hide');
            $('.chat-body').removeClass('hide');
            $('.chat-bodyf').removeClass('hide');
            $('.chat-input').removeClass('hide');
            $('.chat-header-option').removeClass('hide');
        });
        $('.end-chat').click(function () {
            $('.chat-body').addClass('hide');
            $('.chat-bodyf').addClass('hide');
            $('.chat-input').addClass('hide');
            $('.chat-session-end').removeClass('hide');
            $('.chat-header-option').addClass('hide');
            $('.chat-screen').toggleClass('show-chat');
        });
 

           convForm = $('#chat').convform({selectInputStyle: 'disable'});
            



$("#main-contact-form").validate({
    rules: {
      
      name: 
      {
      required: true
      },      
      subject: 
      {
      required: true
      },
      
      email: 
      {
      required: true,
      email:true
      },
      
      message:
      {
      required: true
      }
      }
      
  });

 $('#main-contact-form').on('submit', function (e) {

          e.preventDefault();
           var $form = $(this);

                // check if the input is valid
                if(! $form.valid()) return false;
          // $.ajax({
          //   type: 'post',
          //   url: 'sendEmail.php',
          //   data: $('#main-contact-form').serialize(),
          //   success: function () {
          //     alert('Email successfully sent');
          //   }
          // });
               var subject= $("#subject").val();
                var body = $("#message").val() + "\r\n\r\n";
                body +=  "SENDER NAME: " + $("#name").val()+ "\r\n\r\n";
                body +=  "SENDER EMAIL: " + $("#email").val()+ "\r\n\r\n";
                var uri = "mailto:info@modestotechs.com?subject=";
                uri += encodeURIComponent(subject);
                uri += "&body=";
                uri += encodeURIComponent(body);
                window.open(uri);

        });

	$(".more").click(function(){
	$(this).closest( "p" ).find('.more').hide();
	$(this).closest("div.media-body").find('p.p_more').show("slide", { direction: "down" });
    $(this).closest("div.tab").find('p.p_more').show()
	

	});
 
  var owl = $("#owl-slider");
 
  owl.owlCarousel({
 autoPlay: 3000, //Set AutoPlay to 3 seconds
    singleItem : true,
    transitionStyle : "fade"
  });
 
});


 /* ==============================================
  	  Progress Bar
  	=============================================== */ 
		$('.experience').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$.each($('div.progress-bar'),function(){
				$(this).css('width', $(this).attr('aria-valuemax')+'%');
			});
			$(this).unbind('inview');
		}
	});

	
 /* ==============================================
  	 Preloader
  	=============================================== */ 

	(function () {
	    $(window).load(function() {
	        $('#pre-status').fadeOut();
	        $('#preloader').delay(350).fadeOut('slow');
	    });
	}());

/* ==============================================
  	 Pretty Photo
  	=============================================== */

     $("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});
 
 /* ==============================================
  	  WOW Javascripts 
  	=============================================== */ 

 new WOW().init();

 /* ==============================================
  	  Testimonials
  	=============================================== */ 


$(document).ready(function() {
 
  var owl = $("#owl-testi");
 
  owl.owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    singleItem : true,
    transitionStyle : "fade"
  });
 
});
 
 
 /* ==============================================
  	  Smooth Scroll
  	=============================================== */ 
	
	
    $(function() {
      $('a.scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top -50
            }, 1000);
            return false;
          }
        }
      });
    });
	


 /* ==============================================
  	  Navbar-Fixed-Top
  	=============================================== */ 
	
	
 $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar').addClass('on');
        } else {
            $('.navbar').removeClass('on');
        }
    });


 /* ==============================================
  	 ToolTip
  	=============================================== */ 
	
	$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
	

 /* ==============================================
  	  Nice Scroll 
  	=============================================== */ 
	
	$("html").niceScroll({
		scrollspeed: 100,
		mousescrollstep: 38,
		cursorwidth: 5,
		cursorborder: 0,
		cursorcolor: '#333',
		autohidemode: true,
		zindex: 999999999,
		horizrailenabled: false,
		cursorborderradius: 0,
	});
	

/* ==============================================
  	  Count
  	=============================================== */ 

    $('#fun-facts').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$(this).find('.timer').each(function () {
				var $this = $(this);
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
			$(this).unbind('inview');
		}
	});
	
	
	/* ==============================================
  	  Clients
  	=============================================== */
	
	
    var owl = $("#client-slider");

    owl.owlCarousel({

        itemsCustom: [
            [0, 2],
            [450, 3],
            [600, 3],
            [700, 4],
            [1000, 5],
            [1200, 5],
            [1400, 5],
            [1600, 5]
        ],
        pagination: false,
       autoPlay: 3000, //Set AutoPlay to 3 seconds

    });
	

	/*====================================
    Portfolio Isotope Filter
    ======================================*/
	
	$(window).load(function(){'use strict';
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});
		
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});
	
	
/*====================================
    Fullscreen burger menu
 ======================================*/
	  $(".menu-trigger, .mobilenav").click(function () {
    $(".mobilenav").fadeToggle(500);
  });
  $(".menu-trigger, .mobilenav").click(function () {
    $(".top-menu").toggleClass("top-animate");
    $(".mid-menu").toggleClass("mid-animate");
    $(".bottom-menu").toggleClass("bottom-animate");
  });


  /* ========================================================================
     On click menu item animate to the section
   ========================================================================== */
  $(".mobilenav li, .back-to-top").on('click', function() {
    var target = $(this).data('rel');
    var $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing');
  });


	/*====================================
       Index-03-Main-Slider
    ======================================*/
	
$(document).ready(function() {
 
  $("#owl-main-slider").owlCarousel({
 
       autoPlay: 3000, //Set AutoPlay to 3 seconds
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});
	
	
	
	 /* ==============================================
  	     Parallex-javascript
  	=============================================== */
	
	$('#testimonials').stellar();
$('#slider-parallax').stellar();


    $(function(){

      $.stellar({

        horizontalScrolling: false,

        verticalOffset: 40

      });

    });


	 /* ==============================================
  	      Index-05-text-Slider
  	=============================================== */
	$(document).ready(function() {
 
  $("#owl-text-slider").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });

 
 
});
	