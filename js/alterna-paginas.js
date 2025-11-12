export function configuraAlternaPaginas() {
    selecionaElemento(document.getElementById("nav-item-1"));
    document.getElementById("nav-principal-menu")
        .addEventListener("click", (event) => {
            selecionaElemento(event.target);
        });
}
function selecionaElemento(target) {
    let sobreMim = document.getElementById("sobre-mim");
    let formacao = document.getElementById("formacao");
    let portfolio = document.getElementById("portfolio");
    let contato = document.getElementById("contato");
    let navItems = [document.getElementById("nav-item-1"), document.getElementById("nav-item-2"), document.getElementById("nav-item-3"), document.getElementById("nav-item-4")];
    if (target.id == 'nav-principal-menu') {
        return;
    }
    sobreMim.hidden = target.id !== 'nav-item-1';
    formacao.hidden = target.id !== 'nav-item-2';
    portfolio.hidden = target.id !== 'nav-item-3';
    contato.hidden = target.id !== 'nav-item-4';
    console.log(target.id);
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
            element.style.backgroundColor = "#f1f1f1ff";
        } else {
            element.style.backgroundColor = "#ffffff00";
        }
    });
}