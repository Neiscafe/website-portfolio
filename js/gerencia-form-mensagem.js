export function gerenciaFormMensagem() {
    let campoEmail = document.getElementById("campo-email");
    let campoMsg = document.getElementById("campo-msg");
    let campoNome = document.getElementById("campo-nome");
    let erroForm = document.getElementById("erro-form");
    let modal = document.getElementById("modal");
    document.getElementById("contato-submit").addEventListener('click', (event) => {
        simulaEnvioMensagem(event.target, campoEmail, campoMsg, campoNome, erroForm, modal);
    });
}
async function simulaEnvioMensagem(target, campoEmail, campoMsg, campoNome, erroForm, modal) {
    if (campoEmail.value.length <= 0) {
        erroForm.textContent = "Preencha o campo E-MAIL!";
        return;
    }
    if (!campoEmail.value.includes('@')) {
        erroForm.textContent = "Email inválido!";
        return;
    }
    if (campoNome.value.length <= 0) {
        erroForm.textContent = "Preencha o campo NOME!";
        return;
    }
    if (campoMsg.value.length < 10) {
        erroForm.textContent = "Mensagem pequena demais!";
        return;
    }
    erroForm.textContent = "";
    target.disabled = true;
    target.value = 'Carregando...';
    campoEmail.disabled = true;
    campoMsg.disabled = true;
    campoNome.disabled = true;
    await new Promise(r => setTimeout(r, 1500));
    document.getElementById("modal-msg").textContent = "Mensagem enviada! Aguarde até cinco dias úteis para uma resposta.";
    modal.style.display = 'block';
    await new Promise(r => setTimeout(r, 3000));
    modal.style.display = "none";
    target.value = 'Enviar';
    target.style.background = '#007bff';
    campoEmail.value = "";
    campoNome.value = "";
    campoMsg.value = "";
    campoEmail.disabled = false;
    campoNome.disabled = false;
    campoMsg.disabled = false;
    target.disabled = false;
}