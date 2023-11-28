import fs from "fs/promises";
import path from "path";
import { LogProps } from "./Types";

export class FileHandler {
  private filename: string;
  constructor(filename: string = "dados.txt") {
    this.filename = path.resolve(__dirname, filename);
  }
  private async fileExists(): Promise<boolean> {
    try {
      await fs.access(this.filename, fs.constants.F_OK);
      return true;
    } catch (error) {
      return false;
    }
  }
  async read(): Promise<LogProps[]> {
    try {
      if (await this.fileExists()) {
        const data = await fs.readFile(this.filename, "utf-8");
        const lines = data.split("\n").filter(Boolean); // Filtra linhas vazias
        const logs: LogProps[] = lines.map((line) => JSON.parse(line));
        return logs;
      } else {
        return [];
      }
    } catch (error) {
      console.error("Error reading file:", error);
      throw error;
    }
  }
  async write(logs: LogProps[]): Promise<void> {
    try {
      await fs.access(this.filename);
      const lines = logs.map((log) => JSON.stringify(log));
      const data = lines.join("\n") + "\n";
      await fs.writeFile(this.filename, data, "utf-8");
    } catch (error) {
      console.error("Error writing file:", error);
      throw error;
    }
  }
  async append(log: LogProps): Promise<void> {
    try {
      await this.read();
      const logs = await this.read();
      logs.push(log);
      await this.write(logs);
    } catch (error) {
      console.error("Error appending to file:", error);
      throw error;
    }
  }
}
