// let tabs = document.querySelectorAll('.tab');
// let links = document.querySelectorAll('.link');



// for (let link of links) {
// 	link.addEventListener('click', function (e) {
	

// 		if (link.parentNode.classList.contains('active') === false) {
// 			link.parentNode.classList.add('active')
// 		} else if (link.parentNode.classList.contains('active') === true) {
// 			link.parentNode.classList.remove('active')
// 		}



// 	})
// }
let links = document.querySelectorAll('a');
let tabs = document.querySelectorAll('.tab');

for (let i = 0; i < links.length; i++) {
	for (let k = 0; k < tabs.length; k++) {
		links[i].addEventListener('click', function (e) {
			e.preventDefault();	
			if (i === k) {
			
			if (links[i].classList.contains('active') === true) {
				links[i].classList.toggle('active');
				tabs[k].classList.toggle('active');
			} 
			else if (links[i].classList.contains('active') === false) {
				links[i].classList.toggle('active');
				tabs[k].classList.toggle('active');
			} 
		}
		})
	
		
	}
	
}

