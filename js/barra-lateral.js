
export function configuraBarraLateral() {
    let btnAbrirMenu = document.getElementById("btn-abrir-menu");
    let btnFecharMenu = document.getElementById("btn-fechar-menu");
    let navBar = document.getElementById('nav-principal');
    let container = document.getElementById('container-pagina');
    let disabilitaScroll = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
    navBar.classList.add('invisivel-mobile');
    btnAbrirMenu.addEventListener('click', () => {
        navBar.addEventListener('wheel', disabilitaScroll);
        btnAbrirMenu.classList.add('invisivel-mobile');
        btnFecharMenu.classList.remove('invisivel-mobile');
        navBar.classList.remove("invisivel-mobile");
        // container.classList.add("invisivel-mobile");
    });
    btnFecharMenu.addEventListener('click', () => {
        navBar.removeEventListener('wheel', disabilitaScroll);
        btnAbrirMenu.classList.remove('invisivel-mobile');
        btnFecharMenu.classList.add('invisivel-mobile');
        navBar.classList.add("invisivel-mobile");
        // container.classList.remove("invisivel-mobile");
    });
}