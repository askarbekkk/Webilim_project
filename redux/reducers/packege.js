import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    handlePacket: [] || JSON.parse(localStorage.getItem("packet")),
    handleCourse: [] || JSON.parse(localStorage.getItem("course"))
}


const packege = createSlice({
    name: 'packet',
    initialState,
    reducers: {
        setPacket(state, action){
            (localStorage.setItem('packet', JSON.stringify( state.handlePacket = action.payload )))

        },
        setCourse(state, action){
            (localStorage.setItem('handleCourse', JSON.stringify( state.handleCourse = action.payload )))

        }

    }
})

export const {
    setPacket,
    setCourse,
} = packege.actions;

export default packege.reducer
