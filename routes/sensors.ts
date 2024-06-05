import express, { Response, Request } from "express";
import Sensor from "../models/Sensor";
import { SensorDocument } from "../types/sensor";

export const sensorRouter = express.Router();

interface SensorQuery {
  temperature?: string;
  humidity?: string;
  creationDate?: string;
}

sensorRouter.post(
  "/",
  async (
    req: Request<{}, {}, {}, SensorQuery>,
    res: Response,
  ): Promise<void> => {
    try {
      const { temperature, humidity, creationDate } = req.query;
      const date = creationDate || new Date().getTime().toString();

      const newSensorData: SensorDocument = await Sensor.createSensorData({
        temperature: temperature as string,
        humidity: humidity as string,
        creationDate: date,
      });
      res.status(200).json(newSensorData);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Server Error" });
    }
  },
);

sensorRouter.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const allDataSensor: SensorDocument = await Sensor.getSensorData();
    res.status(200).json(allDataSensor);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server Error" });
  }
});
