export function configuraAlternaPaginas() {

    const sobreMim = document.getElementById("sobre-mim");
    const formacao = document.getElementById("formacao");
    const portfolio = document.getElementById("portfolio");
    const contato = document.getElementById("contato");
    const navMenu = document.getElementById("nav-principal-menu");

    sobreMim.checked = true;
    sobreMim.hidden = false;
    formacao.hidden = true;
    portfolio.hidden = true;
    contato.hidden = true;

    navMenu.addEventListener("click", (event) => {
        sobreMim.hidden = event.target.id !== 'nav-item-1'
        formacao.hidden = event.target.id !== 'nav-item-2'
        portfolio.hidden = event.target.id !== 'nav-item-3'
        contato.hidden = event.target.id !== 'nav-item-4'
    });
}