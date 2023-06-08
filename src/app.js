/*
* File: app.js
* Author: Németh Angéla
* Copyright: 2023, Németh Angéla
* Group: Szoft 1-2 E
* Date: 2023-06-08
* Github: https://github.com/NemethAngela/
* Licenc: GNU GPL
*/

const doc = {
    magassagInput: document.querySelector('#magassag'),
    szelessegInput: document.querySelector('#szelesseg'),
    hosszInput: document.querySelector('#hossz'),
    terfogatInput: document.querySelector('#terfogat'),
    calcButton: document.querySelector('#calcButton')
};

const state = {
    terfogat: 0,
};

window.addEventListener('load', () => {
    init();
});

function init() {       
    if (calcButton) {
        doc.calcButton.addEventListener('click', () => {
            startCalc();
        });
    }
}

function startCalc() {
    let magassag = doc.magassagInput.value;
    let szelesseg = doc.szelessegInput.value;
    let hossz = doc.hosszInput.value;
    let isValid = checkInput(magassag) && checkInput(szelesseg) && checkInput(hossz);

    if (isValid == true) {
        state.terfogat = calcTerfogat(magassag, szelesseg, hossz);
        doc.terfogatInput.value = state.terfogat;
    }
    else {
        doc.terfogatInput.value = "Nem jó input lett megadva";
    }
}

function calcTerfogat(magassag, szelesseg, hossz) {    
    return (magassag-10) * szelesseg * hossz;
}

function checkInput(input) {
    let inputStr = String(input);
    let inputNum = Number(input);
    if (inputStr.match(/^[0-9.]+$/)) {
        if(inputNum > 0) {
            return true;
        } else {
        return false;
        }
    } else {
        return false;
    }
}