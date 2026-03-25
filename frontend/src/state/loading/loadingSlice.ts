import { createSlice } from "@reduxjs/toolkit"

interface ILoadingState {
    value: boolean
}

const initialState: ILoadingState = {
    value: true
}

const loadingSlice = createSlice({
    name: "loading",
    initialState: initialState,
    reducers: {
        setLoading: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;