import { openModal } from "./view/modal.js";

const btnsProdutos = document.querySelectorAll('.btn-produto');

btnsProdutos.forEach(btn => {
    btn.addEventListener('click', () => openModal(btn));
})



