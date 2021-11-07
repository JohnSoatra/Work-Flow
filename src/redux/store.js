import { configureStore } from "@reduxjs/toolkit";
import selectedPageReducer from "./ducks/selectedPage";

const store = configureStore({
  reducer: {
    selectedPageReducer
  }
});

export default store;