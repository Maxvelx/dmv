(function ($) {
    "use strict";

    /* ----- MagnificPopup ----- */
    if (($(".popup-img").length > 0) || ($(".popup-iframe").length > 0) || ($(".popup-img-single").length > 0)) {
        $(".popup-img").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            }
        });
        $(".popup-img-single").magnificPopup({
            type: "image",
            gallery: {
                enabled: false,
            }
        });
        $('.popup-iframe').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            preloader: false,
            fixedContentPos: false
        });
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }

    $('#myTab a,#myTab2 a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
    })

    /* ----- Wow animation ----- */
    function wowAnimation() {
        const wow = new WOW({
            animateClass: 'animated',
            mobile: true, // trigger animations on mobile devices (default is true)
            offset: 0
        });
        wow.init();

        new WOW().init();
        $('#show_advbtn, #show_advbtn2').on('click', function () {
            new WOW().init();
        })
    }

    /* ----- Date & time Picker ----- */
    if ($('.datepicker').length) {
        $('.datepicker').datetimepicker();
    }


    // Custom Search Dropdown Script Start
    var showSuggestions = function () {
        $(".top-search form.form-search .box-search").each(function () {
            $("form.form-search .box-search input").on('focus', (function () {
                $(this).closest('.boxed').children('.overlay').css({
                    opacity: '1',
                    display: 'block'
                });
                $(this).parent('.box-search').children('.search-suggestions').css({
                    opacity: '1',
                    visibility: 'visible',
                    top: '77px'
                });
            }));
            $("form.form-search .box-search input").on('blur', (function () {
                $(this).closest('.boxed').children('.overlay').css({
                    opacity: '0',
                    display: 'none'
                });
                $(this).parent('.box-search').children('.search-suggestions').css({
                    opacity: '0',
                    visibility: 'hidden',
                    top: '100px'
                });
            }));
        });

        $(".top-search.style1 form.form-search .box-search").each(function () {
            $("form.form-search .box-search input").on('focus', (function () {
                $(this).closest('.boxed').children('.overlay').css({
                    opacity: '1',
                    display: 'block'
                });
                $(this).parent('.box-search').children('.search-suggestions').css({
                    opacity: '1',
                    visibility: 'visible',
                    top: '50px'
                });
            }));
        });
    }; // Toggle Location
    $(function () {
        showSuggestions();
    });

    // Custom Shop item add Option increase decrease home 3
    $(function () {
        (function quantityProducts() {
            const $quantityArrowMinus = $(".quantity-arrow-minus");
            const $quantityArrowPlus = $(".quantity-arrow-plus");
            const $quantityNum = $(".quantity-num");
            $quantityArrowMinus.click(quantityMinus);
            $quantityArrowPlus.click(quantityPlus);

            function quantityMinus() {
                if ($quantityNum.val() > 1) {
                    $quantityNum.val(+$quantityNum.val() - 1);
                }
            }

            function quantityPlus() {
                $quantityNum.val(+$quantityNum.val() + 1);
            }
        })();
    });
    /*  Popular-Listing-Slider  */
    if ($('.popular_listing_slider1').length) {
        $('.popular_listing_slider1').owlCarousel({
            loop: true,
            margin: 0,
            dots: true,
            nav: false,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="fa fa-arrow-left"></i>',
                '<i class="fa fa-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                767: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                },
                1280: {
                    items: 4
                }
            }
        })
    }

    /*  Popular-Listing-Slider  */
    if ($('.feature_product_slider').length) {
        $('.feature_product_slider').owlCarousel({
            loop: true,
            margin: 10,
            dots: true,
            nav: true,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                520: {
                    items: 1
                },
                767: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1280: {
                    items: 5
                }
            }
        })
    }

    /*  Team-Slider-Owl-carousel  */
    if ($('.instagram_slider').length) {
        $('.instagram_slider').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: false,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                320: {
                    items: 1,
                    center: false
                },
                375: {
                    items: 2,
                    center: false
                },
                520: {
                    items: 2,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1366: {
                    items: 5
                },
                1400: {
                    items: 5
                }
            }
        })
    }

    /*  Shop-Item-3-Grid-Slider-Owl-carousel  */
    if ($('.listing_item_car_grid_slider').length) {
        $('.listing_item_car_grid_slider').owlCarousel({
            loop: true,
            margin: 30,
            center: true,
            dots: true,
            nav: true,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: true,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: true
                },
                480: {
                    items: 1,
                    center: true
                },
                600: {
                    items: 1,
                    center: true
                },
                768: {
                    items: 2,
                    center: true
                },
                992: {
                    items: 2,
                    center: true
                },
                1200: {
                    items: 3,
                    center: true
                }
            }
        })
    }

    /*  Shop-Item-3-Grid-Slider-Owl-carousel  */
    if ($('.listing_item_1grid_slider').length) {
        $('.listing_item_1grid_slider').owlCarousel({
            // animateOut: "slideOutDown",
            // animateIn: "slideInDown",
            autoplay: false,
            autoplayHoverPause: false,
            center: false,
            dots: true,
            loop: true,
            margin: 0,
            nav: true,
            rtl: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }

    /*  Shop-Item-2-Grid-Slider-Owl-carousel  */
    if ($('.listing_item_2grid_slider').length) {
        $('.listing_item_2grid_slider').owlCarousel({
            loop: true,
            margin: 30,
            center: false,
            dots: true,
            nav: true,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        })
    }

    /*  Shop-Item-3-Grid-Slider-Owl-carousel  */
    if ($('.listing_item_3grid_slider').length) {
        $('.listing_item_3grid_slider').owlCarousel({
            loop: true,
            margin: 30,
            center: true,
            dots: true,
            nav: true,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        })
    }

    /*  Shop-Item-4-Grid-Slider-Owl-carousel  */
    if ($('.listing_item_4grid_slider').length) {
        $('.listing_item_4grid_slider').owlCarousel({
            loop: true,
            margin: 15,
            dots: true,
            nav: true,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: true
                },
                480: {
                    items: 1,
                    center: true
                },
                600: {
                    items: 1,
                    center: true
                },
                768: {
                    items: 2,
                    center: true
                },
                992: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        })
    }

    /*  Shop-Item-5-Grid-Slider-Owl-carousel  */
    if ($('.listing_item_5grid_slider').length) {
        $('.listing_item_5grid_slider').owlCarousel({
            loop: true,
            margin: 15,
            dots: true,
            nav: true,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                520: {
                    items: 1,
                    center: false
                },
                767: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                },
                1366: {
                    items: 4
                },
                1400: {
                    items: 5
                }
            }
        })
    }

    /*  Shop-Item-6-Grid-Slider-Owl-carousel  */
    if ($('.listing_item_6grid_slider').length) {
        $('.listing_item_6grid_slider').owlCarousel({
            loop: true,
            margin: 15,
            center: false,
            dots: true,
            nav: true,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                630: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1024: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            }
        })
    }

    /*  Shop-Item-7-Grid-Slider-Owl-carousel  */
    if ($('.listing_item_7grid_slider').length) {
        $('.listing_item_7grid_slider').owlCarousel({
            loop: true,
            margin: 15,
            center: false,
            dots: true,
            nav: true,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                520: {
                    items: 1,
                    center: false
                },
                767: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1024: {
                    items: 4
                },
                1200: {
                    items: 5
                },
                1400: {
                    items: 5
                },
                1500: {
                    items: 7
                }
            }
        })
    }

    /*  Shop-Item-7-Grid-Slider-Owl-carousel  */
    if ($('.listing_item_8grid_slider').length) {
        $('.listing_item_8grid_slider').owlCarousel({
            loop: true,
            margin: 30,
            center: false,
            dots: true,
            nav: true,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                520: {
                    items: 1,
                    center: false
                },
                767: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1024: {
                    items: 4
                },
                1200: {
                    items: 5
                },
                1400: {
                    items: 7
                },
                1500: {
                    items: 8
                }
            }
        })
    }

    /*  Recent-Property-slider-home1-Slider-Owl-carousel  */
    if ($('.recent_property_slider_home5').length) {
        $('.recent_property_slider_home5').owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            nav: true,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                520: {
                    items: 1,
                    center: false
                },
                767: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                },
                1366: {
                    items: 4
                }
            }
        })
    }

    /*  Recent-Property-slider-home1-Slider-Owl-carousel  */
    if ($('.shop_slider_col6').length) {
        $('.shop_slider_col6').owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            nav: false,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                520: {
                    items: 1,
                    center: false
                },
                767: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1280: {
                    items: 4
                },
                1366: {
                    items: 5
                },
                1440: {
                    items: 6
                }
            }
        })
    }

    /*  Single-Slider-Owl-carousel  */
    if ($('.single_product_slider').length) {
        $('.single_product_slider').owlCarousel({
            // animateIn: 'fadeIn',
            loop: true,
            margin: 30,
            dots: true,
            nav: true,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                520: {
                    items: 1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }

    /*  Sing-Slider-Owl-carousel  */
    if ($('.single_page6_single_slider').length) {
        $('.single_page6_single_slider').owlCarousel({
            center: true,
            loop: true,
            margin: 30,
            dots: true,
            nav: true,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: true,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                520: {
                    items: 1
                },
                768: {
                    items: 1,
                    center: true
                },
                992: {
                    items: 2,
                    center: true
                },
                1200: {
                    items: 2,
                    center: true
                }
            }
        })
    }

    /*  Sing-Slider-Owl-carousel  */
    if ($('.bestseller_sidebar_slider').length) {
        $('.bestseller_sidebar_slider').owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            nav: true,
            rtl: false,
            autoplayHoverPause: false,
            autoplay: false,
            singleItem: true,
            smartSpeed: 1200,
            navText: [
                '<i class="flaticon-left-arrow"></i>',
                '<i class="flaticon-right-arrow"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480: {
                    items: 1,
                    center: false
                },
                520: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }

    /*  Expert-Freelancer-Owl-carousel  */
    if ($('.banner-style-one').length) {
        $('.banner-style-one').owlCarousel({
            loop: true,
            items: 1,
            margin: 0,
            dots: true,
            nav: true,
            animateOut: 'slideOutDown',
            animateIn: 'fadeIn',
            active: true,
            smartSpeed: 1000,
            autoplay: false
        });
        $('.banner-carousel-btn .left-btn').on('click', function () {
            $('.banner-style-one').trigger('next.owl.carousel');
            return false;
        });
        $('.banner-carousel-btn .right-btn').on('click', function () {
            $('.banner-style-one').trigger('prev.owl.carousel');
            return false;
        });
    }

    /* ----- Scroll To top ----- */
    function scrollToTop() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 600) {
                $('.scrollToHome').fadeIn();
            } else {
                $('.scrollToHome').fadeOut();
            }
        });

        /* ----- Mega Dropdown Content ----- */
        $(document).on('ready', function () {
            $("#show_advbtn, #show_advbtn2").on('click', function () {
                $("body").addClass("mobile_ovyh");
            });
            $("#show_advbtn, #show_advbtn2").on('click', function () {
                $("body").removeClass("mobile_ovyh");
            });
            $("#prncgs").on('click', function () {
                $(".dd_content2").toggle();
            });
            $("#prncgs2, #prncgs3, #prncgs4").on('click', function () {
                $(".dd_content2").toggle();
            });
            $(".drop_btn").on('click', function () {
                $(".drop_content").toggle();
            });
            $(".drop_btn2").on('click', function () {
                $(".drop_content2").toggle();
            });
            $(".drop_btn3").on('click', function () {
                $(".drop_content3").toggle();
            });
            $(".drop_btn4").on('click', function () {
                $(".drop_content4").toggle();
            });
            $(".drop_btn5 ").on('click', function () {
                $(".drop_content5 ").toggle();
            });
            $(".drop_btn6").on('click', function () {
                $(".drop_content6").toggle();
            });

            $(".filter_open_btn").on('click', function () {
                $(".sidebar_content_details.style3").addClass("sidebar_ml0");
            });

            $(".filter_closed_btn").on('click', function () {
                $(".sidebar_content_details.style3").removeClass("sidebar_ml0");
            });

            $(".filter_open_btn").on('click', function () {
                $("body").addClass("body_overlay");
            });

            $(".filter_closed_btn").on('click', function () {
                $("body").removeClass("body_overlay");
            });

            $(".overlay_close").on('click', function () {
                $(".white_goverlay").toggle(500);
            });

            $(".mega_tags_dropdown").on('click', function () {
                $(".tag_dropdown_content").toggle(500);
            });

            $('.sticky-nav-tabs-container li').on('click', function () {
                $('.sticky-nav-tabs-container li').removeClass('active');
                $(this).addClass('active');
            });

        });

        $(document).on("ready", function () {
            // $('.sidebar_switch').on('click', function() {
            //     $('.siderbar_left_home').toggle("Pulse");
            // });
            $('.sidebar_switch').on('click', function () {
                $('.siderbar_left_home').addClass("active");
            });
            $('.sidebar_close_btn').on('click', function () {
                $('.siderbar_left_home').removeClass("active");
            });
            $(".sidebar_switch").on('click', function () {
                $(".wrapper").addClass("body_overlay2");
            });

            $(".sidebar_switch_close").on('click', function () {
                $(".wrapper").removeClass("body_overlay2");
            });
        });

        /* ======
           When document is ready, do
           ====== */
        $(document).on('ready', function () {
            // add your functions
            wowAnimation();


            // extending for text toggle
            $.fn.extend({
                toggleText: function (a, b) {
                    return this.text(this.text() === b ? a : b);
                }
            });
            if ($('.showFilter').length) {
                $('.showFilter').on('click', function () {
                    $(this).toggleText('Show Filter', 'Hide Filter');
                    $(this).toggleClass('flaticon-close flaticon-web-page sidebarOpended sidebarClosed');
                    $('.listing_toogle_sidebar.sidenav').toggleClass('opened');
                    $('.body_content').toggleClass('translated');
                });
            }

            $.fn.extend({
                toggleText2: function (a, b) {
                    return this.text(this.text() === b ? a : b);
                }
            });

            if ($('.showBtns').length) {
                $('.showBtns').on('click', function () {
                    $(this).toggleText2('Show Filter', 'Hide Filter');
                    $(this).toggleClass('flaticon-close flaticon-web-page sidebarOpended2 sidebarClosed2');
                    $('.sidebar_content_details').toggleClass('is-full-width');
                });
            }

        });

        // window on Scroll function
        $(window).on('scroll', function () {
            // add your functions
        });
    }
})(window.jQuery);