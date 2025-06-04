const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:  "Durante uma aula sobre ética e tecnologia, você descobre que a IA pode ser usada para criar deepfakes (imagens ou vídeos falsos). Qual é a sua reação inicial?",
        alternativas: [
            {
                texto: "Isso é preocupante!",
                afirmacao: "Considera que o uso de deepfakes pode causar desinformação e prejudicar pessoas,"
            },
            {
                texto: "Isso é interessante!",
                afirmacao: "Vê o potencial criativo da tecnologia, mas reconhece que ela precisa ser usada com responsabilidade,"
                
            }
        ]
    },
    {
        enunciado: "Sua escola propõe um projeto para ensinar crianças a usarem ferramentas de IA de forma ética. Como você decide contribuir?",
        alternativas: [
            {
                texto: "Crio um guia simples explicando como usar IA de forma segura e responsável.",
                afirmacao: "querendo ajudar as crianças a entenderem os benefícios e os riscos da IA."
            },
            {
                texto: "Organizo uma oficina prática para mostrar como usar ferramentas de IA no dia a dia.",
                afirmacao: "preferindo ensinar na prática, mostrando exemplos reais de como a IA pode ser útil."
            }
        ]
    },
    {
        enunciado: "Em um debate na escola, surge a questão de como a IA pode impactar a privacidade das pessoas. Qual é o seu posicionamento?",
        alternativas: [
            {
                texto: "Defendo que é necessário criar leis mais rígidas para proteger os dados pessoais.",
                afirmacao: "Acredita que a privacidade deve ser uma prioridade no desenvolvimento de tecnologias."
            },
            {
                texto: "Acho que as pessoas precisam aprender a proteger seus próprios dados.",
                afirmacao: "Acredita que a educação digital é a melhor forma de lidar com os riscos à privacidade."
            }
        ]
    },
    {
        enunciado: "Durante uma aula de artes, a professora sugere usar IA para criar uma obra digital. Como você decide participar?",
        alternativas: [
            {
                texto: "Uso uma ferramenta de IA para gerar ideias e criar uma obra única.",
                afirmacao: "Gosta de explorar novas tecnologias para expandir sua criatividade."
            },
            {
                texto: "Prefiro criar algo manualmente, mas uso a IA como inspiração.",
               afirmacao: "Valoriza o trabalho manual, mas reconhece o potencial da IA como ferramenta auxiliar."
            }
        ]
    },
    {
        enunciado: "Após assistir a um documentário sobre o impacto da IA no meio ambiente, você decide agir. O que você faz?",
        alternativas: [
            {
                texto: "Pesquiso como a IA pode ser usada para monitorar e proteger o meio ambiente.",
                afirmacao: "Julga que a tecnologia pode ser uma aliada na preservação ambiental."
            },
            {
                texto: "Participo de campanhas para conscientizar as pessoas sobre o impacto ambiental da tecnologia.",
                afirmacao: "Prefere focar na educação e na mobilização social para promover mudanças."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
