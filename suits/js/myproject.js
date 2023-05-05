let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let tree = document.getElementById('tree');



window.onscroll=function() {
	let value= scrollY;
	text.style.marginTop=value * 2.5 + 'px';
	leaf.style.top=value * -1.5 + 'px';
	leaf.style.left=value * 1.5 + 'px';
	hill5.style.left=value * 1.5 + 'px';
	hill4.style.left=value * -1.5 + 'px';
	hill1.style.top=value * 1.2 + 'px';
	tree.style.top=value *1.6+'px';
	if (scrollY>= 135) {
			document.querySelector('.container').style.background='linear-gradient( #376281,#10001f)';
		}
	

}














