import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";


// const mongoose = require("mongoose");

// require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// mongoose.connect(process.env.MONGODB_URI);

const dataRoutes = require("./routes/data/data.route.ts");
app.use(dataRoutes);

app.all("/", (req: Request, res: Response) => {
    res.json("Ok");
});

app.all("*", (req: Request, res: Response) => {
    res.status(404).json({ message: "Page not found 😢" });
});

app.listen(3001, '0.0.0.0', () => {
    console.log("Server started 🚀");
});