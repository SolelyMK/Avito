import { createSlice } from "@reduxjs/toolkit"

interface IFilterState {
    value: {
        category: {
            auto: boolean,
            real_estate: boolean,
            electronics: boolean
        },
        title: string,
        onlyNeedsRevision: boolean,
        sort: [string, string]
    }
}

const initialState: IFilterState = {
    value: {
        category: {
            auto: false,
            real_estate: false,
            electronics: false
        },
        title: "",
        onlyNeedsRevision: false,
        sort: ["createdAt", "asc"]
    }
}

const filterSlice = createSlice({
    name: "filter",
    initialState: initialState,
    reducers: {
        setAuto: (state, action) => {
            state.value.category.auto = action.payload;
        },

        setRealEstate: (state, action) => {
            state.value.category.real_estate = action.payload;
        },

        setElectronics: (state, action) => {
            state.value.category.electronics = action.payload;
        },

        setTitle: (state, action) => {
            state.value.title = action.payload;
        },

        setRevision: (state, action) => {
            state.value.onlyNeedsRevision = action.payload;
        },

        setSort: (state, action) => {
            state.value.sort = action.payload;
        }
    }
});

export const { setAuto, setRealEstate, setElectronics, setTitle, setRevision, setSort } = filterSlice.actions;

export default filterSlice.reducer;