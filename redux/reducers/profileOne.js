import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: {}
}


const profileOne = createSlice({
    name: 'profileOne',
    initialState,
    reducers: {
        setProfileOne(state, action){
            (state.data = action.payload )

        }

    }
})

export const {
    setProfileOne
} = profileOne.actions;

export default profileOne.reducer
