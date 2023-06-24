function addModalEmail() {
    return `
    <dialog id="modal-email">
        <div class="modal-email">
            <div class="modal">
                <header class="modal-header">
                    <div class="title">
                        <img src="./assets/check-circle.svg" alt="Icone check">
                        <h3 class="modal-title">E-mail cadastrado com sucesso!</h3>
                    </div>                    
                    <img src="./assets/close-modal.svg" alt="Close modal" class="btn-close">
                </header>
                <div class="email-infos">
                    <p>Em breve você receberá novidades exclusivas da Meteora.</p>
                </div>
            </div>
        </div>
    </dialog>`;
}
export function openModalEmail() {
    const modalContainer = document.getElementById("modal");
    modalContainer.innerHTML = addModalEmail();
    const modal = document.getElementById('modal-email');
    modal.showModal();
    const btnCloseModal = document.querySelector('.btn-close');
    btnCloseModal.addEventListener('click', () => modal.close());
}
