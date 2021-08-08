var x = 'buddy',
	btnContainer;
console.log('Hello ' + x + ', welcome to pixabuddy'),
	(function (e) {
		'use strict';
		var t, n, r, a;
		(t = void 0),
			(n = void 0),
			(r = function () {
				n.addEventListener('click', function () {
					return a(t, 'nav-active');
				});
			}),
			(a = function (e, t) {
				e.classList.contains(t) ? e.classList.remove(t) : e.classList.add(t);
			}),
			(t = document.querySelector('body')),
			(n = document.querySelector('.menu-icon')),
			document.querySelectorAll('.nav__list-item'),
			r();
	})(jQuery);
for (
	var btns = (btnContainer = document.getElementById(
			'nav__content'
		)).getElementsByClassName('nav__list-item'),
		i = 0;
	i < btns.length;
	i++
)
	btns[i].addEventListener('click', function () {
		var e = document.getElementsByClassName('active-nav');
		(e[0].className = e[0].className.replace(' active-nav', '')),
			(this.className += ' active-nav');
	});
for (
	$(document).ready(function () {
		$('.filter-button').click(function () {
			var e = $(this).attr('data-filter');
			'all' == e
				? $('.filter').show('1000')
				: ($('.filter')
						.not('.' + e)
						.hide('3000'),
				  $('.filter')
						.filter('.' + e)
						.show('3000'));
		});
	}),
		btns = (btnContainer = document.getElementById(
			'portfolio-filter'
		)).getElementsByClassName('filter-button'),
		i = 0;
	i < btns.length;
	i++
)
	btns[i].addEventListener('click', function () {
		var e = document.getElementsByClassName('active');
		(e[0].className = e[0].className.replace(' active', '')),
			(this.className += ' active');
	});
function myFormValidation() {
	var e = document.getElementById('name').value,
		t = document.getElementById('email').value,
		n = document.getElementById('phone').value,
		r = document.getElementById('services').value,
		a = document.getElementById('message').value;
	return '' == e
		? ((document.getElementById('name_error-text').innerHTML =
				' Please enter your name here '),
		  !1)
		: e.length <= 2 || e.length > 50
		? ((document.getElementById('name_error-text').innerHTML =
				' Your name must be between 2 and 50 characters'),
		  !1)
		: isNaN(e)
		? '' == t
			? ((document.getElementById('email_error-text').innerHTML =
					' Please enter your email address here '),
			  !1)
			: isNaN(t)
			? t.indexOf('@') <= 0
				? ((document.getElementById('email_error-text').innerHTML =
						' Please enter @ in the correct position '),
				  !1)
				: '.' != t.charAt(t.length - 4) && '.' != t.charAt(t.length - 3)
				? ((document.getElementById('email_error-text').innerHTML =
						"Please enter '.' in the correct position"),
				  !1)
				: '' == n
				? ((document.getElementById('phone_error-text').innerHTML =
						' Please enter your phone number here '),
				  !1)
				: isNaN(n)
				? ((document.getElementById('phone_error-text').innerHTML =
						' Enter digits only not characters'),
				  !1)
				: 10 != n.length
				? ((document.getElementById('phone_error-text').innerHTML =
						' Phone number must be 7 to 10 digits only'),
				  !1)
				: '' == a
				? ((document.getElementById('message_error-text').innerHTML =
						' Please leave your message here..'),
				  !1)
				: void 0
			: ((document.getElementById('email_error-text').innerHTML =
					' Please enter a proper email pattern'),
			  !1)
		: ((document.getElementById('name_error-text').innerHTML =
				' Only characters are allowed'),
		  !1);
}
function myFormValidationSubscribe() {
	var e = document.getElementById('name-subscribe').value,
		t = document.getElementById('email-subscribe').value;
	return '' == e
		? ((document.getElementById('name_error-text').innerHTML =
				' Please enter your name here '),
		  !1)
		: e.length <= 2 || e.length > 50
		? ((document.getElementById('name_error-text').innerHTML =
				' Your name must be between 2 and 50 characters'),
		  !1)
		: isNaN(e)
		? '' == t
			? ((document.getElementById('email_error-text').innerHTML =
					' Please enter your email address here '),
			  !1)
			: isNaN(t)
			? t.indexOf('@') <= 0
				? ((document.getElementById('email_error-text').innerHTML =
						' Invalid @ position '),
				  !1)
				: '.' != t.charAt(t.length - 4) && '.' != t.charAt(t.length - 3)
				? ((document.getElementById('email_error-text').innerHTML =
						" '.' at invalid position "),
				  !1)
				: void 0
			: ((document.getElementById('email_error-text').innerHTML =
					' Please enter a proper email pattern'),
			  !1)
		: ((document.getElementById('name_error-text').innerHTML =
				' Only characters are allowed'),
		  !1);
}
$(function () {
	var message = "Hey, I'm here! 🙋‍♂️",
		original;
	$(window)
		.focus(function () {
			original && (document.title = original);
		})
		.blur(function () {
			var title = $('title').text();
			title != message && (original = title), (document.title = message);
		});
});
