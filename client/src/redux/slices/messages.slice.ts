import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IMessage } from "../../components/chat/chat.types";

interface MessagesSliceState {
  messages: IMessage[];
}

const initialState: MessagesSliceState = {
  messages: [],
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state, { payload }: PayloadAction<IMessage>) => {
      state.messages.push(payload);
    },
  },
});

export const { addMessage } = messagesSlice.actions;

export const messagesSelector = (state: RootState) => state.messagesReducer;

export default messagesSlice.reducer;
