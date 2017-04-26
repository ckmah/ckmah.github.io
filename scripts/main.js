/*!
 *
 *  Static Website Starter Kit
 *  Copyright 2015 Konstantin Tarkus, Kriasoft LLC. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

(function() {
  'use strict';
  var $navbar = $('#nav');
  var scrollOffset = '53';
  $('a').smoothScroll({
    offset: -scrollOffset + 1
  });

  $(window).scroll(function() {
    var offset = $navbar.offset().top;
    if (offset > $navbar.height()) {
      $navbar.addClass('scrolled-nav');
    } else {
      $navbar.removeClass('scrolled-nav');
    }

    // reset
    $('#nav').removeClass('home');
    $('#nav').removeClass('work');
    $('#nav').removeClass('about');
    $('#nav').removeClass('contact');
    $('#nav li').removeClass('active');

    // bottom to top order
    // contact page
    if (offset >= $('#contact').offset().top - scrollOffset) {
      $('#nav').addClass('contact');
      $('#nav li a[href="#contact"]').parent().addClass('active');
    }
    // work page
    else if (offset >= $('#work').offset().top - scrollOffset) {
      $('#nav').addClass('work');
      $('#nav li a[href="#work"]').parent().addClass('active');
    }
    // about page
    else if (offset >= $('#about').offset().top - scrollOffset) {
      $('#nav').addClass('about');
      $('#nav li a[href="#about"]').parent().addClass('active');
    }
    // home page
    else {
      $('#nav').addClass('home');
      $('#nav li a[href="#home"]').parent().addClass('active');
    }
  });

  $(function() {
    $('#nav-toggle').click(function() {

      // Add transition class from shown to hidden
      if ($navbar.hasClass('show-nav')) {
        $navbar.removeClass('show-nav').addClass('hide-nav');
        $('#nav-toggle').addClass('glyphicon-menu-hamburger');
        $('#nav-toggle').removeClass('glyphicon-remove');

        // Remove transition class after delay
        setTimeout(function() {
          $navbar.removeClass('hide-nav');
        }, 500);

      } else {
        // Show nav
        $navbar.removeClass('hide-nav').addClass('show-nav');
        $('#nav-toggle').removeClass('glyphicon-menu-hamburger');
        $('#nav-toggle').addClass('glyphicon-remove');
      }

      return false;
    });
  });

  // Bind nav toggle click to esc key
  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $('#nav-toggle').click();
    }
  });

  $('#nav li a').click(function() {
    $('#nav-toggle').click();
  });
})();

// particlesJS.load('particles-js', '../particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });
