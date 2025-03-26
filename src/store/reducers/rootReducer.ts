import { combineReducers } from "redux"
import { mathReducer } from "./mathReducer"

export const rootReducer = combineReducers({ math: mathReducer })
export type RootState = ReturnType<typeof rootReducer>