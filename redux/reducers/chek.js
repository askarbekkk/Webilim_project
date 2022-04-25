import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    chek: []
}

const chek =  createSlice({
    name: 'chek',
    initialState,
    reducers: {
        setChek(state, action){
            // state.chek = [...state.chek , action.payload]
            const findColor = state.chek.find(el => el.title === action.payload.title)
            if (findColor) {
                return state.chek = [...state.chek = state.chek.map(el => el.title === action.payload.title ?
                        {
                            ...el ,
                            quatity: 1
                        } : el
                    )]
            }
            state.chek = [...state.chek, action.payload]



        }
    }
})

export const {
    setChek
} = chek.actions;

export default chek.reducer