import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: { favorites: [] },
    reducers: {
        setFavorite(state, action) {
            const { _id } = action.payload;
            const index = state.favorites.findIndex(favorite => favorite._id === _id
            );

            if (index !== -1) {
                state.favorites.splice(index, 1);
            } else {
                state.favorites.push(action.payload);
            }
        }
    }
})

export const { setFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;