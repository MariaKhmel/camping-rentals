import { createSlice } from '@reduxjs/toolkit';
import { fetchCatalog, fetchCatalogByPage } from './operations';
import { catalogInitialState } from './initialState';

const handlePending = (state) => {
    state.isLoading = true;
}
const handleError = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;

}


const catalogSlice = createSlice({
    name: 'catalog',
    initialState: catalogInitialState,
    reducers: {
        setPage(state) {
            state.page += 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatalogByPage.pending, (state) => {
                handlePending(state);
            })
            .addCase(fetchCatalogByPage.fulfilled, (state, action) => {
                state.error = null;
                state.adverts = [...state.adverts, ...action.payload]
                state.isLoading = false;
            })
            .addCase(fetchCatalogByPage.rejected, (state, action) => {
                handleError(state, action);
            })
            .addCase(fetchCatalog.pending, (state) => {
                handlePending(state);
            })
            .addCase(fetchCatalog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const totalAdverstNumber = action.payload.length;
                const totalPages = totalAdverstNumber / 4;
                state.totalPages = Math.ceil(totalPages);

            })
            .addCase(fetchCatalog.rejected, (state, action) => {
                handleError(state, action);
            })
    },
});

export const catalogReducer = catalogSlice.reducer;
export const { setPage } = catalogSlice.actions;