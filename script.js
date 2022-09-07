function deleteGrid() {
	const boxes = document.querySelectorAll('.box');
	boxes.forEach(deleteMe => {
		deleteMe.remove();
	});
}

function changeGrid() {
	let newNum = prompt('How many squares per side?');

	if (newNum < 1 || newNum > 100) {
		alert('Make sure the value is between 1 and 100');
		return;
	}

	deleteGrid();
	createGrid(newNum);

}

function createGrid(num) {
	numDivs = num * num;
	const container = document.querySelector('.container');

	for (x = 0; x < numDivs; x++) {
		const box = document.createElement('div');
		box.classList.add('box');
		container.appendChild(box);
	}

	document.documentElement.style.setProperty('--input', num);
	document.querySelectorAll('.box').forEach(box => {
		box.addEventListener('mouseover', event => {

			box.classList.add('on');
			box.classList.remove('off');

		});
	});

	document.querySelectorAll('.box').forEach(box => {
		box.addEventListener('mouseout', event => {

			box.classList.remove('on');
			box.classList.add('off');

		});
	});

}

createGrid(16);

document.querySelector('#change-grid').addEventListener('click', changeGrid);