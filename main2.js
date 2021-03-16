// const path = require("path");
//const csv = require("csv-parser");
const fs = require("fs");
const readline = require("readline");
const partidos = [];
let headerCSV;
let lineNumber = 0;


const readInterface = readline.createInterface({
  input: fs.createReadStream("prueba.csv"),
  // output: process.stdout,
  console: false,
});
readInterface.on("line", function (line) {
  //console.log(line);
  if (lineNumber == 0) {
    headerCSV = line;
  } else {
    partidos.push(line);
  }
  lineNumber++;
});
readInterface.on("close", function () {
  // console.log("Archivo Cargado");
  //   const partidosByYear = BuscarByYear(1877);
  const partidosHonduras1 = partidosHomeDeHonduras();
  console.log(partidosHonduras1);

  const partidosHonduras2 =   partidosAwayDeHonduras();
  console.log(partidosHonduras2);

});

function partidosHomeDeHonduras() {
  let paisHomeTeamRegExp = new RegExp(`\\d{4}-\\d{2}-\\d{2},Honduras,[A-Za-z ]*`);

  return partidos.filter((partido) =>{
    return paisHomeTeamRegExp.test(partido);
  });
}
function partidosAwayDeHonduras(){
let paisAwayTeamRegExp = new RegExp(`\\d{4}-\\d{2}-\\d{2},[A-Za-z ]*,Honduras`);

return partidos.filter((partido) =>{
    return paisAwayTeamRegExp.test(partido);
  });
}
