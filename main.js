const numeroSenha = document.querySelector('.parametro-senha__botao');
let tamanhoSenha = 12
numeroSenha.textContent = tamanhoSenha;

const botoes = Document.querySelectorALll('.parametro-senha_botao');

botoes[0].onclick = DiminuiTamanho;

function DiminuiTamanho(){
    if (tamanhoSenha.1){
       tamanhoSenha = tamanhoSenha - 1;
    }
    
    numeroSenha.textoContent = temanhoSenha;
}