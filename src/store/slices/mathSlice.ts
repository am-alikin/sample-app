import { createSlice } from "@reduxjs/toolkit"
import { setValue1Action, setValue2Action, setOperationAction } from "../actions/math"


const initialState = {
    value1: "0",
    value2: "0",
    operation: "+"
}

export const mathSlice = createSlice({
    name: "math",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setValue1Action, (state, action) => {
            state.value1 = action.payload
        })
        builder.addCase(setValue2Action, (state, action) => {
            state.value2 = action.payload
        })
        builder.addCase(setOperationAction, (state, action) => {
            state.operation = action.payload
        })
    },
})