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
    console.log("Server running...");

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
