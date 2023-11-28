import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Log } from "./Classes/Log";
import { LogFormat } from "./Classes/LogFormat";
import { LogRegister } from "./Classes/LogRegister";
import { FileHandler } from "./Classes/FileHandle";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

const fileHandler = new FileHandler("dados.txt");

app.get("/um", (req: Request, res: Response) => {
  const log = new Log();
  res.send(log.toString());
});

app.get("/dois", (req: Request, res: Response) => {
  const logFormat = new LogFormat();
  res.send(logFormat.toString());
});

app.get("/tres", async (req: Request, res: Response) => {
  try {
    const logRegister = new LogRegister(fileHandler);
    res.send(logRegister.toString());
  } catch (error) {
    res.status(500).send("Erro ao processar a rota /tres");
  }
});

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
