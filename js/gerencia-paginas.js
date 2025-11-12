import { configuraAlternador } from "./alterna-tema.js";
import { configuraAlternaPaginas } from "./alterna-paginas.js";
import { configuraBarraLateral } from "./barra-lateral.js";

document.addEventListener('DOMContentLoaded', () => {
    configuraAlternador();
    configuraAlternaPaginas();
    configuraBarraLateral();
})