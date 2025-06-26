import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .option("base", {
    alias: "b",
    type: "number",
    demandOption: true,
    describe: "Base de la tabla de multiplicar",
  })
  .option("limit", {
    alias: "l",
    type: "number",
    default: 10,
    describe: "Límite de la tabla",
  })
  .option("show", {
    alias: "s",
    type: "boolean",
    default: false,
    describe: "Mostrar la tabla en consola",
  })
  .option("print", {
    alias: "p",
    type: "boolean",
    default: false,
    describe: "imprimir tabla",
  })
  .option("destination", {
    alias: "d",
    type: "string",
    default: "outputs",
    describe: "Directorio de destino para guardar el archivo",
  })
  .option("fileName", {
    alias: "f",
    type: "string",
    default: "archivo-table",
    describe: "Nombre del archivo a guardar",
  })
  .check((argv, options) => {
    //tiene que se un número y ademas positivo
    if (isNaN(argv.base) || argv.base < 0)
      throw new Error(
        "La base debe ser un número y ademas  ser un valor positivo"
      );
    //tiene que ser un número y ademas positivo
    if (isNaN(argv.limit) || argv.limit < 0)
      throw new Error(
        "El límite debe ser un número y ademas ser un valor positivo"
      );

    // ⚠️ Validación de flags sin --print
    const userPassedFileName =
      process.argv.includes("--fileName") || process.argv.includes("-f");
    const userPassedDestination =
      process.argv.includes("--destination") || process.argv.includes("-d");

    if (!argv.print && (userPassedFileName || userPassedDestination)) {
      throw new Error(
        "⚠️ Atención:\nHas especificado '--fileName' o '--destination', pero no activaste el flag '--print'.\nEstas opciones serán ignoradas si no usas '--print' (o '-p')."
      );
    }

    return true; //retorna true si todo está bien
  })
  .parseSync();
//
