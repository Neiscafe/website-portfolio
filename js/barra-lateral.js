
export function configuraBarraLateral() {
    let btnAbrirMenu = document.getElementById("btn-abrir-menu");
    let btnFecharMenu = document.getElementById("btn-fechar-menu");
    let navBar = document.getElementById('nav-principal');
    let container = document.getElementById('container-pagina');
    navBar.classList.add('invisivel-mobile');
    btnAbrirMenu.addEventListener('click', () => {
        btnAbrirMenu.hidden = true;
        btnFecharMenu.hidden = false;
        navBar.classList.remove("invisivel-mobile");
        container.classList.add("invisivel-mobile");
    });
    btnFecharMenu.addEventListener('click', () => {
        btnFecharMenu.hidden = true;
        btnAbrirMenu.hidden = false;
        navBar.classList.add("invisivel-mobile");
        container.classList.remove("invisivel-mobile");
    });
}