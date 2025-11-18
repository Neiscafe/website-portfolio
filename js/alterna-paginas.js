export function configuraAlternaPaginas() {
    let navBar = document.getElementById('nav-principal');
    let containerPagina = document.getElementById('container-pagina');
    let btnAbrirMenu = document.getElementById("btn-abrir-menu");
    let btnFecharMenu = document.getElementById("btn-fechar-menu");
    let navItems = [document.getElementById("nav-item-1"), document.getElementById("nav-item-2"), document.getElementById("nav-item-3"), document.getElementById("nav-item-4")];
    let paginas = [document.getElementById("sobre-mim"), document.getElementById("formacao"), document.getElementById("portfolio"), document.getElementById("contato")];
    let campoEmail = document.getElementById("campo-email");
    let campoMsg = document.getElementById("campo-msg");
    navBar.classList.add('invisivel');
    document.getElementById("contato-submit").addEventListener('click', (event) => {
        onButtonClick(event.target, campoEmail, campoMsg);
    });
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
    selecionaElemento(navItems, paginas, navItems[0]);
}
function selecionaElemento(navItems, paginas, target) {
    if (target == null || target.id == 'nav-principal-menu') {
        console.log("returning");
        console.log("target "+target);
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
            console.log("selecionado "+i);
            element.classList.add('nav-bt-selecionado');
        } else {
            element.classList.remove('nav-bt-selecionado');
        }
    });
    paginas.forEach(function (element, i) {
        if (i == iSelecionado) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}
async function onButtonClick(target, campoEmail, campoMsg) {
    target.disabled = true;
    target.value = 'Carregando...';
    campoEmail.disabled = true;
    campoMsg.disabled = true;
    await new Promise(r => setTimeout(r, 1500));
    target.value = 'Enviado!';
    await new Promise(r => setTimeout(r, 1000));
    target.value = 'Enviar';
    campoEmail.disabled = false;
    campoMsg.disabled = false;
    target.disabled = false;
}