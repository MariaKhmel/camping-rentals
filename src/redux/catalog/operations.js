import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAdverts } from "../../services/fetchAdverts";

export const fetchCatalog = createAsyncThunk(
    "catalog/fetchAll",

    async (_, thunkAPI) => {
        try {
            const response = await fetchAdverts();
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);