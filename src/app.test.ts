// process.argv = ["node", "app.js", "--base=1"];
// import "./app";
import { ServerApp } from "./presentation/server-app";
describe("App Test", () => {
  test("should call Server.run with values", async () => {
    const serverRunMock = jest.fn();
    ServerApp.run = serverRunMock;
    process.argv = [
      "node",
      "app.js",
      "--base=1",
      "--limit=10",
      "--print=true",
      "--show=true",
      "--destination=./output",
      "--fileName=output.txt",
    ];
    await import("./app");
    expect(serverRunMock).toHaveBeenCalledWith({
      base: 1,
      limit: 10,
      print: true,
      show: true,
      destination: "./output",
      fileName: "output.txt",
    });
  });
});
