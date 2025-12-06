export function gerenciaMenu() {
    let navBar = document.getElementById('nav-principal');
    let btnAbrirMenu = document.getElementById("btn-abrir-menu");
    let btnFecharMenu = document.getElementById("btn-fechar-menu");
    navBar.classList.add('invisivel');

    btnFecharMenu.addEventListener('click', () => {
        navBar.classList.add("invisivel");
    });
    btnAbrirMenu.addEventListener('click', () => {
        navBar.classList.remove("invisivel");
    });
    document.getElementById("nav-principal-menu").addEventListener("click", (event) => {
        navBar.classList.add('invisivel');
    });
}