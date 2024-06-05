import { model, Schema } from "mongoose";
import { ButtonDocument, ButtonModel } from "../types/button";
import { SensorDocument } from "../types/sensor";

const ButtonSchema: Schema<ButtonDocument> = new Schema({
  status: String,
});

ButtonSchema.statics.updateButtonStatus = async function (
  id: string,
  args: ButtonDocument,
): Promise<ButtonDocument> {
  return this.findByIdAndUpdate(id, args);
};

ButtonSchema.statics.getSensorData = async function (
  id: string,
): Promise<ButtonDocument> {
  return this.findById(id);
};

const Button = model<ButtonDocument, ButtonModel>("button", ButtonSchema);

export default Button;
