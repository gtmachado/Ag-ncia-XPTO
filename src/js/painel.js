/*

    quando clicar na seta para avançar temos que esconder
    todas as imagens e mostrar a proxima imagem

        a imagem atual começa em 0 pq é a primeira imagem
        assim que for clicado no avançar eu preciso adicionar 
        mais 1 ao contador de imagens para saber que agora
        eu vou mostrar a segunda imagem

        esconder todas as imagens
            pegar todas as imagens usando o DOM e remover 
            a classe mostrar

        mostrar a proxima imagem
            pegar todas as imagens, descobrir qual é a proxima 
            e colocar a classe mostrar nela
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}
function mostrarImagens(){
    imagensPainel[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', function () {

    const totalDeImagens = imagensPainel.length - 1;

    if (imagemAtual === 0) {
        setaVoltar.style.opacity = 1;
    }
    if (imagemAtual === totalDeImagens - 1) {
        setaAvancar.style.opacity = 0;
    }
    if (imagemAtual === totalDeImagens) {
        return;
    }

    imagemAtual++;

    esconderImagens();
    mostrarImagens();
    
});

setaVoltar.addEventListener('click', function () {

    if (imagemAtual === 2) {
        setaAvancar.style.opacity = 1;
    }

    if (imagemAtual === 1) {
        setaVoltar.style.opacity = 0;
    }

    if (imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    esconderImagens()
    mostrarImagens();

})