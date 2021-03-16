//const path = require("path");
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
  const partidosByYear = BuscarByYear(1877);

  console.log(partidosByYear);
});

function BuscarByYear(year) {
  let yearRegExp = new RegExp(`${year}-\\d{2}-\\d{2}`);
  return partidos.filter((partido) => {
    // console.log(partido);
    return yearRegExp.test(partido);
  });
}
