const isVisible = (function (window, document, undefined) {

	return (function (el, partial) {

		const 	elRect			= el.getBoundingClientRect(),
				elHeight		= parseInt(getComputedStyle(el)['height']),
				viewTop 		= document.body.scrollTop,
				viewBottom 		= viewTop + window.innerHeight,
				_top			= elRect.top + document.body.scrollTop,
				_bottom			= _top + elHeight,
				compareTop		= partial === true ? _bottom : _top,
				compareBottom	= partial === true ? _top : _bottom;

		return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

	});

})(window, document);

window.addEventListener("scroll", function(e) {

	const elements = document.querySelectorAll(".animated");

	Array.prototype.forEach.call(elements, function (el, i) {
	
		const animation = el.dataset.animation;
		
		if (isVisible(el, true) && animation) {

			if (el.classList){
			  el.classList.add(animation);
			}
			else
			  el.className += " " + animation;

		} else {

			el.classList.remove(animation);
		}
	});

});

function showSubmenu(e){
	const submenu = document.querySelector(".submenu");

	if (submenu.classList.contains("display")){
		submenu.classList.remove("display");
		submenu.classList.add("hide");
	}
	else{
		submenu.classList.add("display");
		submenu.classList.remove("hide");
	}
}

function hideSubmenu(e) {

	const submenu = document.querySelector(".submenu");

	if (submenu.classList.contains("display")){
		submenu.classList.remove("display");
		submenu.classList.add("hide");
	}

}

function view(id) {

	hideSubmenu();

	const el = document.getElementById(id);

	if (!el) return;

	el.scrollIntoView({ 
	  behavior: 'smooth' 
	});

}