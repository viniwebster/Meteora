import { openModalEmail } from "./view/email.js";
import { toggleMenuMobile } from "./view/menu-mobile.js";
import { openModal } from "./view/modal.js";

const btnsProdutos = document.querySelectorAll('.btn-produto');
btnsProdutos.forEach(btn => btn.addEventListener('click', () => openModal(btn)));

const formEmail = document.getElementById('form-email') as HTMLFormElement;
formEmail.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault();
    openModalEmail();
})

const menuMobile = document.querySelectorAll('.menu-mobile');
menuMobile.forEach(btnMenu => btnMenu.addEventListener('click', ()=> toggleMenuMobile()));

