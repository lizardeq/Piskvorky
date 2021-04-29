'use strict';

let tah = 'kolecko';
const hraje = document.querySelector('#znacka'); 

const klik = (event) => {
  if (tah === 'kolecko') {
    hraje.src="img/cross.svg";
    hraje.alt="Bily krizek";
    // hraje.classList.add("krizek");
    // hraje.classList.remove("kolecko");
    event.target.classList.add("pole--kolecko");
    event.target.disabled = true;
    tah = 'krizek';
  } else {
    hraje.src="img/circle.svg";
    hraje.alt="Bile kolecko";
    // hraje.classList.add("kolecko");
    // hraje.classList.remove("krizek");
    event.target.classList.add("pole--krizek");
    event.target.disabled = true;
    tah = 'kolecko';
  }
}



const pole = document.querySelector('.btn');
for (let i = 0; i < pole.length; i++) {
pole[i].addEventListener('click', klik);
};

