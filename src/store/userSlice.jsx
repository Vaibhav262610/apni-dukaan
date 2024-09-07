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
  },
});

export const { add, remove, setAdminAccess, logOut } = userSlice.actions;
export default userSlice.reducer;
