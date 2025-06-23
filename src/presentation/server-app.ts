import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
  base: number;
  limit: number;
  print: boolean;
  show: boolean;
  destination: string;
  fileName: string;
}

export class ServerApp {
  static run({ base, limit, show, print, destination, fileName }: RunOptions) {
    console.log("server running... siii");
    // ✅ Validación lógica: opciones sin print
    if (
      !print &&
      (fileName !== "multiplication" || destination !== "outputs")
    ) {
      console.warn(`
        ⚠️ Atención:
        Estás usando --fileName o --destination, pero no activaste el flag --print.
        Estas opciones no se aplicarán sin --print (-p).
      `);
    }
    const table = new CreateTable().execute({
      base,
      limit,
    });

    if (print) {
      const wasCreated = new SaveFile().execute({
        fileContent: table,
        fileDestination: destination,
        fileName: fileName,
      });

      if (wasCreated) {
        console.log("File created successfully.");
      } else {
        console.error("Failed to create file.");
      }
    }

    if (show) {
      console.log(table);
    }
  }
}
