import { createSlice } from '@reduxjs/toolkit';
import { fetchCatalog } from './operations';
import { catalogInitialState } from './initialState';

const catalogSlice = createSlice({
    name: 'catalog',
    initialState: catalogInitialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatalog.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCatalog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.adverts = action.payload;
            })
            .addCase(fetchCatalog.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const catalogReducer = catalogSlice.reducer;