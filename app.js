// Tela 1 - Pinball
// Botão verde:

const greenBtnUp = document.getElementById('green-up');
const greenBtnDw = document.getElementById('green-dw');
const areaGreen = document.querySelector('.area-green');

areaGreen.addEventListener('touchstart', (e) => {
    e.preventDefault();
    greenBtnUp.classList.add('hide');
    greenBtnDw.classList.remove('hide');
});

areaGreen.addEventListener('touchend', (e) => {
    e.preventDefault();
    greenBtnUp.classList.remove('hide');
    greenBtnDw.classList.add('hide');
});

// areaGreen.addEventListener('click', () => {
//     greenBtnUp.classList.toggle('hide');
//     greenBtnDw.classList.toggle('hide');
//     setTimeout(() => {
//         greenBtnUp.classList.remove('hide');
//         greenBtnDw.classList.add('hide');
//     }, 300)
// });

// Botão roxo esquerdo:

const purpleLeftUp = document.getElementById('left-up');
const purpleLeftDw = document.getElementById('left-dw');
const areaPurpleLeft = document.querySelector('.area-purple-left');

areaPurpleLeft.addEventListener('touchstart', (e) => {
    e.preventDefault();
    purpleLeftUp.classList.add('hide');
    purpleLeftDw.classList.remove('hide');
});

areaPurpleLeft.addEventListener('touchend', (e) => {
    e.preventDefault();
    purpleLeftUp.classList.remove('hide');
    purpleLeftDw.classList.add('hide');
});

// areaPurpleLeft.addEventListener('click', () => {
//     purpleLeftUp.classList.toggle('hide');
//     purpleLeftDw.classList.toggle('hide');
//     setTimeout(() => {
//         purpleLeftUp.classList.remove('hide');
//         purpleLeftDw.classList.add('hide');
//     }, 300);
// });

// Botão roxo direito: 

const purpleRightUp = document.getElementById('right-up');
const purpleRightDw = document.getElementById('right-dw');
const areaPurpleRight = document.querySelector('.area-purple-right');

areaPurpleRight.addEventListener('touchstart', (e) => {
    e.preventDefault();
    purpleRightUp.classList.add('hide');
    purpleRightDw.classList.remove('hide');
});

areaPurpleRight.addEventListener('touchend', (e) => {
    e.preventDefault();
    purpleRightUp.classList.remove('hide');
    purpleRightDw.classList.add('hide');
});

// areaPurpleRight.addEventListener('click', () => {
//     purpleRightUp.classList.toggle('hide');
//     purpleRightDw.classList.toggle('hide');
//     setTimeout(() => {
//         purpleRightUp.classList.remove('hide');
//         purpleRightDw.classList.add('hide');
//     }, 300);
// });

// Tela 2 - Confirmar

const confirmUp = document.getElementById('conf-up');
const confirmDw = document.getElementById('conf-dw');
const confirmArea = document.querySelector('.confirm-area');
const nicknameInput = document.getElementById('nick');

nicknameInput.addEventListener('input', () => {
    if (nicknameInput.value.length == 3) {
        confirmUp.classList.remove('hide');
        confirmDw.classList.add('hide');
    }
});

confirmArea.addEventListener('click', () => {
    if (confirmDw.classList.contains('hide')) {
        confirmUp.classList.add('hide');
        confirmDw.classList.remove('hide');
        setTimeout(() => {
            confirmUp.classList.remove('hide');
            confirmDw.classList.add('hide');
        }, 300);
    }
});
