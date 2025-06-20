import fs from "fs";

const message: string = "Hello, World!";
console.log(message);

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
const base = 5;
const headerMessage = `
===========================
      Tabla del ${base}
===========================
`;

for (let i = 1; i <= 10; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;
console.log(outputMessage);
const outputPath = "outputs";
fs.mkdirSync(outputPath, { recursive: true }); // Ensure the directory exists
fs.writeFileSync(`${outputPath}/tabla-5.txt`, outputMessage);
