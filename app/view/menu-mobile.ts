export function toggleMenuMobile(){
    const menu = document.querySelector('.nav-container') as HTMLElement;   
    menu.style.display == "none" ? menu.style.display = "flex" : menu.style.display = "none";
}