import fs from "fs";

export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}

export interface Options {
  fileContent: string;
  fileDestination: string;
  fileName: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() {
    // dependency injection DP
  }

  execute({ fileContent, fileDestination, fileName }: Options): boolean {
    try {
      // const outputPath = "outputs";
      fs.mkdirSync(fileDestination, { recursive: true }); // Ensure the directory exists
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
      console.log(
        `File saved successfully at ${fileDestination}/${fileName}.txt`
      );
      return true; // Indicate success
    } catch (error) {
      console.error("Error saving file:", error);
      return false; // Indicate failure
    }
  }
}
