//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
const posicaoInicial = parseInt(gets()); //2
const totalPassos = parseInt(gets());    //3

//TODO: Calcule a posição final do herói:
const posicaoFinal = posicaoInicial + totalPassos;
//verifica a posicao inicial e os totalPassos

if (posicaoInicial == 2 && totalPassos == 3) {
  print("Posicao final do heroi:", posicaoFinal);
} else if (posicaoInicial == 15 && totalPassos == 3) {
  print("Posicao final do heroi:", posicaoFinal);
} else {
  print("Posicao final do heroi:", posicaoFinal);
}
// Imprime a posição final
//print("Posicao final do heroi:", posicaoFinal);
