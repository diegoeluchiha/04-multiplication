// import { yarg } from "./args.plugin";
const runComand = async (args: string[]) => {
  // const originalArgv = process.argv; // Guarda los argumentos originales
  process.argv = [...process.argv, ...args];
  const { yarg } = await import("./args.plugin");

  //restara los argumentos originales
  // process.argv = originalArgv;

  return yarg;
};

describe("Yargs Plugin - Argument Validation", () => {
  const originalArgv = process.argv; // Guarda los argumentos originales
  beforeEach(() => {
    process.argv = [...originalArgv]; // Restaura los argumentos originales antes de cada prueba
    jest.resetModules(); // Resetea los módulos antes de cada prueba
  });

  test("should return default values", async () => {
    const argv = await runComand(["-b", "5"]);
    // console.log(yarg);
    expect(argv).toEqual(
      expect.objectContaining({
        b: 5,
        l: 10,
        s: false,
        p: false,
        d: "outputs",
        f: "archivo-table",
      })
    );
  });

  test("should return configuration with custom values", async () => {
    const argv = await runComand([
      "-b",
      "5",
      "-l",
      "20",
      "-s",
      "-p",
      "-d",
      "carpeta",
      "-f",
      "archivo",
    ]);
    // console.log(argv);
    expect(argv).toEqual(
      expect.objectContaining({
        b: 5,
        l: 20,
        s: true,
        p: true,
        d: "carpeta",
        f: "archivo",
      })
    );
  });
});
