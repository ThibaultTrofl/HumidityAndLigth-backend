import express, { Response, Request } from "express";
import Sensor from "../models/Sensor";
import { SensorDocument } from "../types/sensor";
import Button from "../models/Button";
import { ButtonDocument } from "../types/button";

export const buttonRouter = express.Router();

interface ButtonQuery {
  status: string;
  id: string;
}

buttonRouter.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { status } = req.query;
    const newButtonStatus: ButtonDocument = await Button.updateButtonStatus(
      id,
      {
        status: status as string,
      },
    );
    res.status(200).json(newButtonStatus);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server Error" });
  }
});

buttonRouter.get("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const buttonStatus: ButtonDocument = await Button.getButtonStatus(
      id as string,
    );
    res.status(200).json(buttonStatus);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server Error" });
  }
});
