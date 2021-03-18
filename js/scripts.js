/*!
    * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    $('.carousel').carousel({
        interval: 3000
      })
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });
    $("#lan-change").click(function(){
        $(".yellow_toggle").toggleClass("yellow")
       if($("#n-top")[0].innerHTML=="Home"){
        $(".cn").show();
        $(".en").hide();

        
        $("#n-top")[0].innerHTML="主页";

        $("#n-port")[0].innerHTML="项目经历";
        $("#n-port").attr("href","#portfolio-1");

        $("#n-about")[0].innerHTML="关于";
        $("#n-about").attr("href","#aboutcn");

        $("#n-gallery")[0].innerHTML="画廊";
        $("#g-name")[0].innerHTML="画廊";
        $("#g-title")[0].innerHTML="我的绘画作品。";
        
       }
       else{
        $(".cn").hide();
        $(".en").show();
        $("#n-top")[0].innerHTML="Home";

        $("#n-port")[0].innerHTML="Projects";
        $("#n-port").attr("href","#portfolio");

        $("#n-about")[0].innerHTML="About";
        $("#n-about").attr("href","#about");

        $("#n-gallery")[0].innerHTML="Gallery";
        $("#g-name")[0].innerHTML="Gallery";
        $("#g-title")[0].innerHTML="A gallery of my paintings.";
       
       }


    });
    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
