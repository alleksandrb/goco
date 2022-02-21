
let burger = document.querySelector('.header__burger');

burger.onclick = () => {
    document.querySelector('.header_menu').classList.toggle('dsp');
    burger.classList.toggle('header__burger__close');
    document.querySelector('.header__burger-1').classList.toggle('header__burger-1__close');
    document.querySelector('.header__burger-2').classList.toggle('header__burger-2__close');
    document.querySelector('.header__burger-3').classList.toggle('header__burger-3__close');
}
