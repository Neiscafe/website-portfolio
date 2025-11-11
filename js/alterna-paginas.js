export function configuraAlternaPaginas() {
    let navItem1 = document.getElementById("nav-item-1");
    let navItem2 = document.getElementById("nav-item-2");
    let navItem3 = document.getElementById("nav-item-3");
    let navItem4 = document.getElementById("nav-item-4");
    let sobreMim = document.getElementById("sobre-mim");
    let formacao = document.getElementById("formacao");
    let portfolio = document.getElementById("portfolio");
    let contato = document.getElementById("contato");

    navItem1.style.backgroundColor = "#f1f1f1ff";
    navItem2.style.backgroundColor = "#ffffff00";
    navItem3.style.backgroundColor = "#ffffff00";
    navItem4.style.backgroundColor = "#ffffff00";

    formacao.hidden = true;
    portfolio.hidden = true;
    contato.hidden = true;

    document.getElementById("nav-principal-menu")
        .addEventListener("click", (event) => {
        if (event.target.id == 'nav-principal-menu') {
            return;
        }
        sobreMim.hidden = event.target.id !== 'nav-item-1';
        formacao.hidden = event.target.id !== 'nav-item-2';
        portfolio.hidden = event.target.id !== 'nav-item-3';
        contato.hidden = event.target.id !== 'nav-item-4';
        console.log(event.target.id);
        switch (event.target.id) {
            case 'nav-item-1':
                navItem1.style.backgroundColor = "#f1f1f1ff";
                navItem2.style.backgroundColor = "#ffffff00";
                navItem3.style.backgroundColor = "#ffffff00";
                navItem4.style.backgroundColor = "#ffffff00";
                break;
            case 'nav-item-2':
                navItem1.style.backgroundColor = "#ffffff00";
                navItem2.style.backgroundColor = "#f1f1f1ff";
                navItem3.style.backgroundColor = "#ffffff00";
                navItem4.style.backgroundColor = "#ffffff00";
                break;
            case 'nav-item-3':
                navItem1.style.backgroundColor = "#ffffff00";
                navItem2.style.backgroundColor = "#ffffff00";
                navItem3.style.backgroundColor = "#f1f1f1ff";
                navItem4.style.backgroundColor = "#ffffff00";
                break;
            case 'nav-item-4':
                navItem1.style.backgroundColor = "#ffffff00";
                navItem2.style.backgroundColor = "#ffffff00";
                navItem3.style.backgroundColor = "#ffffff00";
                navItem4.style.backgroundColor = "#f1f1f1ff";
                break;
            default:
                break;
        }
    });
}