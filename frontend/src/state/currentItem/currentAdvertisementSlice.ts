import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Item } from "../../shared/itemType";

interface ICurrentItemState {
    value: null | Item
}

const initialState: ICurrentItemState = {
    value: null
}

const currentItemSlice = createSlice({
    name: "currentItem",
    initialState,
    reducers: {
        setItem: (state, action: PayloadAction<Item>) => {
            state.value = action.payload;
        },
        clearItem: (state) => {
            state.value = null;
        }
    }
});

export const { setItem, clearItem } = currentItemSlice.actions;

export default currentItemSlice.reducer;