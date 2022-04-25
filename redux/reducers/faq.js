import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    faq: null,
}

const faq = createSlice({
    name: 'faq',
    initialState,
    reducers: {
        setFaq(state, action) {
            state.faq = action.payload;
        },

    }
})

export const {
    setFaq
} = faq.actions

export default faq.reducer