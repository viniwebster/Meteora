import { openModalEmail } from "./view/email.js";
import { openModal } from "./view/modal.js";
const btnsProdutos = document.querySelectorAll('.btn-produto');
btnsProdutos.forEach(btn => btn.addEventListener('click', () => openModal(btn)));
const formEmail = document.getElementById('form-email');
formEmail.addEventListener('submit', (event) => {
    event.preventDefault();
    openModalEmail();
});
