import { configureStore } from "@reduxjs/toolkit";
import groupsReducer from "./slices/groups.slice";
import messagesReducer from "./slices/messages.slice";

const store = configureStore({
  reducer: {
    groupsReducer,
    messagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
