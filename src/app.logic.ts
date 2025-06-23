import fs from "fs";
import { yarg } from "./config/plugins/args.plugin.js";

const message: string = "Hello, World!";
console.log(message);
// console.log(yarg);

//grabar en el archivo de salida outputs/tabla-5.txt
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const valorBase = 5;
// const titulo = `----------------------------
//       tabla del 5
// ----------------------------`;
// const contenedor: string[] = [];
// contenedor.push(titulo);

// console.log(titulo);

// arr.forEach((item) => {
//   console.log(`${valorBase} x ${item} = ${valorBase * item}`);
//   contenedor.push(`${valorBase} x ${item} = ${valorBase * item}`);
// });
// const textoAcumulado = contenedor.join("\n");

// fs.writeFileSync("outputs/tabla-5.txt", textoAcumulado);

//resolucion de fernando herrera
let outputMessage = "";
const { base, limit, print, show } = yarg;
// console.log(show);
const headerMessage = `
===========================
      Tabla del ${base}
===========================
`;

for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

if (show) console.log(outputMessage);

if (print) {
  const outputPath = "outputs";
  fs.mkdirSync(outputPath, { recursive: true }); // Ensure the directory exists
  fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
}
