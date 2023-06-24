export function addModal(btn) {
    var _a, _b, _c, _d, _e;
    const nomeProduto = (_a = btn.parentNode) === null || _a === void 0 ? void 0 : _a.querySelector('.categoria-nome');
    const precoProduto = (_b = btn.parentNode) === null || _b === void 0 ? void 0 : _b.querySelector('.preco');
    ;
    const descProduto = (_c = btn.parentNode) === null || _c === void 0 ? void 0 : _c.querySelector('.produto-desc');
    ;
    const imgProduto = (_e = (_d = btn.parentNode) === null || _d === void 0 ? void 0 : _d.parentNode) === null || _e === void 0 ? void 0 : _e.querySelector('.img-produto');
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

                    <span class="preco"> ${precoProduto.textContent} </span>
                    <span class="infos-entrega">Vendido e entregue por Riachuelo</span>
                </div>  

                <div class="select-container">
                    
                    <span class="select-title">Cores: </span>

                    <div class="cores">
                        <div class="input-check">                  
                            <input type="radio" name="cores" id="cor-um">
                            <label for="cor-um">Azul claro</label>
                        </div>
                        
                        <div class="input-check"> 
                            <input type="radio" name="cores" id="cor-dois">
                            <label for="cor-dois">Offwhite</label>
                        </div>  

                        <div class="input-check"> 
                            <input type="radio" name="cores" id="cor-tres">
                            <label for="cor-tres">Preto</label>
                        </div>
                    </div>

                    <span class="select-title">Tamanho: </span>

                    <div class="cores">    
                        
                        <div class="input-check"> 
                            <input type="radio" name="tamanhos" id="p">
                            <label for="p">P</label>
                        </div>

                        <div class="input-check"> 
                            <input type="radio" name="tamanhos" id="pp">
                            <label for="pp">PP</label>
                        </div>


                        <div class="input-check"> 
                            <input type="radio" name="tamanhos" id="m">
                            <label for="m">M</label>
                        </div>


                        <div class="input-check"> 
                            <input type="radio" name="tamanhos" id="g">
                            <label for="g">G</label>
                        </div>


                        <div class="input-check"> 
                            <input type="radio" name="tamanhos" id="gg">
                            <label for="gg">GG</label>
                        </div>
                        
                    </div>

                    <button class="btn"> Adicionar à sacola </button>

                </div>

            </div>
        </div>
    </div> 
    </div>
</dialog>`;
}
export function openModal(btn) {
    const modalContainer = document.getElementById("modal");
    modalContainer.innerHTML = addModal(btn);
    const modal = document.querySelector('dialog');
    modal.showModal();
    const btnCloseModal = document.querySelector('.btn-close');
    btnCloseModal.addEventListener('click', () => modal.close());
}
