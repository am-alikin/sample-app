import { AsyncThunk, AsyncThunkAction, createReducer, UnknownAction } from "@reduxjs/toolkit";
import { setOperationAction } from "../actions/math/setOperationAction";
import { setValue1Action } from "../actions/math/setValue1Action";
import { setValue2Action } from "../actions/math/setValue2Action";

type RequestThunk = AsyncThunk<unknown, unknown, any>
type Pending = ReturnType<RequestThunk["pending"]>
type Fulfilled = ReturnType<RequestThunk["fulfilled"]>
type Rejected = ReturnType<RequestThunk["rejected"]>
type RequestStatus = (Pending | Fulfilled | Rejected)["meta"]["requestStatus"]

const initialState = {} as Record<string, RequestStatus>

export const requestReducer = createReducer(initialState, (builder) => {
    builder.addMatcher(matcher, (state, action) => {
        state[action.meta.requestId] = action.meta.requestStatus
    })
})

function matcher(action: UnknownAction): action is (Pending | Fulfilled | Rejected) {
    return (["pending", "fulfilled", "rejected"]).includes(action.type.split("/").slice(-1)[0])
}
