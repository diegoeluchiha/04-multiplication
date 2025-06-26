import { CreateTable } from "./create-table.use-case";

describe("CreateTable Use Case", () => {
  test("should create table with default values", () => {
    const createTable = new CreateTable();
    const table = createTable.execute({ base: 5 });
    const rows = table.split("\n").length;
    // console.log(`Rows: ${rows}`);
    // console.log(table);
    expect(createTable).toBeInstanceOf(CreateTable);
    expect(rows).toBe(10);
  });

  test("should create table with custom values", () => {
    const options = {
      base: 3,
      limit: 20,
    };
    const createTable = new CreateTable();
    const table = createTable.execute(options);
    const rows = table.split("\n");
    // console.log(`Rows: ${rows.length}`);
    // console.log(table);
    expect(rows.length).toBe(options.limit);
    expect(table).toContain("3 x 1 = 3");
    expect(table).toContain("3 x 20 = 60");
    expect(table).toContain("3 x 10 = 30");
    //verificar que el inicio de la tabla sean todos 3
    rows.forEach((row) => {
      expect(row.startsWith("3 x")).toBe(true);
    });
  });
});
