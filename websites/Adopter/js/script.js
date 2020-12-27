

$(document).ready(function () {

  /* ============================================ */
  /* ================ For normal carousel jquery part ================ */
  /* ============================================ */

  /* For owl carousel */
  $('.loop').owlCarousel({
    center: true,
    items: 2,
    loop: true,
    dots: true,
    margin: 30,
    nav: false,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots: true,
    responsiveClass: true,
    centermode: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      940: {
        items: 3,
      }
    }
  });

    /* ============================================ */
  /* ================ For normal carousel jquery part ================ */
  /* ============================================ */

  /* For owl carousel */
  $('.blog-pg_btm').owlCarousel({
    center: true,
    items: 2,
    loop: true,
    dots: true,
    margin: 30,
    nav: false,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots: true,
    responsiveClass: true,
    centermode: true,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      940: {
        items: 3,
      }
    }
  });

  /* ============================================ */
  /* ================ For big carousel jquery part ================ */
  /* ============================================ */

  /* Owl carousel for about testimonia*/
  $('.about-testimonia').owlCarousel({
    center: true,
    items: 1,
    loop: true,
    dots: true,
    nav: false,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots: true,
    margin: 50,
    responsiveClass: true,
    centermode: true,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
      },
    }
  });



  /* For sticky navigation */

  $('.js--active-sticky').waypoint(function (direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '55px'
  });

  /* ============================================ */
  /* ================ For Counter js ================ */
  /* ============================================ */

   var x = 'Abhishek';
  
   console.log('Hello' + ' ' + x + ' ' + 'can you need any help?');


});


/* ============================================ */
/* ================ For Contact form js part ================ */
/* ============================================ */

function myFormValidation() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var city = document.getElementById('city').value;
  var subject = document.getElementById('subject').value;


  /* --------------- Validation for ------- user ------- field in contact page form --------------- */
  if (name == "") {
    document.getElementById('name_error-text').innerHTML = " Please enter your name here ";
    return false;
  }

  if ((name.length <= 2) || (name.length > 50)) {
    document.getElementById('name_error-text').innerHTML = " Your name must be between 2 and 50 characters";
    return false;
  }

  if (!isNaN(name)) {
    document.getElementById('name_error-text').innerHTML = " Only characters are allowed";
    return false;
  }


  /* --------------- Validation for ------- email ------- field in contact page form --------------- */
  if (email == "") {
    document.getElementById('email_error-text').innerHTML = " Please enter your email address here ";
    return false;
  }

  if (email.indexOf('@') <= 0 ) {
    document.getElementById('email_error-text').innerHTML = " Invalid @ position ";
    return false;
  }

  if ((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')) {
    document.getElementById('email_error-text').innerHTML = " '.' at invalid position ";
    return false;
  }

  /* --------------- Validation for ------- phone number ------- field in contact page form --------------- */
  if (phone == "") {
    document.getElementById('phone_error-text').innerHTML = " Please enter your phone number here ";
    return false;
  }

  if (isNaN(phone)) {
    document.getElementById('phone_error-text').innerHTML = " Enter digits only not characters";
    return false;
  }

  if (phone.length!=10) {
    document.getElementById('phone_error-text').innerHTML = " Phone number must be 10 digits only";
    return false;
  }

  /* --------------- Validation for ------- city ------- field in contact page form --------------- */
  if (city == "") {
    document.getElementById('city_error-text').innerHTML = " Please enter your city here ";
    return false;
  }

  if (!isNaN(city)) {
    document.getElementById('city_error-text').innerHTML = " Enter your city name properly";
    return false;
  }

  /* --------------- Validation for ------- subject ------- field in contact page form --------------- */
  if (subject == "") {
    document.getElementById('subject_error-text').innerHTML = " Please enter your subject here ";
    return false;
  }

  if (!isNaN(subject)) {
    document.getElementById('subject_error-text').innerHTML = " Digits are not allowed for subject";
    return false;
  }

/* --------------- Validation for ------- checkbox ------- field in contact page form --------------- */

  if(remember.checked == false) {
    document.getElementById('remember_error-text').innerHTML= " Please check the box if you agree our privacy & policy ";
     return false;
  }


  // else {    
  //   document.getElementById('name_error-text').style.display='none';
  // }
}

/* ============================================ */
/* ================ For Active Counter jquery in about page ================ */
/* ============================================ */

(function($) {
  'use strict';

  $('.count-num').rCounter();
})(jQuery);
