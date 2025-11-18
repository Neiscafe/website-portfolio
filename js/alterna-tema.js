export function configuraAlternador() {
    const alternadorTema = document.getElementById('alternador-tema');
    const body = document.body;

    const temaAtual = localStorage.getItem('tema');
    console.log(temaAtual);
    if (temaAtual == 2) {
        alternadorTema.checked = true;
        body.classList.add('modo-escuro');
    }
    alternadorTema.addEventListener('change', (event) => {
        console.log(event.target.checked);
        if (event.target.checked) {
            body.classList.add('modo-escuro');
            localStorage.setItem('tema', 2)
        } else {
            body.classList.remove('modo-escuro');
            localStorage.setItem('tema', 1)
        }
    })
}
