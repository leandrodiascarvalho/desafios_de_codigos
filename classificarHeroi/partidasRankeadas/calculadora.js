/*Calculadora de partidas Rankeadas
**O Que deve ser utilizado**
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**" */

// Função que calcula o nível do jogador com base nas vitórias e derrotas
function calcularNivel(vitorias, derrotas) {
  const saldo = vitorias - derrotas;

  const niveis = [
    "Ferro",
    "Bronze",
    "Prata",
    "Ouro",
    "Diamante",
    "Lendário",
    "Imortal",
  ];
  const limitesVitorias = [10, 20, 50, 80, 90, 100];

  for (let i = 0; i < limitesVitorias.length; i++) {
    if (vitorias < limitesVitorias[i]) {
      return niveis[i];
    }
  }

  return niveis[niveis.length - 1]; // Se nenhuma condição anterior for atendida, retorna o último nível (Imortal)
}

// Função principal
function main() {
  // Solicita a entrada do usuário
  const vitorias = 50;
  const derrotas = 15;

  // Chama a função para calcular o nível
  const nivel = calcularNivel(vitorias, derrotas);

  // Exibe o resultado
  console.log(
    `O Herói tem um saldo de ${vitorias - derrotas} está no nível de ${nivel}`
  );
}

// Chama a função principal
main();
