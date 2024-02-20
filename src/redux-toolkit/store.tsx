// store.js
import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./modeSlicer";
import dataReducer from "./dataSlice";

const store = configureStore({
  reducer: {
    themeMode: modeReducer,
    data: dataReducer,
  },
});
export default store;
