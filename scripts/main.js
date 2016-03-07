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
  $('a').smoothScroll();
  $('#carousel-indicators').affix({
    offset: {
      top: $('#carousel-indicators').offset().top
    }
  });
  $('#work-carousel').carousel({
    interval: false,
    keyboard: true
  });

})();

// particlesJS.load('particles-js', '../particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });
