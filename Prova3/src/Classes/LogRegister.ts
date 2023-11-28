import { LogFormat } from "./LogFormat";
import { FileHandler } from "./FileHandle";
import { LogProps } from "./Types";

export class LogRegister extends LogFormat {
  private fileHandler: FileHandler;
  constructor(fileHandler: FileHandler) {
    super();
    this.fileHandler = fileHandler;
    this.appendToFile().catch((error) => console.error(error));
  }
  private async appendToFile(): Promise<void> {
    const logProps: LogProps = {
      id: String(this.getId()),
      date: this.getDate().toISOString(),
    };
    await this.fileHandler.append(logProps);
  }
  toJSON(): LogProps {
    return {
      id: String(this.getId()),
      date: this.getDate().toISOString(),
    };
  }
}
