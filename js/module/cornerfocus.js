/**
 * !CornerFocus(Package v0.1.0) v0.1.0 Copyright (c) 2015, Jnfinity All Rights Reserved.
 *  Available via the MIT or new BSD license.
 *  see: http://tech.yaozong.wang/package
 */
!function(){
	var o 	= document.querySelectorAll('[animt="cornerfocus"]'),
		af0 = document.createElement('div'),
		af1 = document.createElement('div'),
		af2 = document.createElement('div'),
		af3 = document.createElement('div'),
		af4 = document.createElement('div'),
		af5 = document.createElement('div'),
		af6 = document.createElement('div'),
		af7 = document.createElement('div');
	af0.setAttribute('class','animtCorner-lt');
    af0.style.height = '1px';
    af0.style.position = 'absolute';
    af0.style.backgroundColor = 'red';
	af1.setAttribute('class','animtCorner-lt-l');
    af1.style.width = '1px';
    af1.style.position = 'absolute';
    af1.style.backgroundColor = 'red';
	af2.setAttribute('class','animtCorner-rt');
    af2.style.height = '1px';
    af2.style.position = 'absolute';
    af2.style.backgroundColor = 'red';
	af3.setAttribute('class','animtCorner-rt-l');
    af3.style.width = '1px';
    af3.style.position = 'absolute';
    af3.style.backgroundColor = 'red';
	af4.setAttribute('class','animtCorner-rb');
    af4.style.height = '1px';
    af4.style.position = 'absolute';
    af4.style.backgroundColor = 'red';
	af5.setAttribute('class','animtCorner-rb-l');
    af5.style.width = '1px';
    af5.style.position = 'absolute';
    af5.style.backgroundColor = 'red';
	af6.setAttribute('class','animtCorner-lb');
    af6.style.height = '1px';
    af6.style.position = 'absolute';
    af6.style.backgroundColor = 'red';
	af7.setAttribute('class','animtCorner-lb-l');
    af7.style.width = '1px';
    af7.style.position = 'absolute';
    af7.style.backgroundColor = 'red';
	for (var i = 0; i < o.length; i++) {
		o[i].style.position = 'relative';
		o[i].style.display = 'block';
		var t = o[i].querySelector('input[type="text"]');
		if (t) {
			t.onfocus=function() {
				this.parentNode.appendChild(af0);
				this.parentNode.appendChild(af1);
				this.parentNode.appendChild(af2);
				this.parentNode.appendChild(af3);
				this.parentNode.appendChild(af4);
				this.parentNode.appendChild(af5);
				this.parentNode.appendChild(af6);
				this.parentNode.appendChild(af7);
				change(af0,10,false,-6,false,false,-6,0);
				change(af1,false,10,-6,false,false,-6,0);
				change(af2,10,false,-6,-6,false,false,0);
				change(af3,false,10,-6,-6,false,false,0);
				change(af4,10,false,false,false,-6,-6,0);
				change(af5,false,10,false,false,-6,-6,0);
				change(af6,10,false,false,-6,-6,false,0);
				change(af7,false,10,false,-6,-6,false,0);
			}
			t.onblur=function() {
				change(af0,7,false,-3,false,false,-3,1,1,clear(af0));
				change(af1,false,7,-3,false,false,-3,1,1,clear(af1));
				change(af2,7,false,-3,-3,false,false,1,1,clear(af2));
				change(af3,false,7,-3,-3,false,false,1,1,clear(af3));
				change(af4,7,false,false,false,-3,-3,1,1,clear(af4));
				change(af5,false,7,false,false,-3,-3,1,1,clear(af5));
				change(af6,7,false,false,-3,-3,false,1,1,clear(af6));
				change(af7,false,7,false,-3,-3,false,1,1,clear(af7));
				
			}
			function clear(element) {
				return function(){
					if (element) t.parentNode.removeChild(element);
				}
			}
		};
	};
	function change (element, width, height, top, right, bottom, left, opacity, count, callback) {
		var currentCount = 0;
		count = count || 0;
		opacity = opacity || 0;
		var flag = setInterval(function(){
			if ( currentCount > 3 ) {
				clearInterval(flag);
				intervalId = null;
				if (callback) { callback() };
			} else{
				currentCount += 0.12;
                if (count == 0) {
                	if (width) element.style.width = width - currentCount + 'px';
	                if (height) element.style.height = height - currentCount + 'px';
	                if (top) element.style.top = -(-top - currentCount) + 'px';
	                if (left) element.style.left = -(-left - currentCount) + 'px';
	                if (bottom) element.style.bottom = -(-bottom - currentCount) + 'px';
	                if (right) element.style.right = -(-right - currentCount) + 'px';
	                element.style.opacity = opacity + currentCount/3;
                } else{
                	if (width) element.style.width = width + currentCount + 'px';
	                if (height) element.style.height = height + currentCount + 'px';
	                if (top) element.style.top = -(-top + currentCount) + 'px';
	                if (left) element.style.left= -(-left + currentCount) + 'px';
	                if (bottom) element.style.bottom= -(-bottom + currentCount) + 'px';
	                if (right) element.style.right= -(-right + currentCount) + 'px';
	                element.style.opacity = opacity - currentCount/3;
                };
			};
		},4)
	}
}(window)