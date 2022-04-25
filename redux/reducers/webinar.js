import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    webinarList: null,
    webinar: null,
}


const webinar = createSlice({
    name: 'webinar',
    initialState,
    reducers: {
        setWebinarList(state, action) {
            state.webinarList = action.payload
        },
        setWebinar(state, action){
            state.webinar = action.payload;
        },
        setAllWebinars(state, action) {
            state.allWebinars = action.payload
        },
        setAllWebinarLoaded(state, action) {
            state.allWebinarLoaded = action.payload
        }
    }
})

export const {
    setWebinarList,
    setWebinar,
    setAllWebinarLoaded,
    setAllWebinars
} = webinar.actions;

export default webinar.reducer
