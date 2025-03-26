import { createReducer } from "@reduxjs/toolkit";
import { setOperationAction } from "../actions/math/setOperationAction";
import { setValue1Action } from "../actions/math/setValue1Action";
import { setValue2Action } from "../actions/math/setValue2Action";


export const mathReducer = createReducer({ a: 0, b: 0, operation: "" }, (builder) => {
    builder.addCase(setValue1Action, (state, action) => {
        state.a = action.payload
    })
    builder.addCase(setValue2Action, (state, action) => {
        state.b = action.payload
    })
    builder.addCase(setOperationAction, (state, action) => {
        state.operation = action.payload
    })
    builder.addDefaultCase((_, action) => {
        throw `Incorrect action '${action.type}' in mathReducer`
    })
})