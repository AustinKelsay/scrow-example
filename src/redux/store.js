import { configureStore } from "@reduxjs/toolkit";
import signersReducer from "./reducers/signersReducer";

export const store = configureStore({
  reducer: {
    signers: signersReducer,
  }
});