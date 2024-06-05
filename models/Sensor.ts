import  { model, Schema } from "mongoose";
import { SensorDocument, SensorModel } from "../types/sensor";

const SensorSchema: Schema<SensorDocument> = new Schema({
    humidity: String,
    temperature: String,
    creationDate:String
});

SensorSchema.statics.createSensorData = async function (
    args: SensorDocument,
): Promise<SensorDocument> {
    return this.create(args);
};

SensorSchema.statics.getSensorData = async function (
): Promise<SensorDocument[]> {
    return this.find();
};

const Sensor = model<SensorDocument, SensorModel>("sensor", SensorSchema);

export default Sensor;
