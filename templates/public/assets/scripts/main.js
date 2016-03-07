(function() {
    var clickable = {
        elements: document.querySelectorAll('[data-href]'),

        redirect_to: function(href, target) {
            target = target || "";
            clickable.simulate_anchor(href, target);
        },

        simulate_anchor: function(href, target) {
            var anchor = document.createElement("a");
            anchor.setAttribute('href', href);
            anchor.setAttribute('target', target);
            anchor.click();
        },

        init: function() {
            for (var i = 0; i < this.elements.length; i++) {
                var element = this.elements[i];
                element.style.cursor = 'pointer';
                element.addEventListener('click', function() {
                    if ($(this).attr('data-target') == "_blank") {
                        var win = window.open($(this).attr('data-href'), '_blank');
                        win.focus();
                    } else {
                        window.location = $(this).attr('data-href');
                    }
                    // clickable.redirect_to(
                    //     this.getAttribute('data-href'),
                    //     this.getAttribute('data-target')
                    // );
                }, false);
            }
        }
    };

    clickable.init();
})();
/*
 *
 * Foundation
 * ----------------------- */
$(document).foundation();

/*
 *
 * Functions
 * ----------------------- */
var engineCarousel = function(){
	var heroCarouselImage = $('#hero .hero__carousel-image');
	var heroCarouselInfo = $('#hero .hero__carousel-info');
	var bookingCarousel = $('#booking .booking__carousel');

	heroCarouselImage.owlCarousel({
		items: 1,
		lazyLoad: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 7000,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		dotsClass: 'hero__carousel-dots',
		dotClass: 'hero__carousel-dot',
	}).on('changed.owl.carousel', function (e) {
      heroCarouselInfo.trigger('to.owl.carousel', [e.item.index, 100]);
  });

	heroCarouselInfo.owlCarousel({
		items: 1,
		loop: true,
		lazyLoad: true,
		autoplay: true,
		autoplayTimeout: 7000,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
	});

	bookingCarousel.owlCarousel({
		lazyLoad: true,
		autoplay: false,
		loop: true,
		pagination: false,
    stagePadding: 0,
    dots: true,
    margin: 5,
		dotsClass: 'booking__carousel-dots',
		dotClass: 'booking__carousel-dot',
		responsive:{
      0:{
          items:1
      },
      500:{
          items:2
      },
      800:{
          items:3
      }
    }
	});

	// $('.accessories__carousel').mouseenter(function() {
	// 	$('.accessories__carousel-control-previous').removeClass('fadeOutLeft');
	// 	$('.accessories__carousel-control-previous').addClass('fadeInLeft');
	// 	$('.accessories__carousel-control-next').removeClass('fadeOutRight');
	// 	$('.accessories__carousel-control-next').addClass('fadeInRight');
	// }).mouseleave(function(){
	// 	$('.accessories__carousel-control-previous').removeClass('fadeInLeft');
	// 	$('.accessories__carousel-control-previous').addClass('fadeOutLeft');
	// 	$('.accessories__carousel-control-next').removeClass('fadeInRight');
	// 	$('.accessories__carousel-control-next').addClass('fadeOutRight');
	// });
}

/*
 *
 * Document Ready
 * ----------------------- */
$(document).ready(function() {
	engineCarousel();

	$('.bottombar__anchor').hover(function(){
		$('.bottombar__anchor').toggleClass('not-hovered');
	});
});

$(document).on('click', '.accessories__carousel-control-previous', function(ev){
	ev.preventDefault();

	var owl;
	owl = $('.accessories__carousel .accessories__carousel-content').data('owlCarousel');
 	return owl.prev();
})

$(document).on('click', '.accessories__carousel-control-next', function(ev){
	ev.preventDefault();

	var owl;
	owl = $('.accessories__carousel .accessories__carousel-content').data('owlCarousel');
	return owl.next();
})

/*
 *
 * Window Resize
 * ----------------------- */
