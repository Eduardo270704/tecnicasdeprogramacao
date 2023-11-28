import fs from "fs/promises";
import path from "path";
import { LogProps } from "./Types";

export class FileHandler {
  private filename: string;
  constructor(filename: string = "dados.txt") {
    this.filename = path.resolve(__dirname, filename);
  }
  async read(): Promise<LogProps[]> {
    try {
      const data = await fs.readFile(this.filename, "utf-8");
      const lines = data.split("\n").filter(Boolean); // Filtra linhas vazias
      const logs: LogProps[] = lines.map((line) => JSON.parse(line));
      return logs;
    } catch (error: any) {
      if (error.code === "ENOENT") {
        // Arquivo não encontrado, retorna um array vazio
        return [];
      } else {
        // Outro erro, imprime o erro e lança uma exceção
        console.error("Error reading file:", error);
        throw error;
      }
    }
  }
  async write(logs: LogProps[]): Promise<void> {
    try {
      const lines = logs.map((log) => JSON.stringify(log));
      const data = lines.join("\n") + "\n"; // Adiciona uma nova linha ao final

      // Usamos { flag: 'w' } para abrir o arquivo em modo de escrita
      await fs.writeFile(this.filename, data, { flag: "w", encoding: "utf-8" });
    } catch (error: any) {
      console.error("Error writing file:", error);
      throw error;
    }
  }
  async append(log: LogProps): Promise<void> {
    try {
      const logs = await this.read();
      logs.push(log);
      await this.write(logs);
    } catch (error: any) {
      console.error("Error appending to file:", error);
      throw error;
    }
  }
}
