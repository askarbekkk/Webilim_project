import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    batch: null
}

const batch =  createSlice({
    name: 'batch',
    initialState,
    reducers: {
        setBatch(state, action){
            state.batch = action.payload
        }
    }
})

export const {
    setBatch
} = batch.actions;

export default batch.reducer