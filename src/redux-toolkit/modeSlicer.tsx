import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: false,
  },
  reducers: {
    setMode: (state) => {
      state.mode = !state.mode;
    },
  },
});

export const { setMode } = modeSlice.actions;
export default modeSlice.reducer;
