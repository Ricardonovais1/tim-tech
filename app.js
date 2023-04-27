// Tela 1 - Pinball

// Botão single player:

const singleUp = document.getElementById('single-up');
const singleDw = document.getElementById('single-dw');
const areaSingle = document.querySelector('.area-single');

areaSingle.addEventListener('touchstart', (e) => {
    e.preventDefault();
    singleUp.classList.add('hide');
    singleDw.classList.remove('hide');
});

areaSingle.addEventListener('touchend', (e) => {
    e.preventDefault();
    singleUp.classList.remove('hide');
    singleDw.classList.add('hide');
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
