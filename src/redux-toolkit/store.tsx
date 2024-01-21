// store.js
import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./modeSlicer";

const store = configureStore({
  reducer: {
    themeMode: modeReducer,
  },
});
export default store;
