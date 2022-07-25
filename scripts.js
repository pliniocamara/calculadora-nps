// Variáveis para armazenar quantidade de respondentes em cada categoria
let detratores = 0;
let neutros = 0;
let promotores = 0;

// Array com as Zonas
const zonas = [
    'Zona de Excelência - NPS entre 75 e 100: São as empresas que satisfazem seus clientes, atendendo às suas expectativas e garantindo uma boa experiência ao usuário, conquistando consumidores fiéis que recomendam e defendem a marca.',
    'Zona de Qualidade - NPS entre 50 e 74: Empresas qualificadas nessa zona contam com clientes satisfeitos com a marca, mas que ressaltaram pontos que deixaram a desejar. Realizar uma avaliação da jornada do cliente é importante para que a empresa possa identificar possíveis falhas.',
    'Zona de Aperfeiçoamento - NPS entre 0 e 49: Empresas com score de aperfeiçoamento devem ter muita atenção com os feedbacks dos seus clientes. Estar situado nesta zona significa que muitos clientes não tiveram uma boa expperiencia e não ficaram satisfeitos com a empresa. Refazer processos, melhorar estratégias e conhecer melhor as espectativas dos clientes são pontos importantes a serem avaliados.',
    'Zona de Crítica - NPS entre -100 e -1: Empresas classificadas como Zona Crítica devem tomar ações rápidas em relação às suas estratégias. Essa categoria indica que muitos clientes ficaram insatisfeitos com a empresa e que não recomendariam a marca. Eles serão os primeiros a reclamarem, a divulgarem feedbacks negativos sobre suas experiências, podendo engajar uma comunidade de outros clientes.'
];

// Função principal que calcula o NPS
function calculaNPS() {
    const inputs = document.querySelectorAll('.nps-input');
    inputs.forEach(input => somaRespondentes(input));

    const totalRespondentes = detratores + neutros + promotores;
    const nps = (promotores - detratores) / totalRespondentes * 100;

    const pontuacao = document.querySelector('#pontuacao');
    const zona = document.querySelector('#zona');

    imprimeResultado(nps, pontuacao, zona);

    zeraRespondentes();    
}

// Função auxiliar que soma os respondentes por categoria
function somaRespondentes(input) {
    if (input.className.indexOf('detrator') != -1) {
        detratores += Number(input.value);
    }
    if (input.className.indexOf('neutro') != -1) {
        neutros += Number(input.value);
    }
    if (input.className.indexOf('promotor') != -1) {
        promotores += Number(input.value);
    }
}

// Função auxiliar apenas para zerar os respondentes
function zeraRespondentes() {
    detratores = 0;
    neutros = 0;
    promotores = 0;
}

// Função que imprime o Resultado
function imprimeResultado(nps, pontuacao, zona) {
    if (isNaN(nps)) {
        pontuacao.textContent = '-';
        zona.textContent = '';
    } else {
        pontuacao.textContent = nps.toFixed(0);
        if (nps < 0) {
            zona.textContent = zonas[3];
        } else if (nps < 50) {
            zona.textContent = zonas[2];
        } else if (nps < 75) {
            zona.textContent = zonas[1];
        } else {
            zona.textContent = zonas[0];
        }
    }
}

const button = document.querySelector('#btn-calcular');
button.addEventListener('click', calculaNPS);