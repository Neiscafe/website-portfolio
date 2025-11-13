
export function configuraBarraLateral() {
    let btnAbrirMenu = document.getElementById("btn-abrir-menu");
    let btnFecharMenu = document.getElementById("btn-fechar-menu");
    let navBar = document.getElementById('nav-principal');
    let disabilitaScroll = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
    navBar.classList.add('invisivel');
    btnFecharMenu.classList.add('invisivel');
    btnAbrirMenu.addEventListener('click', () => {
        // navBar.addEventListener('wheel', disabilitaScroll);
        btnAbrirMenu.classList.add('invisivel');
        btnFecharMenu.classList.remove('invisivel');
        navBar.classList.remove("invisivel");
    });
    btnFecharMenu.addEventListener('click', () => {
        // navBar.removeEventListener('wheel', disabilitaScroll);
        btnAbrirMenu.classList.remove('invisivel');
        btnFecharMenu.classList.add('invisivel');
        navBar.classList.add("invisivel");
    });
}