import express, { Application, Request, Response } from "express";
const app: Application = express();
// const mongoose = require("mongoose");

// require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mongoose.connect(process.env.MONGODB_URI);

const dataRoutes = require("./routes/data/data.route.ts");
app.use(dataRoutes);

app.get("/", (req: Request, res: Response) => {
    res.json("Ok");
});

app.get("*", (req: Request, res: Response) => {
    res.status(404).json({ message: "Page not found 😢" });
});

app.listen(3001, () => {
    console.log("Server started 🚀");
});
