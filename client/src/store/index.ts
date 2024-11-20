import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "4783438hf9743njf934j9fhj",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
});

export default globalSlice.reducer;
