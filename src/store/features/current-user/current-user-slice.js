import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {},
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (store, { payload }) => {
      store.currentUser = payload;
    },
  },
});

export default currentUserSlice.reducer;
export const { setCurrentUser } = currentUserSlice.actions;
