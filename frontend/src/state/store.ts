import { configureStore } from "@reduxjs/toolkit";
import currentItemReducer from "./currentItem/currentAdvertisementSlice";
import layoutReducer from "./layout/layoutSlice";
import itemsReducer from "./items/itemsSlice";
import filterReducer from "./filter/filterSlice";
import loadingReducer from "./loading/loadingSlice";

export const store = configureStore({
    reducer: {
        "currentItem": currentItemReducer,
        "layout": layoutReducer,
        "items": itemsReducer,
        "filter": filterReducer,
        "loading": loadingReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;