export function addModal(btn: Element){

    const nomeProduto = btn.parentNode?.querySelector('.categoria-nome') as HTMLElement;
    const precoProduto = btn.parentNode?.querySelector('.preco') as HTMLElement;;
    const descProduto = btn.parentNode?.querySelector('.produto-desc') as HTMLElement;;
    const imgProduto = btn.parentNode?.parentNode?.querySelector('.img-produto') as HTMLImageElement;

    return `
    <dialog>
    <div class="modal-container">
    <div class="modal">
        <header class="modal-header">
            <div class="title">
                <img src="./assets/check-circle.svg" alt="Icone check">
                <h3 class="modal-title">Confira detalhes sobre o produto</h3>
            </div>                    
            <img class="btn-close" src="./assets/close-modal.svg" alt="Close modal">
        </header>
         
        <div class="modal-infos-container">
            <div class="modal-img">
                <img src="${imgProduto.src}" alt="" srcset="">
            </div>
            <div class="modal-infos-right">
                <div class="modal-infos">
                    <h4 class="produto-title"> ${nomeProduto.textContent} </h4>
                    <p class="produto-desc"> ${descProduto.textContent}</p>

                    <span class="preco"> R$ ${precoProduto.textContent} </span>
                    <span class="infos-entrega">Vendido e entregue por Riachuelo</span>
                </div>  

                <div class="select-container">
                    
                    <span class="select-title">Cores: </span>

                    <div class="cores">
                        <div class="input-check">                  
                            <input type="checkbox" name="cor-um" id="cor-um">
                            <label for="cor-um">Azul claro</label>
                        </div>
                        
                        <div class="input-check"> 
                            <input type="checkbox" name="cor-dois" id="cor-dois">
                            <label for="cor-dois">Offwhite</label>
                        </div>  

                        <div class="input-check"> 
                            <input type="checkbox" name="cor-tres" id="cor-tres">
                            <label for="cor-tres">Preto</label>
                        </div>
                    </div>

                    <span class="select-title">Tamanho: </span>

                    <div class="cores">    
                        
                        <div class="input-check"> 
                            <input type="checkbox" name="p" id="cor-um">
                            <label for="p">P</label>
                        </div>

                        <div class="input-check"> 
                            <input type="checkbox" name="pp" id="cor-dois">
                            <label for="pp">PP</label>
                        </div>


                        <div class="input-check"> 
                            <input type="checkbox" name="m" id="cor-tres">
                            <label for="m">M</label>
                        </div>


                        <div class="input-check"> 
                            <input type="checkbox" name="g" id="cor-tres">
                            <label for="g">G</label>
                        </div>


                        <div class="input-check"> 
                            <input type="checkbox" name="gg" id="cor-tres">
                            <label for="gg">GG</label>
                        </div>
                        
                    </div>

                    <button class="btn"> Adicionar à sacola </button>

                </div>

            </div>
        </div>
    </div> 
    </div>
</dialog>`
}

export function openModal(btn: Element) {
    const modalContainer = document.getElementById("modal") as HTMLElement;
    modalContainer.innerHTML = addModal(btn);

    const modal = document.querySelector('dialog') as HTMLDialogElement;
    modal.showModal();

    const btnCloseModal = document.querySelector('.btn-close') as HTMLDialogElement;
    btnCloseModal.addEventListener('click', () => modal.close());
}