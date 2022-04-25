import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: []
}


const playlistOne = createSlice({
    name: 'packet',
    initialState,
    reducers: {
        setPlayData(state, action){
            (state.data = action.payload )

        }

    }


})

export const {
    setPlayData
} = playlistOne.actions;

export default playlistOne.reducer
