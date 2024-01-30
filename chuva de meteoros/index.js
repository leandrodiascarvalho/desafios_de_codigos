// Import the 'readline' module to handle user input.
const readline = require('readline');

// Create an interface for reading input from the user and writing output to the console.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Define a dictionary containing meteor showers for each trimester.
const meteorosPorTrimestre = {
    1: "Alfa Centaurideos começa em 03/01 e termina em 05/01\nGama Normídeos começa em 17/02 e termina em 20/02\nPi Pupídeos começa em 25/03 e termina em 29/03",
    2: "Líridas começa em 23/05 e termina em 26/05\nEta Aquáridas começa em 31/05 e termina em 02/06\nBootídeos de Junho começa em 16/06 e termina em 20/06",
    3: "Eta Líridas começa em 19/08 e termina em 22/08\nAlfa Capricornídeos começa em 13/09 e termina em 17/09",
    4: "Delta Aquáridas do Sul começa em 11/10 e termina em 15/10\nPiscis Austrinídeos começa em 04/12 e termina em 08/12\nPerseidas começa em 27/12 e termina em 31/12"
};
// Function to determine the meteor showers for the given month.

function getChuvasDeMeteoros(mes_atual) {
    let trimestre = Math.floor(mes_atual / 3) + 1;
    return meteorosPorTrimestre[trimestre] || "Nenhuma chuva de meteoro no período informado";
}
// Ask the user to input the current month (0-11).
rl.question('Por favor, insira o mês atual (0-11): ', (mes_atual) => {
  // Display the meteor showers for the corresponding trimester.6
    console.log("As chuvas de meteoros do trimestre são:\n\n" + getChuvasDeMeteoros(parseInt(mes_atual)));
    rl.close();
});
