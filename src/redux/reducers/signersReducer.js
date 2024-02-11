import { createSlice } from "@reduxjs/toolkit";

export const signersSlice = createSlice({
  name: "cashu",
  initialState: {
    signers: [],
  },
reducers: {
    setSigner: (state, action) => {
        state.signers.push(action.payload);
    },
    setSigners: (state, action) => {
        state.signers = [...state.signers, ...action.payload];
    },
  },  
});

export const { setSigner, setSigners } = signersSlice.actions;

export default signersSlice.reducer;