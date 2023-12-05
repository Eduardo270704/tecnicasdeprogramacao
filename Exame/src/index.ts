import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { DataBase, Student, Teacher } from "./Classes";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}...`));

app.get("/student/:name", (req: Request, res: Response) => {
  const studentName = req.params.name;
  const newStudent = new Student(studentName);
  res.json(newStudent.toJSON());
});

app.get("/teacher/:name/:age", (req: Request, res: Response) => {
  const teacherName = req.params.name;
  const teacherAge = parseInt(req.params.age);
  const newTeacher = new Teacher(teacherName, teacherAge);
  res.json(newTeacher.toJSON());
});

app.get("/", (_: Request, res: Response) => {
  const allPeople = DataBase.list();
  const serializedData = allPeople.map((person) => {
    if (person instanceof Student) {
      return { id: person["id"], name: person["name"] };
    } else if (person instanceof Teacher) {
      // Certifique-se de que a classe Teacher tenha as propriedades id e name
      return { id: person["id"], name: person["name"] };
    }
    // Caso a classe People não tenha as propriedades id e name
    return { id: -1, name: "Unknown" };
  });
  res.json(serializedData);
});

// Aceita qualquer método HTTP ou URL
app.use((_: Request, res: Response) =>
  res.json({ message: "Requisição desconhecida" })
);
