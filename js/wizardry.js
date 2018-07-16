
function _l(e) { console.log(":: " + e + " ::"); }

var original_w = $(window).width();
		original_h = $(window).height();
		w 				 = $(window).width();
		h 				 = $(window).height();

/* branding_hover *
 * Hover function for the #branding-box element
 * Relevant CLASSES: .stretch,  .stuck
 */
function branding_hover()
{
	var r = $("#branding-box");
	var m = $("#me-box");

	if ( !(r.hasClass('home')) ) {
		var c = $(".tab.current");
		var w = c.data('tab');
		var w_str = "#" + w + "-window";

		$("#me-box > div").addClass('dn');
		$("#me-box > .home").removeClass('dn');

		m.removeClass('stuck');			    // #branding-box updates
		r.removeClass('away');					
		m.removeClass('stretch');
		r.addClass('home');

		c.removeClass('current');       // previous tab updates
		$(w_str).removeClass('shown');
		$(w_str).addClass('hidden');
	}
	else {
		if ( !(m.hasClass('stuck')) ) {
			if ( !(m.hasClass('stretch')) ) { 
				m.addClass('stretch');
			}
			else {
				m.removeClass('stretch');
			}
		}
	}
}

/* away_from_home *
 * Update the site foreground & background
 * based on the tab clicked
 * Relevant CLASSES: .home, .away, .stuck, 
 *                   .shown, .hidden, .current
 */
function away_from_home()
{
	var t = $(this).data('tab');
			r = $("#branding-box");
			m = $("#me-box");

			idstr = "#" + t + "-window";
			p = $(idstr);
			c = $(".tab.current");

	// Take care of previous tab
	c.removeClass('current');
	if (c) {
		var old_tab = c.data('tab');
				old_wstr = "#" + old_tab + "-window";
		$(old_wstr).removeClass('shown');
		$(old_wstr).addClass('hidden');
	}

	$("#me-box > div").addClass('dn');

	// Take care of now-current tab
	/* Case: Left Brain tab */
	if ( t == "projects" ) {
		$("#me-box > .left").removeClass('dn');
	}
	/* Case: ABOUT tab */
	else if ( t == "about" ) {
		$("#me-box > .about").removeClass('dn');
	}	
	/* Case: Right Brain tab */
	else {
		$("#me-box > .right").removeClass('dn');
	}
	m.addClass('stretch');
	m.addClass('stuck');

	$(this).addClass('current'); 
	p.removeClass('hidden');  // show the content window for this tab
	p.addClass('shown');

	r.removeClass('home');    // update #branding-box
	r.addClass('away');
}

/* go_home *
 * Click handler for static #me-left-link;
 * specific to a link that only takes the user to the home page
 */
function go_home()
{
	var r = $("#branding-box");
	var m = $("#me-box");
	if ( !(r.hasClass('home')) ) {
		var c = $(".tab.current");
		var w = c.data('tab');
		var w_str = "#" + w + "-window";

		$("#me-box > div").addClass('dn');
		$("#me-box > .home").removeClass('dn');

		m.removeClass('stuck');			    // #branding-box updates
		r.removeClass('away');					
		m.removeClass('stretch');
		r.addClass('home');

		c.removeClass('current');       // previous tab updates
		$(w_str).removeClass('shown');
		$(w_str).addClass('hidden');
	}
}

/* adj_dim *
 * Adjust dimensions on resize
 */
function adj_dim()
{
	$("#top").css('height', h);
	$("#content-window").css('height', h-50);
}


$(".tab").click(away_from_home);
$("#me-left-link").click(go_home);
$('#logo-box').click(branding_hover);

$(document).ready(function(){
	adj_dim(); 
});

window.addEventListener('resize', function() {
	w = $(window).width();
	h = $(window).height();
	adj_dim();
}, true);
