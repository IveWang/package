!function(){
	var o 		 = document.querySelectorAll('[animt]'),
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
    af0.style.width = '1px';
    af0.style.position = 'absolute';
    af0.style.backgroundColor = 'red';
	af2.setAttribute('class','animtCorner-rt');
    af0.style.height = '1px';
    af0.style.position = 'absolute';
    af0.style.backgroundColor = 'red';
	af3.setAttribute('class','animtCorner-rt-l');
    af0.style.width = '1px';
    af0.style.position = 'absolute';
    af0.style.backgroundColor = 'red';
	af4.setAttribute('class','animtCorner-rb');
    af0.style.height = '1px';
    af0.style.position = 'absolute';
    af0.style.backgroundColor = 'red';
	af5.setAttribute('class','animtCorner-rb-l');
    af0.style.width = '1px';
    af0.style.position = 'absolute';
    af0.style.backgroundColor = 'red';
	af6.setAttribute('class','animtCorner-lb');
    af0.style.height = '1px';
    af0.style.position = 'absolute';
    af0.style.backgroundColor = 'red';
	af7.setAttribute('class','animtCorner-lb-l');
    af0.style.width = '1px';
    af0.style.position = 'absolute';
    af0.style.backgroundColor = 'red';
	for (var i = 0; i < o.length; i++) {
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
                change(af0,);
			}
			// t.onblur=function() {
			// 	this.parentNode.removeChild(af0);
			// 	this.parentNode.removeChild(af1);
			// 	this.parentNode.removeChild(af2);
			// 	this.parentNode.removeChild(af3);
			// 	this.parentNode.removeChild(af4);
			// 	this.parentNode.removeChild(af5);
			// 	this.parentNode.removeChild(af6);
			// 	this.parentNode.removeChild(af7);
			// }
		};
	};
	function change (element, width, height, top, right, bottom, left, count) {
		var currentCount = 0;
		count = Math.abs(count) || 3;
		var flag = setInterval(function(){
			if ( currentCount > count ) {
				clearInterval(flag)
			} else{
				currentCount+=0.06;
                if (width) element.style.Width = width - currentCount + 'px';
                if (height) element.style.Height = height - currentCount + 'px';
                if (top) element.style.top = top - currentCount + 'px';
                if (left) element.style.left= left - currentCount + 'px';
                if (bottom) element.style.bottom= bottom - currentCount + 'px';
                if (right) element.style.right= right - currentCount + 'px';
			};
		},2)
	}
}(window)