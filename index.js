'use strict';

let tah = 'kolecko';
const hraje = document.querySelector('#znacka'); 

// let klik = (event) => {
//   if (tah === 'kolecko') {
//     hraje.src="img/cross.svg";
//     hraje.alt="Bily krizek";
//     event.target.classList.add('pole--kolecko');
//     event.target.disabled = true;
//     tah = 'krizek';
//   } else {
//     hraje.src="img/circle.svg";
//     hraje.alt="Bile kolecko";
//     event.target.classList.add('pole--krizek');
//     event.target.disabled = true;
//     tah = 'kolecko';
//   }
// };

// const pole = document.querySelectorAll('.btn');
// for (let i = 0; i < pole.length; i++) {
// pole[i].addEventListener('click', klik);
// };


//vyhodnoceni vyhry

const getSymbol = (field) => {
	if (field.classList.contains('pole--krizek')) {
		return 'krizek'
	} else if (field.classList.contains('pole--kolecko')) {
		return 'kolecko'
	}
}

const boardSize = 10 // 10x10
const fields = document.querySelectorAll('.btn') 
const getField = (row, column) => fields[row * boardSize + column]

const getPosition = (field) => {
	let fieldIndex = 0
	while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
		fieldIndex++
	}

	return {
		row: Math.floor(fieldIndex / boardSize),
		column: fieldIndex % boardSize,
	}
}

const symbolsToWin = 5
const isWinningMove = (field) => {
	const origin = getPosition(field)
	const symbol = getSymbol(field)
  

	let i
	let j

	let leftDown = 1 //doleva dolu
	i = origin.row
	j = origin.column

	while (i < boardSize - 1 && j > 0 && symbol === getSymbol(getField(i+1, j-1))) {
		leftDown++
		i++
		j--
	}

	if (leftDown >= symbolsToWin) {
		return true
	}

	let leftUp = 1 //doleva nahoru
	i = origin.row
	j = origin.column

	while (i > 0 && j < boardSize - 1 && symbol === getSymbol(getField(i-1, j+1))) {
		leftUp++
		i--
		j++
	}

	if (leftUp >= symbolsToWin) {
		return true
	}

	let rightDown = 1 //doprava dolu
	i = origin.row
	j = origin.column

	while (i < boardSize - 1 && j < boardSize - 1 && symbol === getSymbol(getField(i+1, j+1))) {
		rightDown++
		i++
		j++
	}

	if (rightDown >= symbolsToWin) {
		return true
	}

	let rightUp = 1 //doprava nahoru
	i = origin.row
	j = origin.column

	while (i > 0 && j > 0 && symbol === getSymbol(getField(i-1, j-1))) {
		rightUp++
		i--
		j--
	}

	if (rightUp >= symbolsToWin) {
		return true
	}

	let inRow = 1 // Jednička pro právě vybrané políčko
	// Doleva
	i = origin.column
	while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
		inRow++
		i--
	}

	// Doprava
	i = origin.column
	while (
		i < boardSize - 1 &&
		symbol === getSymbol(getField(origin.row, i + 1))
	) {
		inRow++
		i++
	}

	if (inRow >= symbolsToWin) {
		return true
	}

	let inColumn = 1
	// Nahoru
	i = origin.row
	while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
		inColumn++
		i--
	}

	// Dolu
	i = origin.row
	while (
		i < boardSize - 1 &&
		symbol === getSymbol(getField(i + 1, origin.column))
	) {
		inColumn++
		i++
	}

	if (inColumn >= symbolsToWin) {
		return true
	}

	return false
}



let klik = (event) => {
  if (tah === 'kolecko') {
    hraje.src="img/cross.svg";
    hraje.alt="Bily krizek";
    event.target.classList.add('pole--kolecko');
    event.target.disabled = true;
    tah = 'krizek';
		if (isWinningMove(event.target) === true) {
			const novaHra = confirm(`Vyhrává kolečko. Chceš zkusit ještě jednou?`);
			if (novaHra === true) {
				location.reload();
			}
  }} else {
    hraje.src="img/circle.svg";
    hraje.alt="Bile kolecko";
    event.target.classList.add('pole--krizek');
    event.target.disabled = true;
    tah = 'kolecko';
		if (isWinningMove(event.target) === true) {
			const novaHra = confirm(`Vyhrává křížek. Chceš zkusit ještě jednou?`);
			if (novaHra === true) {
				location.reload();
  		}
		}};}

const pole = document.querySelectorAll('.btn');
for (let i = 0; i < pole.length; i++) {
pole[i].addEventListener('click', klik);
};

