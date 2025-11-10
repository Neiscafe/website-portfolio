import { configuraAlternador } from "./alterna-tema.js";
import { configuraAlternaPaginas } from "./alterna-paginas.js";

document.addEventListener('DOMContentLoaded', () => {
    configuraAlternador();
    configuraAlternaPaginas();
})