import { configuraAlternador } from "./alterna-tema.js";
import { gerenciaFormMensagem } from "./gerencia-form-mensagem.js";
import { gerenciaMenu } from "./gerencia-menu.js";

document.addEventListener('DOMContentLoaded', () => {
    configuraAlternador();
    gerenciaFormMensagem();
    gerenciaMenu();
})