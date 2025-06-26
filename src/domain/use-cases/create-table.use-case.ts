//interfaces
// Use Case: Create a multiplication table for a given base and limit
// src/domain/use-cases/create-table.use-case.ts

export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {
    // dependency inyection DP
  }

  execute({ base, limit = 10 }: CreateTableOptions) {
    let outputMessage = "";
    for (let i = 1; i <= limit; i++) {
      outputMessage += `${base} x ${i} = ${base * i}`;
      if (i < limit) {
        outputMessage += "\n"; // Add a newline character except for the last line
      }
    }
    return outputMessage;
  }
}
