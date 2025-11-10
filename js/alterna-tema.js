export function configuraAlternador() {
    const alternadorTema = document.getElementById('alternador-tema');
    const body = document.body;

    const temaAtual = localStorage.getItem('tema');
    if (temaAtual == 'escuro') {
        alternadorTema.checked = true;
        body.classList.add('modo-escuro');
    }
    alternadorTema.addEventListener('change', () => {
        if (alternadorTema.checked) {
            body.classList.add('modo-escuro');
            localStorage.setItem('tema', 'escuro')
        } else {
            body.classList.remove('modo-escuro');
            localStorage.setItem('tema', 'claro')
        }
    })
}