$(window).resize(function(){

});

maps = function() {
	var init, render;

	render = function() {
		var map, marker, myOptions, style;
		style = [
		{
			"stylers": [
			{
				"saturation": -100
			}, {
				"gamma": 0.8
			}, {
				"lightness": 4
			}, {
				"visibility": "on"
			}
			]
		}, {
			"featureType": "landscape.natural",
			"stylers": [
			{
				"visibility": "on"
			}, {
				"color": "#000"
			}, {
				"gamma": 4.97
			}, {
				"lightness": -5
			}, {
				"saturation": 100
			}
			]
		}
		];
		myOptions = {
			zoom: 14,
			center: new google.maps.LatLng(-5.868847,-35.224805),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: style,
			mapTypeControl: false,
			streetViewControl: false,
			scrollwheel: false,
			navigationControl: false,
			scaleControl: false,
			overviewMapControl: false,
			panControl: true,
			zoomControl: true,
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.LARGE
			}
		};
		if (document.getElementById('map')) {
			map = new google.maps.Map(document.getElementById('map'), myOptions);

			marker1 = new google.maps.Marker({
				position: new google.maps.LatLng(-5.853268,-35.201525),
				map: map,
				icon: 'http://dz3.com.br/aguiapiscinas/wp-content/themes/guia-piscinas-theme/assets/images/marker.png'
			});
			marker2 = new google.maps.Marker({
				position: new google.maps.LatLng(-5.880847,-35.214805),
				map: map,
				icon: 'http://dz3.com.br/aguiapiscinas/wp-content/themes/guia-piscinas-theme/assets/images/marker.png'
			});
			marker3 = new google.maps.Marker({
				position: new google.maps.LatLng(-5.888749,-35.268672),
				map: map,
				icon: 'http://dz3.com.br/aguiapiscinas/wp-content/themes/guia-piscinas-theme/assets/images/marker.png'
			});



			// var infowindow1 = new google.maps.InfoWindow({
			// 	content: '<div id="content" class="map__info">'+
			// 	'<h4 class="map__title">Cinema da Fundaj</h4>'+
			// 	'<div id="bodyContent">'+
			// 	'<p class="map__address"><b>Rua Henrique Dias, 609 - Derby - Recife/PE</b></p>' +
			// 	'</div>'+
			// 	'</div>'
			// });

			// google.maps.event.addListener(marker1, 'mouseover', function() {
			// 	infowindow1.open(map, marker1);
			// });
		}
	};
	init = function() {
		if (document.getElementById('map')) {
			return render();
		}
	};
	return {
		init: init
	};
};

$(document).ready(function(){
	var map = maps();
	map.init();
});

function scrollHandler() {
  var scrollTop = $(window).scrollTop();

  var topbar = $('#topbar');
  var topbarHeight = topbar.outerHeight();

	if (scrollTop > topbarHeight) {
		classie.add(topbar[0], 'fixed-topbar');
	} else {
		classie.remove(topbar[0], 'fixed-topbar');
	}
}

$(window).scroll(scrollHandler);

/*
 * Scroll To
 *
 * When a 'data-scroll-to' element is
 * activated (by click), scroll page to
 * his element.
 *
 * data-scroll-to="#<id>"
 * data-offset="<offset>"
 * data-time="<time>"
 *
 * ------------------------------ */

 $(document).ready(function(ev){
   $('[data-scroll-to]').css('cursor', 'pointer');
 });

 $(document).on('click', '[data-scroll-to]', function(ev) {
  ev.preventDefault();

  var $scope = $('html, body');
  var $target = $($(this).attr('data-scroll-to'));
  var diff = $(this).attr('data-scroll-diff');
  console.log(diff);

  if (!diff) {
  	diff = 0;
	}

  if ( $(this).closest('.fixed-navbar').length > 0 ) {
  	diff = 94;
  }
  $scope.animate({
    scrollTop: $target.offset().top - diff
  }, 500);
});
