const zonasNPS = [
    'Zona de Excelência - NPS entre 75 e 100: São as empresas que satisfazem seus clientes, atendendo às suas expectativas e garantindo uma boa experiência ao usuário, conquistando consumidores fiéis que recomendam e defendem a marca.',
    'Zona de Qualidade - NPS entre 50 e 74: Empresas qualificadas nessa zona contam com clientes satisfeitos com a marca, mas que ressaltaram pontos que deixaram a desejar. Realizar uma avaliação da jornada do cliente é importante para que a empresa possa identificar possíveis falhas.',
    'Zona de Aperfeiçoamento - NPS entre 0 e 49: Empresas com score de aperfeiçoamento devem ter muita atenção com os feedbacks dos seus clientes. Estar situado nesta zona significa que muitos clientes não tiveram uma boa expperiencia e não ficaram satisfeitos com a empresa. Refazer processos, melhorar estratégias e conhecer melhor as espectativas dos clientes são pontos importantes a serem avaliados.',
    'Zona de Crítica - NPS entre -100 e -1: Empresas classificadas como Zona Crítica devem tomar ações rápidas em relação às suas estratégias. Essa categoria indica que muitos clientes ficaram insatisfeitos com a empresa e que não recomendariam a marca. Eles serão os primeiros a reclamarem, a divulgarem feedbacks negativos sobre suas experiências, podendo engajar uma comunidade de outros clientes.'
];

const respondentes = {
    detratores: 0,
    neutros: 0,
    promotores: 0,
    somaRespondentes() {
        const inputs = document.querySelectorAll('.nps-input');
        inputs.forEach(input => {
            if (input.classList.contains('detrator'))
                this.detratores += +(input.value);
            if (input.classList.contains('neutro'))
                this.neutros += +(input.value);
            if (input.classList.contains('promotor'))
                this.promotores += +(input.value);
        });
    },
    zeraRespondentes() {
        this.detratores = 0;
        this.neutros = 0;
        this.promotores = 0;
    }
};

function calculaNPS() {
    respondentes.somaRespondentes();
    const totalRespondentes = respondentes.detratores + respondentes.neutros + respondentes.promotores;
    const nps = (respondentes.promotores - respondentes.detratores) / totalRespondentes * 100;

    const pontuacao = document.querySelector('#pontuacao');
    const zona = document.querySelector('#zona');

    if (isNaN(nps)) {
        pontuacao.textContent = '-';
        zona.textContent = '';
    } else {
        pontuacao.textContent = nps.toFixed(0);
        if (nps < 0) {
            zona.textContent = zonasNPS[3];
        } else if (nps < 50) {
            zona.textContent = zonasNPS[2];
        } else if (nps < 75) {
            zona.textContent = zonasNPS[1];
        } else {
            zona.textContent = zonasNPS[0];
        }
    }

    respondentes.zeraRespondentes();
};