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