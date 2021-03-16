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
  const partidosMexico1 = partidosHomeDeMexico();
  console.log(partidosMexico1);

  const partidosMexico2 =   partidosAwayDeMexico();
  console.log(partidosMexico2);

});

function partidosHomeDeMexico() {
  let paisHomeTeamRegExp = new RegExp(`\\d{4}-\\d{2}-\\d{2},Mexico,[A-Za-z ]*`);

  return partidos.filter((partido) =>{
    return paisHomeTeamRegExp.test(partido);
  });
}
function partidosAwayDeMexico(){
let paisAwayTeamRegExp = new RegExp(`\\d{4}-\\d{2}-\\d{2},[A-Za-z ]*,Mexico`);

return partidos.filter((partido) =>{
    return paisAwayTeamRegExp.test(partido);
  });
}
