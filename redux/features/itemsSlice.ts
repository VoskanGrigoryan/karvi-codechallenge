import { createSlice } from "@reduxjs/toolkit";
import { fetchItems } from "../actions/items";

const initialState: any = {
  data: {},
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const items = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = action.payload;
    });
  },
});

export default items.reducer;
