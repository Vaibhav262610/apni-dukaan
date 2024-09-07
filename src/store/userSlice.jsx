import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminAccess: false,
  userName: "",
};

const userSlice = createSlice({
  name: "apna",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    setAdminAccess: (state, action) => {
      state.adminAccess = action.payload.adminAccess;
      state.userName = action.payload.userName;
    },
  },
});

export const { add, remove, setAdminAccess } = userSlice.actions;
export default userSlice.reducer;
