import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cahceResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cahceResults } = searchSlice.actions;
export default searchSlice.reducer;
