import { configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { catalogReducer } from "./catalog/catalogSlice";
import { favoritesReducer } from "./favorites/favoritesSlice";



const favoritesPersistConfig = {
    key: "favorites",
    storage,
    whitelist: ["favorites"],
};

const persistedFavoritesReducer = persistReducer(
    favoritesPersistConfig,
    favoritesReducer
);

export const store = configureStore({
    reducer: {
        campers: catalogReducer,
        favorites: persistedFavoritesReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);