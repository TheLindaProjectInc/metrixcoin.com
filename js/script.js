// JavaScript Document

  $(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
  });

  $('.hamburger').click(function(){

    $(this).toggleClass('is-active');

       $('header').toggleClass('mhn');
       $('body').toggleClass('oh');
    });

    $('.roadmap__previous-filler--trigger').click(function(){

      $('.roadmap__year').removeClass('hide');
      $(this).hide(50);

      });


    $('nav a').click(function(){

      $('.hamburger').removeClass('is-active');
      $('header').removeClass('mhn');
      $('body').removeClass('oh');

      });
      function resize() {
        if ($(window).width() > 1024) {
         $('header').removeClass('mhn');
         $('.hamburger').removeClass('is-active');
        }
    }

    $(document).ready( function() {
      $('.hero__stats-widget .stat span').counterUp();


        $(window).resize(resize);
        resize();


        $("a[rel='section-scroll']").mPageScroll2id({
          offset: document.getElementsByTagName("nav"),
          highlightClass: "active",
          highlightSelector: "nav a"
        });

        //Hide Header on on scroll down
        var didScroll;
        var lastScrollTop = 0;
        var delta = -1;
        var navbarHeight = 0;

        $(window).scroll(function(event){
            didScroll = true;
        });

        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        });

        function hasScrolled() {
            var st = $(this).scrollTop();

            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
                return;

            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if ( st > navbarHeight){
                // Scroll Down
                $('.home header').addClass('stick');
            } else {
                // Scroll Ups
                if(st + $(window).height() < $(document).height()) {
                    $('.home header').removeClass('stick');
                }
            }

            lastScrollTop = st;
        }


    });

// jQuery(window).resize(function () {
//     if (jQuery(window).width() > 1400px) {
//         jQuery(header).removeClass("mhn");
//     }
// });
  // Footer //

  // $(window).scroll(function() {

  //     var top_of_screen = $(window).scrollTop();
  // var header = $("header").offset().top + $("header").outerHeight();


  // });

  (function() {

    'use strict';

    // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout
    const breakpoint = window.matchMedia( '(min-width:64em)' );

    // keep track of swiper instances to destroy later
    let mySwiper;

    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////

    const breakpointChecker = function() {

      // if larger viewport and multi-row layout needed
      if ( breakpoint.matches === true ) {

        // clean up old instances and inline styles when available
        if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

        // or/and do nothing
        return;

        // else if a small viewport and single column layout needed
        } else if ( breakpoint.matches === false ) {

          // fire small viewport version of swiper
          return enableSwiper();

        }

    };

    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////

    const enableSwiper = function() {

      mySwiper = new Swiper ('.swiper-container', {

        loop: true,
        autoplay: 4000,
        slidesPerView: 'auto',

        centeredSlides: true,

        a11y: true,
        keyboardControl: true,
        grabCursor: true,

        effect: 'slide',
        speed: 500,
        spaceBetween: 0,
        pagination: '.swiper-pagination',
        paginationClickable: true,



      });

    };


    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////

    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);

    // kickstart
    breakpointChecker();

  })(); /* IIFE end */

  $(document).ready( function() {
    var TxtRotate = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

      var that = this;
      var delta = 300 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function() {
        that.tick();
      }, delta);
    };

    window.onload = function() {
      var elements = document.getElementsByClassName('txt-rotate');
      for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #E34B50 }";
      document.body.appendChild(css);
    };

    var OSName="Unknown OS";
    if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";

    if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

    if (navigator.userAgent.indexOf("Mac") != -1) {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          OSName="iOS";
      } else {
          OSName="Macintosh";
      }
    }

    if (navigator.userAgent.indexOf("Android")!=-1) OSName="Android";
    if ($("body").hasClass("home") == true) {
      if(OSName == "Macintosh"){
         document.getElementById('osx-wallet').style.display = "inline-block";
      }
      if(OSName == "Linux"){
        document.getElementById('linux-wallet').style.display = "inline-block";
      }
      if(OSName == "Windows"){
        document.getElementById('win-wallet').style.display = "inline-block";
      }
      if(OSName == "Android"){
        document.getElementById('and-wallet').style.display = "inline-block";
      }
      if(OSName == "iOS"){
        document.getElementById('ios-wallet').style.display = "inline-block";
      }
    }
  });

  $(document).ready(function() {
    var url = "https://api.coingecko.com/api/v3/ping";

    $.getJSON(url, function(json) {
      if (json.gecko_says == "(V3) To the Moon!") {
        url = "https://api.coingecko.com/api/v3/simple/price?ids=linda&vs_currencies=btc%2Cusd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true";

        $.getJSON(url, function(json) {
          json = json.linda;

          $("#requestUSD").append(
            json.usd + " USD"
          );
          $("#requestSATS").append(
            json.btc.toFixed(9)
          );
          $("#requestCHANGE").append(
            (json.usd_24h_change.toFixed(0) < 0 ? json.usd_24h_change.toFixed(0) * -1 : json.usd_24h_change.toFixed(0)) + "%"
          );
          if (json.usd_24h_change.toFixed(0) < 0) {
            $("#requestCHANGE").addClass('drop');
          } else {
            $("#requestCHANGE").addClass('rise');
          }
          $("#requestVOL").append(
            json.usd_24h_vol.toFixed(2) + " USD"
          );
          $("#requestMC").append(
            json.usd_market_cap == 0 ? "?" : json.usd_market_cap.toFixed(2) + " USD"
          );
        });
      }
    });
  });
