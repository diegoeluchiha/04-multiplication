import { SaveFile } from "./save-file.use-case";
import fs from "fs";

describe("SaveFile Use Case", () => {
  const options = {
    fileContent: "This is a test content",
    fileDestination: "test-outputs",
    fileName: "table",
  };
  const filePath = `${options.fileDestination}/${options.fileName}.txt`;

  beforeAll(() => {
    // Ensure the test directory is clean before running tests
    const testDir = "test-outputs";
    if (fs.existsSync(testDir)) {
      fs.rmSync(testDir, { recursive: true });
    }
  });

  afterAll(() => {
    // Clean up after tests
    const testDir = "test-outputs";
    if (fs.existsSync(testDir)) {
      fs.rmSync(testDir, { recursive: true });
    }
  });

  test("should save file successfully", () => {
    const saveFile = new SaveFile();

    const result = saveFile.execute(options);
    expect(result).toBe(true);
    expect(fs.existsSync(filePath)).toBe(true);
    expect(fs.readFileSync(filePath, "utf-8")).toBe(options.fileContent);
  });

  test("should return false if directory could no be created", () => {
    const saveFile = new SaveFile();
    const mkdirSpy = jest.spyOn(fs, "mkdirSync").mockImplementation(() => {
      throw new Error("Directory creation failed");
    });

    const result = saveFile.execute(options);
    expect(result).toBe(false);

    // Clean up the spy
    mkdirSpy.mockRestore();
  });

  test("should return false if file could not be created", () => {
    const saveFile = new SaveFile();

    const writeFileSpy = jest
      .spyOn(fs, "writeFileSync")
      .mockImplementation(() => {
        throw new Error("File creation failed");
      });

    const result = saveFile.execute(options);

    expect(result).toBe(false);
    writeFileSpy.mockRestore(); // Restore the original implementation
  });
});
