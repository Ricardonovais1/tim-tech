// Tela 1:

// Botões de modalidade (single/ multi)

const singleUp = document.getElementById('single-up');
const singleDw = document.getElementById('single-dw');
const areaSingle = document.querySelector('.area-single');

const doubleUp = document.getElementById('double-up');
const doubleDw = document.getElementById('double-dw');
const areaDouble = document.querySelector('.area-double');

// Botão confirmar

const confirmBtn1Up = document.getElementById('conf-1-up');
const confirmBtn1Dw = document.getElementById('conf-1-dw');

// AÇÃO NO BOTÃO - Selecionar o modo de SINGLE PLAYER:

areaSingle.addEventListener('click', () => {
    singleUp.classList.add('hide');
    singleDw.classList.remove('hide');
    doubleUp.classList.remove('hide');
    doubleDw.classList.add('hide');
    confirmBtn1Up.classList.remove('hide');
    confirmBtn1Dw.classList.add('hide');
});

// AÇÃO NO BOTÃO - Selecionar o modo de MULTIPLAYER:

areaDouble.addEventListener('click', () => {
    doubleUp.classList.add('hide');
    doubleDw.classList.remove('hide');
    singleUp.classList.remove('hide');
    singleDw.classList.add('hide');
    confirmBtn1Up.classList.remove('hide');
    confirmBtn1Dw.classList.add('hide');
});

///////////////////////////////////////////////////////////

let timeoutId;

// Tela 2:

// Ação do botão GAMEPLAY

const btnUp = document.getElementById('interact-up');
const btnDw = document.getElementById('interact-dw');
const btnArea = document.getElementById('interact-area');


btnArea.addEventListener('click', () => {
    btnUp.classList.add('hide');
    btnDw.classList.remove('hide');
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
        btnUp.classList.remove('hide');
        btnDw.classList.add('hide');
    }, 300);
})

///////////////////////////////////////////////////////////

// Tela 3:

// Botão confirmar

const confirmBtn2Up = document.getElementById('conf-2-up');
const confirmBtn2Dw = document.getElementById('conf-2-dw');
const nickInput = document.getElementById('nick');
const confirmArea = document.getElementById('confirm-area');

nickInput.addEventListener('input', () => {
    if (nickInput.value.length == 3) {
        confirmBtn2Up.classList.remove('hide');
        confirmBtn2Dw.classList.add('hide');
    }
});

confirmArea.addEventListener('click', () => {
    confirmBtn2Up.classList.add('hide')
    confirmBtn2Dw.classList.remove('hide')
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
        confirmBtn2Up.classList.remove('hide')
        confirmBtn2Dw.classList.add('hide')
    }, 300)
})

