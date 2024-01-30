function getMeteorosTrimestreUm() {
  return "Alfa Centaurideos começa em 03/01 e termina em 05/01\nGama Normídeos começa em 17/02 e termina em 20/02\nPi Pupídeos começa em 25/03 e termina em 29/03";
}

function getMeteorosTrimestreUm() {
  return "Alfa Centaurideos começa em 03/01 e termina em 05/01\nGama Normídeos começa em 17/02 e termina em 20/02\nPi Pupídeos começa em 25/03 e termina em 29/03";
}

function getMeteorosTrimestreDois() {
  return "Líridas começa em 23/05 e termina em 26/05\nEta Aquáridas começa em 31/05 e termina em 02/06\nBootídeos de Junho começa em 16/06 e termina em 20/06";
}

function getMeteorosTrimestreTres() {
  return "Eta Líridas começa em 19/08 e termina em 22/08\nAlfa Capricornídeos começa em 13/09 e termina em 17/09";
}

function getMeteorosTrimestreQuatro() {
  return "Delta Aquáridas do Sul começa em 11/10 e termina em 15/10\nPiscis Austrinídeos começa em 04/12 e termina em 08/12\nPerseidas começa em 27/12 e termina em 31/12";
}

function getChuvasDeMeteoros(mes_atual) {
  if (mes_atual >= 0 && mes_atual <= 2) {
      return getMeteorosTrimestreUm();
  } else if (mes_atual >= 3 && mes_atual <= 5) {
      return getMeteorosTrimestreDois();
  } else if (mes_atual >= 6 && mes_atual <= 8) {
      return getMeteorosTrimestreTres();
  } else if (mes_atual >= 9 && mes_atual <= 11) {
      return getMeteorosTrimestreQuatro();
  } else {
      return "Nenhuma chuva de meteoro no período informado";
  }
}

let data_atual = new Date();
let mes_atual = data_atual.getMonth();
console.log("As chuvas de meteoros do trimestre são:\n\n" + getChuvasDeMeteoros(mes_atual));
