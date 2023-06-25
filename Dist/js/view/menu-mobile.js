export function toggleMenuMobile() {
    const menu = document.querySelector('.nav-container');
    menu.style.display == "none" ? menu.style.display = "flex" : menu.style.display = "none";
}
