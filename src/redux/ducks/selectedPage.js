import { createSlice } from "@reduxjs/toolkit";

const selectedPage = null;
const slice = createSlice({
  name: "seletedPage",
  initialState: selectedPage,
  reducers: {
    setSeletedPage(state, result) { return result.payload; }
  },
});

export default slice.reducer;
export const { setSeletedPage } = slice.actions;