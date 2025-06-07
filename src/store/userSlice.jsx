import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  apna: [],
  adminAccess: false,
  userName: "",
};

const userSlice = createSlice({
  name: "apna",
  initialState,
  reducers: {
    add: (state, action) => {
      state.apna.push(action.payload);
    },
    remove: (state, action) => {
      state.apna = state.apna.filter((item) => item.id !== action.payload);
    },
    setAdminAccess: (state, action) => {
      state.adminAccess = action.payload.adminAccess;
      state.userName = action.payload.userName;
    },
    logOut: (state) => {
      state.adminAccess = false; // Reset adminAccess on logout
      state.userName = ""; // Reset userName if needed
    },
    clearCart: (state) => {
      state.apna = []; // Clear the products array
    },
  },
});

export const { add, remove, setAdminAccess, logOut, clearCart } =
  userSlice.actions;
export default userSlice.reducer;
