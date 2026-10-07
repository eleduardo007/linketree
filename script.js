//Variável com texto "Sobre Mim"
const textoSobreMim = `Olá! Prazer em conhecer; ;D Meu nome é Eduardo Luís.

Trabalho com Tecnologia da Informação e Desenvolvimento de Software, explorando também outras áreas que fazem parte do meu lado criativo, como escrita e ilustração digital.

Tenho bastante interesse por tudo que envolve criatividade e criação de mundos. Gosto de desenvolver narrativas, explorar universos de RPG, criar personagens e ideias, além de me aventurar em diferentes projetos que misturam tecnologia e imaginação.

Fora do mundo digital, também gosto de atividades ao ar livre, buscando novas experiências e inspirações.

Se você gosta de tecnologia, histórias, arte e criação, fique à vontade para conhecer um pouco mais do meu trabalho. Quem sabe você não encontra algo que desperte a sua curiosidade?

Clique na aba CONTATOS e saiba mais! =)`

let escrevendo = false;
let intervalo;

//Função do botão "Sobre Mim"
function mostrarSobreMim() {

    const caixa = document.getElementById("sobre-mim");

    if (caixa.style.display === "none" || caixa.style.display === "") {
        caixa.style.display = "block";

        // Evita iniciar outra animação enquanto uma já está acontecendo
        if (escrevendo) return;
        escrevendo = true;
        caixa.textContent = "";

        let i = 0;

        intervalo = setInterval(() => {
            caixa.textContent += textoSobreMim.charAt(i);
            i++;
            if (i >= textoSobreMim.length) {
                clearInterval(intervalo);
                escrevendo = false;
            }

        }, 30);

    } else {

        caixa.style.display = "none";

        clearInterval(intervalo);
        escrevendo = false;
    }
}

//Função do botão "Contatos"
function mostrarContatos() {
    const contatos = document.getElementById("contatos");

    if (contatos.style.display === "none") {
        contatos.style.display = "block";
    } else {
        contatos.style.display = "none";
    }
}

function ativar() {
    alert("Cor do nome alterado.");
    const cor = `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;
    document.getElementById("nomeproprio").style.color = cor;
    }