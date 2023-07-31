import api from "@/config/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk("items/getItemsList", async () => {
  const response = await api.get(`ddc770fd-1346-438e-a15f-cf8767577b9e `);
  return response.data;
});
