'use strict';

const callToActionBtns = document.querySelectorAll('.columns__img');

callToActionBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const currentBtn =
        e.target.parentElement.parentElement;
        currentBtn.classList.toggle('hide');
    });
});
