import { combineReducers } from "redux"
import { mathSlice } from "./mathReducer"

export const rootReducer = combineReducers({ math: mathSlice.reducer })
export type RootState = ReturnType<typeof rootReducer>