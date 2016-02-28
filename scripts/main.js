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

var $CARD = $('#info-card');


(function() {
  'use strict';

  // Set initial conditions.
  init();

  // Show details
  $('.content-block').click(function() {
    var $block = $(this);

    // bind data
    $CARD.find('#title').text($block.data('title'));
    $CARD.find('#info-pic').css('background-image', $block.data('image'));
    $CARD.find('#category').text($block.data('category'));

    // Put each tag in its own div
    $CARD.find('.tag').remove();
    var tags = String($block.data('tags')).split(',');
    if (tags[0] !== '') {
      for (var str of tags) {
        var div = document.createElement('div');
        div.innerHTML = str;
        $(div).addClass('tag');
        $CARD.find('#category').after(div);
      }
    }

    $CARD.find('#description').text($block.data('description'));

    $CARD.fadeIn(300);
  });

  $('#info-close').click(function() {
    $('#info-card').fadeOut(300);
  });

  $('.category').hover(function() {
    var categoryClass = $(this).text();
    console.log('hover');
    $('.' + categoryClass).addClass('content-block-hover');
  }, function(event) {
    var categoryClass = $(this).text();
    $('.' + categoryClass).removeClass('content-block-hover');
  });

})();

/**
 * Set initial conditions on page load.
 */
function init() {
  'use strict';
  $CARD.hide();
  particlesJS.load('particles-js', '../particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

}
