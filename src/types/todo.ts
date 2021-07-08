import { Document } from "mongoose";

export interface IMessage extends Document {
  type: "user" | "friend";
  message: string;
}
