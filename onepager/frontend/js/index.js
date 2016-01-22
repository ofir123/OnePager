/**
	1. Superslides slider.
	2. Fixed top menu bar.
	3. Featured slider.
	4. Skill circle.
	5. Wow animation.
	6. Project counter.
	7. Team slider.
	8. Testimonials slider.
	9. Clients slider.
	10. Scroll top button.
	11. Preloader.
	12. Menu scroll.
	13. Mobile menu close.
**/

jQuery(function($) {

	// 1. Superslides slider.
	jQuery("#slides").superslides({
      animation: "slide",
      play: "5000"
    });

	// 2. Fixed top menu bar.
	$(window).scroll(function() {
	    if($(window).scrollTop() >100){
		    $(".navbar-fixed-top").addClass("past-main");
	    }
        else {
            $(".navbar-fixed-top").removeClass("past-main");
        }
    });

	// 3. Featured slider.
    $(".featured-slider").slick({
        dots: true,
        infinite: true,
        speed: 800,
        arrows:false,
        slidesToShow: 1,
        slide: "div",
        autoplay: true,
        fade: true,
        autoplaySpeed: 5000,
        cssEase: "linear"
    });

	// 4. Skill circle.
	$("#myStat").circliful();
	$("#myStat2").circliful();
	$("#myStat3").circliful();
	$("#myStat4").circliful();

	// 5. Wow smooth animation.
	wow = new WOW(
      {
        animateClass: "animated",
        offset: 100
      }
    );
    wow.init();

	// 6. Project Counter.
	(function ($) {
		$.fn.countTo = function (options) {
			options = options || {};

			return $(this).each(function () {
				// Set options for current element.
				var settings = $.extend({}, $.fn.countTo.defaults, {
					from: $(this).data("from"),
					to: $(this).data("to"),
					speed: $(this).data("speed"),
					refreshInterval: $(this).data("refresh-interval"),
					decimals: $(this).data("decimals")
				}, options);

				// How many times to update the value, and how much to increment the value on each update.
				var loops = Math.ceil(settings.speed / settings.refreshInterval),
					increment = (settings.to - settings.from) / loops;

				// References & variables that will change with each update.
				var self = this,
					$self = $(this),
					loopCount = 0,
					value = settings.from,
					data = $self.data("countTo") || {};

				$self.data("countTo", data);

				// If an existing interval can be found, clear it first.
				if (data.interval) {
					clearInterval(data.interval);
				}
				data.interval = setInterval(updateTimer, settings.refreshInterval);

				// Initialize the element with the starting value.
				render(value);

				function updateTimer() {
					value += increment;
					loopCount++;

					render(value);

					if (typeof(settings.onUpdate) == "function") {
						settings.onUpdate.call(self, value);
					}

					if (loopCount >= loops) {
						// Remove the interval.
						$self.removeData("countTo");
						clearInterval(data.interval);
						value = settings.to;

						if (typeof(settings.onComplete) == "function") {
							settings.onComplete.call(self, value);
						}
					}
				}

				function render(value) {
					var formattedValue = settings.formatter.call(self, value, settings);
					$self.html(formattedValue);
				}
			});
		};

		$.fn.countTo.defaults = {
			from: 0,               // The number the element should start at.
			to: 0,                 // The number the element should end at.
			speed: 1000,           // How long it should take to count between the target numbers.
			refreshInterval: 100,  // How often the element should be updated.
			decimals: 0,           // The number of decimal places to show.
			formatter: formatter,  // Handler for formatting the value before rendering.
			onUpdate: null,        // Callback method for every time the element is updated.
			onComplete: null       // Callback method for when the element finishes updating.
		};

		function formatter(value, settings) {
			return value.toFixed(settings.decimals);
		}
	}(jQuery));

	// Custom formatting.
    jQuery(function ($) {
        $("#count-number").data("countToOptions", {
            formatter: function (value, options) {
                return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
            }
        });

	    $("#count-number2").data("countToOptions", {
		    formatter: function (value, options) {
		        return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
		    }
	    });

	    $("#count-number3").data("countToOptions", {
		    formatter: function (value, options) {
		        return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
		    }
	    });

	    $("#count-number4").data("countToOptions", {
		    formatter: function (value, options) {
		        return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
		    }
	    });

	    // Start all the timers.
	    $(".timer").each(count);

	    function count(options) {
		    var $this = $(this);
		    options = $.extend({}, options || {}, $this.data("countToOptions") || {});
		    $this.countTo(options);
	    }
	});

	// 7. Team slider.
    $(".team-slider").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

	//  8. Testimonials slider.
	$(".testimonial-slider").slick({
        dots: true,
        infinite: true,
        speed: 800,
        arrows:false,
        slidesToShow: 1,
        slide: "li",
        autoplay: true,
        fade: true,
        autoplaySpeed: 3000,
        cssEase: "linear"
    });

	// 9. Clients slider.
    $(".clients-slider").slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
		    {
		        breakpoint: 1199,
		        settings: {
		            slidesToShow: 3,
		            slidesToScroll: 3,
		            infinite: true,
		            dots: true
		        }
		    },
		    {
		        breakpoint: 600,
		        settings: {
		            slidesToShow: 2,
		            slidesToScroll: 2
		        }
		    },
		    {
		        breakpoint: 480,
		        settings: {
		            slidesToShow: 1,
		            slidesToScroll: 1
		        }
		    }
		]
	});

	// 10. Scroll top button.
    $(window).scroll(function(){
        //Check to see if the window is top if not then display button.
        if ($(this).scrollTop() > 300) {
            $(".scroll-to-top").fadeIn();
        } else {
            $(".scroll-to-top").fadeOut();
        }
    });

	// Click event to scroll to top.
	$(".scroll-to-top").click(function(){
	    $("html, body").animate({ scrollTop: 0 }, 800);
	    return false;
    });

	// 11. Preloader.
	// Makes sure the whole site is loaded.
    jQuery(window).load(function() {
        // Will first fade out the loading animation.
        $("#status").fadeOut();
        // Will fade out the white div that covers the website.
        $("#preloader").delay(100).fadeOut("slow");
        $("body").delay(100).css({ "overflow": "visible" });
    });

	// 12. Menu scroll.
	// Cache selectors.
	var lastId,
	topMenu = $("#top-menu"),
	topMenuHeight = topMenu.outerHeight() + 13,
    // All list items.
	menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items.
	scrollItems = menuItems.map(function() {
	    var item = $($(this).attr("href"));
        if (item.length) { return item; }
	});

	// Bind click handler to menu items so we can get a fancy scroll animation.
	menuItems.click(function(e) {
	    var href = $(this).attr("href"),
	    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
	    $("html, body").stop().animate({
	        scrollTop: offsetTop
	    }, 900);
	    e.preventDefault();
	});

	// Bind to scroll.
	$(window).scroll(function() {
	    // Get container scroll position.
	    var fromTop = $(this).scrollTop() + topMenuHeight;
	   // Get ID of current scroll item.
	    var cur = scrollItems.map(function() {
	        if ($(this).offset().top < fromTop)
	            return this;
	    });
	    // Get ID of the current element.
	    cur = cur[cur.length - 1];
	    var id = cur && cur.length ? cur[0].id : "";
	    if (lastId !== id) {
	        lastId = id;
	        // Set/remove active class.
	        menuItems
	            .parent().removeClass("active")
	            .end().filter("[href=#" + id + "]").parent().addClass("active");
	    }
	});

	//  13. Mobile menu active close.
	$(".navbar-nav").on("click", "li a", function() {
	    $(".navbar-collapse").collapse("hide");
	});

});
