function createGrid(num) {
	numDivs = num * num;
	const container = document.querySelector('.container');

	for (x = 0; x < numDivs; x++) {
		const box = document.createElement('div');
		box.classList.add('box');
		container.appendChild(box);
	}

	document.documentElement.style.setProperty('--input', num);

}

createGrid(16);

document.querySelectorAll('.box').forEach(box => {
	box.addEventListener('mouseover', event => {

		box.classList.add('on');
		box.classList.remove('off');

	})
})

document.querySelectorAll('.box').forEach(box => {
	box.addEventListener('mouseout', event => {

		box.classList.remove('on');
		box.classList.add('off');

	})
})