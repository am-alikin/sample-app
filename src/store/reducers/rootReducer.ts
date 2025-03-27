import { combineReducers } from "redux"
import { mathSlice } from "../slices/mathSlice"

export const rootReducer = combineReducers({ math: mathSlice.reducer })
export type RootState = ReturnType<typeof rootReducer>