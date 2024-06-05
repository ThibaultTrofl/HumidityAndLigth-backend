import { Model } from "mongoose";

export interface Button {
  status: string;
}

export interface ButtonDocument extends Button, Document {}

export interface ButtonModel extends Model<ButtonDocument> {
  updateButtonStatus(id: string, args: Button): Promise<ButtonDocument>;
  getButtonStatus(id: string): Promise<ButtonDocument>;
}
