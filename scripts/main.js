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
	$('a').smoothScroll({
		offset: 1
	});
	$(window).scroll(function() {
		var $navbar = $('#navbar');
		var offset = $navbar.offset().top;
		if (offset > $navbar.height()) {
			$navbar.addClass('scrolled-nav');
		} else {
			$navbar.removeClass('scrolled-nav');
		}

		$('#nav li').removeClass('active');


		// bottom to top order
		// contact page
		if (offset >= $('#contact').offset().top) {
			console.log('contact');
			$('#nav li a[href="#contact"]').parent().addClass('active');
		}
		// work page
		else if (offset >= $('#work').offset().top) {
			console.log('work');
			$('#nav li a[href="#work"]').parent().addClass('active');
		}
		// about page
		else if (offset >= $('#about').offset().top) {
			console.log('about');
			$('#nav li a[href="#about"]').parent().addClass('active');
		}
		// home page
		else {
			console.log('home');
			$('#nav li a[href="#home"]').parent().addClass('active');
		}
	});
})();

// particlesJS.load('particles-js', '../particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });
