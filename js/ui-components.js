
  // $('.ajax-popup-link').magnificPopup({
  //         type: 'ajax',
  //         alignTop: true,
  //         overflowY: 'scroll', // as we know that popup content is tall we set scroll overflow by default to avoid jump
  //           cursor: 'mfp-ajax-cur', // CSS class that will be added to body during the loading (adds "progress" cursor)
  // tError: '<a href="%url%">The content</a> could not be loaded.', //  Error message, can contain %curr% and %total% tags if gallery is enabled
  //       closeBtnInside: true,
  //         preloader: false,
  //         midClick: true,
  //         removalDelay: 300,
  //         mainClass: 'my-mfp-slide-bottom',
  //        preloader: true,
  //       });
  var select_box_con_start_temp = '<a class=" ovx-btn event-error" onclick="open_options(this)"><div class="opt_text">Select</div><span class="ico-arrow"></span><i></i></a><div class="ovx-dropdown"><ul class="ovx-dropdown-options">',
  select_box_con_end = '</ul></div>',
  select_box_con_start = '';


//get all select list
$('select.select_box').each(function(ind, ele) {
  select_box_con = '';
  select_box_options = '';


  var selectbox = $(ele);
  selectbox.addClass('off-screen');

  //for default selected option
  sel_opt = selectbox.find('option:selected').text();
  if (sel_opt == '') {
      select_box_con_start = select_box_con_start_temp;
  } else {
      select_box_con_start = select_box_con_start_temp.replace("Select", sel_opt);
  }
  selectbox.find('option').each(function(optno, eleno) {


      var ths = $(this),
          option_val = ths.text();
      select_box_options += '<li onclick="option_selected(this,' + optno + ')">' + option_val + '</li>';
  });

  select_box_con = select_box_con_start + select_box_options + select_box_con_end;

  $(select_box_con).insertAfter(selectbox);
});
//open options function
function open_options(ths) {
  ths = $(ths);
  $(".ovx-select-group").removeClass('open');
  ths.parent('.ovx-select-group').toggleClass('open');

}
//select option function
function option_selected(ths, optno) {
  ths = $(ths);
  opt_text = ths.text();
  dropdown_parent = ths.closest('.ovx-dropdown'),
      select_parent = $(dropdown_parent).closest('.ovx-select-group');
  dropdown_parent.prev('a').find('.opt_text').text(opt_text);

  $(select_parent).find('select.select_box').children('option')
      .removeAttr('selected')
      .end()
      .children('option:eq(' + optno + ')').attr('selected', 'selected');
  dropdown_parent.parent('.ovx-select-group').toggleClass('open');
}

//Close select box on click anywhere on page
// $(document).click(function(e) {

//   if (!$(e.target).hasClass('ovx-btn') && !$(e.target).hasClass('opt_text') && !$(e.target).hasClass('ico-arrow') && !$(e.target).hasClass('ovx-dropdown-options') && !$(e.target).hasClass('disabled')) {console.log($(e.target).attr('class'));
//       $('.ovx-select-group').removeClass('open');
//   }
// });



    (function(a){a.fn.extend({tabify:function(e){function c(b){hash=a(b).find("a").attr("href");return hash=hash.substring(0,hash.length-4)}function f(b){a(b).addClass("active");a(c(b)).show();a(b).siblings("li").each(function(){a(this).removeClass("active");a(c(this)).hide()})}return this.each(function(){function b(){location.hash&&a(d).find("a[href="+location.hash+"]").length>0&&f(a(d).find("a[href="+location.hash+"]").parent())}var d=this,g={ul:a(d)};a(this).find("li a").each(function(){a(this).attr("href", a(this).attr("href")+"-tab")});location.hash&&b();setInterval(b,100);a(this).find("li").each(function(){a(this).hasClass("active")?a(c(this)).show():a(c(this)).hide()});e&&e(g)})}})})(jQuery);
 
$('.ovx-tabs').tabify();

// $('.ovx-accordion > li > a').click(function(e){
//  $(this).next().stop().slideToggle('fast');
//     $(this).toggleClass('open');
// $(".ovx-accordion .pure-g").not($(this).next()).slideUp('fast')
// e.preventDefault();
// });

function removealert(){
    // setTimeout() function will be fired after page is loaded
    // it will wait for 5 sec. and then will fire
    // $("#successMessage").hide() function
    setTimeout(function() {
        $('.ovx-notify').slideUp("slow");
    }, 5000);
}




let accordion = document.getElementsByClassName("ovx-accordion");
    
let i = 0;
for(i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("open");
        // The nextElementSibling property returns the element immediately following the specified element, in the same tree level
        let panel = this.nextElementSibling;
        if(panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    })
}

// var swiper = new Swiper(".swiper-container", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   },

//   slidesPerView: 3,
//   centeredSlides: true,
//   loop: true,
//   // slidesPerView: 'auto',
//   spaceBetween: 30,

//   a11y: true,
//   keyboardControl: true,
//   grabCursor: true
// });