import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "apna",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = userSlice.actions;
export default userSlice.reducer;
