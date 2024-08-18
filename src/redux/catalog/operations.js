import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAdvertsByPage, fetchAll } from "../../services/fetchAdverts";

export const fetchCatalogByPage = createAsyncThunk(
    "catalog/fetchAdvertsByPage",

    async (page, thunkAPI) => {
        try {
            const response = await fetchAdvertsByPage(page);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const fetchCatalog = createAsyncThunk(
    "catalog/fetchAllAdverts",

    async (_, thunkAPI) => {
        try {
            const response = await fetchAll();
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);