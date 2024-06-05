import express, { Request, Response } from "express";
import { sensorRouter } from "./routes/sensors";

import { envVariables } from "./utils/envVariables";
import { connectDB } from "./utils/connectDB";

const app = express();

app.use(express.json());

app.use("/data", sensorRouter);


app.get("/", (req: Request, res: Response): void => {
    res.json("Humidity And Light");
});

connectDB().then(() =>
    app.listen(envVariables.PORT || 4001, (): void => {
        console.log(`Server has started on PORT ${envVariables.PORT}!`);
    }),
);
