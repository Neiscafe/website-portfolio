
export function configuraBarraLateral() {
    let btnAbrirMenu = document.getElementById("btn-abrir-menu");
    let btnFecharMenu = document.getElementById("btn-fechar-menu");
    let navBar = document.getElementById('nav-principal');
    navBar.hidden = btnAbrirMenu.style.display != 'flex'
    btnAbrirMenu.addEventListener('click', () => {
        console.log("click");
        btnAbrirMenu.hidden = true;
        btnFecharMenu.hidden = false;
        navBar.hidden = false;
        // navBar.classList.remove("sidebar-invisivel")
    });
    btnFecharMenu.addEventListener('click', () => {
        btnFecharMenu.hidden = true;
        btnAbrirMenu.hidden = false;
        navBar.hidden = true;
        // let navBar = document.getElementById('nav-principal');
        // navBar.classList.add("sidebar-invisivel")
    });
}