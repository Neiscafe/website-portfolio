export function configuraAlternaPaginas() {
    let navBar = document.getElementById('nav-principal');
    let containerPagina = document.getElementById('container-pagina');
    let btnAbrirMenu = document.getElementById("btn-abrir-menu");
    let btnFecharMenu = document.getElementById("btn-fechar-menu");
    let navItems = [document.getElementById("nav-item-1"), document.getElementById("nav-item-2"), document.getElementById("nav-item-3"), document.getElementById("nav-item-4")];
    let paginas = [document.getElementById("sobre-mim"), document.getElementById("formacao"), document.getElementById("portfolio"), document.getElementById("contato")];
    navBar.classList.add('invisivel');
    btnFecharMenu.addEventListener('click', () => {
        navBar.classList.add("invisivel");
    });
    btnAbrirMenu.addEventListener('click', () => {
        navBar.classList.remove("invisivel");
    });
    document.getElementById("nav-principal-menu").addEventListener("click", (event) => {
        selecionaElemento(navItems, paginas, event.target);
        navBar.classList.add('invisivel');
    });
    selecionaElemento(document.getElementById("nav-item-1"));
}
function selecionaElemento(navItems, paginas, target) {
    if (target.id == 'nav-principal-menu') {
        return;
    }
    let iSelecionado = 0;
    switch (target.id) {
        case 'nav-item-1':
            iSelecionado = 0;
            break;
        case 'nav-item-2':
            iSelecionado = 1;
            break;
        case 'nav-item-3':
            iSelecionado = 2;
            break;
        case 'nav-item-4':
            iSelecionado = 3;
            break;
        default:
            break;
    }
    navItems.forEach(function (element, i) {
        if (i == iSelecionado) {
            element.classList.add('nav-bt-selecionado');
        } else {
            element.classList.remove('nav-bt-selecionado');
        }
    });
    paginas.forEach(function (element, i) {
        if (i == iSelecionado) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // element.classList.remove('invisivel');
        } else {
            // element.classList.add('invisivel');
        }
    });
}