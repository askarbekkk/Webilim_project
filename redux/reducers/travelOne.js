import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: []
}


const travelOne = createSlice({
    name: 'packet',
    initialState,
    reducers: {
        setTravelOne(state, action){
            (state.data = action.payload )

        }

    }
})

export const {
    setTravelOne
} = travelOne.actions;

export default travelOne.reducer
