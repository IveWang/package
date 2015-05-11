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
	af1.setAttribute('class','animtCorner-lt-l');
	af2.setAttribute('class','animtCorner-rt');
	af3.setAttribute('class','animtCorner-rt-l');
	af4.setAttribute('class','animtCorner-rb');
	af5.setAttribute('class','animtCorner-rb-l');
	af6.setAttribute('class','animtCorner-lb');
	af7.setAttribute('class','animtCorner-lb-l');
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
	var func = {
		easeOut: function(initPos, targetPos, currentCount, count) {
            var b = initPos, c = targetPos - initPos, t = currentCount, d = count;
            return -c * (t /= d) * (t - 2) + b;
        }
	};
	function change (count) {
		var currentCount = 0;
		count = Math.abs(count) || 1;
		var flag = setInterval(function(){
			if ( currentCount > count ) {
				clearInterval(flag)
			} else{
				currentCount++;
			};
		},5)
	}
}(window)