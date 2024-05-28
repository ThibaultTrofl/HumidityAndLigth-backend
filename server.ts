import express, { Application, Request, Response } from "express";
const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const dataRoutes = require("./routes/data/data.route.ts");
app.use(dataRoutes);

app.get("/", (req: Request, res: Response) => {
    res.json("Ok");
});

app.get("*", (req: Request, res: Response) => {
    res.status(404).json({ message: "Page not found 😢" });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} 🚀`);
});