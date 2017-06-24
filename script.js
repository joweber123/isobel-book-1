$(window).ready(function(){
  slideIn();
  smoothScroll(500);
  modalcontent1();
  modalcontent2();


});


function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}



function slideIn(){
  $('.showcase-left').addClass('slideInLeft');
  $('.showcase-right').addClass('slideInRight');
}

$(window).scroll(function(){
  addAnimation();
  addAnimation2();
});

function addAnimation2(){
  var wH = $(window).height();
  var oS = $('.excerpt').offset().top;
  var wS = $(window).scrollTop();

if (oS-(wH*0.75)<wS){
   $('.excerpt-left').addClass('slideInLeft');
   $('.excerpt-right').addClass('slideInRight');
 }
}

function addAnimation(){
  var wH = $(window).height();
  var oS = $('.biography').offset().top;
  var wS = $(window).scrollTop();

if (oS-(wH*0.75)<wS){
   $('#biography').addClass('zoomIn');
 }
}

function modalcontent1(){
	$('#modalcta1').click(function(){
		$('#myModal1').addClass('block');
    $('body').addClass('overflow-hidden');
	});
  $('.close').click(function(){
		$('#myModal1').removeClass('block');
    $('body').removeClass('overflow-hidden');
	});
}

function modalcontent2(){
	$('#modalcta2').click(function(){
		$('#myModal2').addClass('block');
    $('body').addClass('overflow-hidden');
	});
  $('.close').click(function(){
		$('#myModal2').removeClass('block');
    $('body').removeClass('overflow-hidden');
	});
}

// When the user clicks anywhere outside of the modal, close it


/*$(function(){
	getValues();
});

function getValues(){
  var windowHeight = $(window).height();
  var offSetValue = $('.biography').offset().top;
  console.log(windowHeight);
  console.log(offSetValue);
}

$(window).scroll(function(){
  scrollWindow();
});

function scrollWindow (){
  var wScroll = $(window).scrollTop();

  console.log(wScroll);
}

*/
/*$(window).scroll(function() {
	startArticles();
});



function startArticles(){
	var wScroll = $(window).scrollTop();
  var biotop = $('.biography').offset().top;
  var windowHeight = $(window).height();

	if($('.biography').offset().top - $(window).height()< wScroll){
			setTimeout(function(){
			$('.biography').addClass('zoomIn');
		}, 200);

	}
  console.log(biotop);
  console.log(windowHeight);
}






/*$(function() {

  $(window).on('load resize scroll', function() {
    addClassToElementInViewport($('.zoomIN'), 'biography');
    //addClassToElementInViewport($('.another-thing'), 'animate-thing');
    // 👏 repeat as needed ...
  });

  function addClassToElementInViewport(element, newClass) {
    if (inViewport(element)) {
      element.addClass(newClass);
    }
  }

  function inViewport(element) {
    if (typeof jQuery === "function" && element instanceof jQuery) {
      element = element[0];
    }
    var elementBounds = element.getBoundingClientRect();
    return (
      elementBounds.top >= 0 &&
      elementBounds.left >= 0 &&
      elementBounds.bottom <= $(window).height() &&
      elementBounds.right <= $(window).width()
    );
  }

});


*/

/*
  var $window           = $(window),
      win_height_padded = $window.height() * 1.1;

  $window.on('scroll', revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 1.1;

    // Showed...
    $(".revealOnScroll:not(zoomIn)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('zoomIn ' + $this.data('animation'));
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('zoomIn ' + $this.data('animation'));
        }
      }
    });
    // Hidden...
   $(".revealOnScroll.zoomIn").each(function (index) {
      var $this     = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('zoomIn');
      }
    });
  }

  revealOnScroll();
});

*/
/*$(window).scroll(function() {
	startAnimation();
});

//this is just telling us if the user has started to scroll or not and if they have then do the function start animation
function startAnimation(){
	var wScroll = $(window).scrollTop();

  //we get the variable wScroll of how much they have scrolled from the top of the page

	if($('#biography').offset().top - $(window).height()/2 < wScroll){

			 $('#biography').show("scale", 1000);
		}
	}

//as soon as we pass that it will be more than 900 so a negative number
//biography is 1800px from the top of document -900px window is less than the 900 we have scrolled from the top
//how lets say the window is 1000px tall, so we get 500px so 900px -400 is less than 900
//lets say that biography is 900px from the top so when we scroll 900 px down  then we run the function
//if the number of pixels that the top of biography is from the top of the page - half the window height
//is less than the number of pixels that you have scrolled


*/
