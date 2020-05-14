/* Change Background Color
 * when the button is clicked
 - Mark
 * Testing git 
 */

const colorText = document.querySelector('.hexColor');
const changeColor = document.querySelector('.changeBtn');
const bodyElem = document.querySelector('.body');
const colors = ['#4696d5', '#fedb5b', '#fa6c56', '#f59d53', '#b9d870', '#b6c61b',
				'#209cfe', '#ab64ff', '#e3b13e']; // color selections

changeColor.addEventListener('click', colorChange);

function colorChange() {
	let randomNum = getRandomInt(colors.length)
	document.body.style.backgroundColor = colors[randomNum];
	colorText.innerHTML = colors[randomNum];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}