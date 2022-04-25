import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: []
}


const travel_list = createSlice({
    name: 'travel_list',
    initialState,
    reducers: {
        setTravel(state, action) {
            state.data = action.payload
        },
    }
})

export const {
    setTravel
} = travel_list.actions;

export default travel_list.reducer
