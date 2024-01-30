function notas_bimestrais() {
  let notas_bimestrais = [7, 6, 8, 5, 8,9];
  let soma_notas = 0;

  for (let i = 0; i < notas_bimestrais.length; i++) {
    soma_notas += notas_bimestrais[i];
  }

  let media = (soma_notas / notas_bimestrais.length).toFixed(2);
  console.log("Média é " + media);
}

notas_bimestrais();
