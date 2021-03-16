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
  const partidosdeHomecon5Goles = partidosHomeCon5Goles();
  console.log(partidosdeHomecon5Goles);

  const partidosdeAwaycon5Goles =   partidosAwayCon5Goles();
  console.log(partidosdeAwaycon5Goles);

});

function partidosHomeCon5Goles() {
  let HomeTeamCon5RegExp = new RegExp(`\\d{4}-\\d{2}-\\d{2},[A-Za-z ]*,[A-Za-z ]*,5,\\d,`);

  return partidos.filter((partido) =>{
    return HomeTeamCon5RegExp.test(partido);
  });
}
function partidosAwayCon5Goles(){
let AwayTeamCon5RegExp = new RegExp(`\\d{4}-\\d{2}-\\d{2},[A-Za-z ]*,[A-Za-z ]*,\\d,5,`);

return partidos.filter((partido) =>{
    return AwayTeamCon5RegExp.test(partido);
  });
}
