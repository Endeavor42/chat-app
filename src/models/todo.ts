import { IMessage } from "./../types/todo";
import { model, Schema } from "mongoose";

const messageSchema: Schema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<IMessage>("Message", messageSchema);
