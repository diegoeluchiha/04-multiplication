import { ServerApp } from "./server-app";
import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";
describe("Server App", () => {
  const options = {
    base: 5,
    limit: 10,
    print: true,
    show: true,
    destination: "test-destination",
    fileName: "test-file.txt",
  };

  test("should create server app instance", async () => {
    const serverApp = new ServerApp(); // Create an instance of ServerApp

    expect(serverApp).toBeInstanceOf(ServerApp);
    expect(typeof ServerApp.run).toBe("function");
  });

  test("should run server app with options", async () => {
    // const logSpy = jest.spyOn(console, "log");
    // const createTableSpy = jest.spyOn(CreateTable.prototype, "execute");
    // const saveFileSpy = jest.spyOn(SaveFile.prototype, "execute");
    // ServerApp.run(options);
    // //cuantas veces se llama a console.log
    // expect(logSpy).toHaveBeenCalledTimes(3);
    // expect(logSpy).toHaveBeenCalledWith("server running... siii");
    // expect(logSpy).toHaveBeenCalledWith("File created successfully.");
    // expect(createTableSpy).toHaveBeenCalledTimes(1);
    // expect(createTableSpy).toHaveBeenCalledWith({
    //   base: options.base,
    //   limit: options.limit,
    // });
    // expect(saveFileSpy).toHaveBeenCalledTimes(1);
    // expect(saveFileSpy).toHaveBeenCalledWith({
    //   fileContent: expect.any(String), // Assuming the content is a string
    //   fileDestination: options.destination,
    //   fileName: options.fileName,
    // });
  });

  test("should run with custom values mocked", async () => {
    const logMock = jest.fn();
    const logErrorMock = jest.fn();
    const createMock = jest.fn().mockReturnValue("1 x 2 = 2");
    const saveFileMock = jest.fn().mockReturnValue(true);

    console.log = logMock;
    console.error = logErrorMock;
    CreateTable.prototype.execute = createMock;
    SaveFile.prototype.execute = saveFileMock;

    ServerApp.run(options);

    expect(logMock).toHaveBeenCalledWith("Server running...");
    expect(createMock).toHaveBeenCalledWith({
      base: options.base,
      limit: options.limit,
    });
    expect(saveFileMock).toHaveBeenCalledWith({
      fileContent: "1 x 2 = 2",
      fileDestination: options.destination,
      fileName: options.fileName,
    });
    // logErrorMock
    expect(logErrorMock).not.toHaveBeenCalled(); //veirficamos que no se llama a console.error
  });
});
