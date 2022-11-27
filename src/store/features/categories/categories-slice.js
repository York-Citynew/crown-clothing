import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";

const initialState = {
  categories: [],
  isLoading: true,
};

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    const categoriesArray = await getCategoriesAndDocuments();
    try {
      return categoriesArray;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: {
    [getCategories.pending]: (store) => {
      store.isLoading = true;
    },
    [getCategories.fulfilled]: (store, { payload }) => {
      store.categories = payload;
      store.isLoading = false;
    },
    [getCategories.rejected]: (store, action) => {
      store.isLoading = false;
      console.log(action);
    },
  },
});

export default categoriesSlice.reducer;
