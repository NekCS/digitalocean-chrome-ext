
console.log('printMode');

let selectors = [ '.table-of-contents', 
				'body > header',
				'#scrollUp',
				'.tutorial-footer .tutorial-ctas',
				'.related-tutorials',
				'.content-comments'
			];

for( let i = 0; i < selectors.length; i++ ) {
	console.log('hi');
	let tmpElement = document.querySelectorAll(selectors[i]);
	tmpElement[0].style.display = 'none';
}