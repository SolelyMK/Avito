import { createSlice } from "@reduxjs/toolkit"

interface IItemsState {
    value: Array<{
        category: string,
        title: string,
        price: number,
        needsRevision: boolean
    }>
}

const initialState: IItemsState = {
    value: []
}

const itemsSlice = createSlice({
    name: "items",
    initialState: initialState,
    reducers: {
        setItems: (state, action) => {
            state.value = action.payload;
        },

        clear: (state) => {
            state.value = [];
        }
    }
})

export const { setItems, clear } = itemsSlice.actions;

export default itemsSlice.reducer;