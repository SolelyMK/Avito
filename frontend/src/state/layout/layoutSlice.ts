import { createSlice } from "@reduxjs/toolkit"

interface ILayoutState {
    value: "grid" | "list"
}

const initialState: ILayoutState = {
    value: "grid"
}

const layoutSlice = createSlice({
    name: "layout",
    initialState: initialState,
    reducers: {
        setGrid: (state) => {
            state.value = "grid";
        },

        setList: (state) => {
            state.value = "list";
        }
    }
});

export const { setGrid, setList } = layoutSlice.actions;

export default layoutSlice.reducer;