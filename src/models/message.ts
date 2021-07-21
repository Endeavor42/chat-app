import { IMessage } from "../types/message";
import { model, Schema } from "mongoose";

const messageSchema: Schema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<IMessage>("Message", messageSchema);
