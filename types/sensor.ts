import { Model } from "mongoose";

export interface Sensor {
  humidity: string;
  temperature: string;
  creationDate: string;
}

export interface SensorDocument extends Sensor, Document {}

export interface SensorModel extends Model<SensorDocument> {
  createSensorData(args: Sensor): Promise<SensorDocument>;
  getSensorData(): Promise<SensorDocument[]>;
}
