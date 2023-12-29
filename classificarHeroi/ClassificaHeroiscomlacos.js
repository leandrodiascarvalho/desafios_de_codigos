function determinarNivel(xp) {
  const intervalos = [1000, 2000, 5000, 7000, 8000, 9000, 10000];
  const niveis = [
    "Ferro",
    "Bronze",
    "Prata",
    "Ouro",
    "Platina",
    "Ascendente",
    "Imortal",
    "Radiante",
  ];

  for (let i = 0; i < intervalos.length; i++) {
    if (xp <= intervalos[i]) {
      return niveis[i];
    }
  }

  return "Radiante";
}

function exibirMensagem(nome, nivel) {
  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}

const nomeHeroi = "Assuma";
const xpHeroi = 10000;

const nivelHeroi = determinarNivel(xpHeroi);
exibirMensagem(nomeHeroi, nivelHeroi);
