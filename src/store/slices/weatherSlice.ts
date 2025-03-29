import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    city: "",
    apiKey: ""
}

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setCity(state, value) {
            state.city = value.payload
        },
        setApiKey(state, value) {
            state.apiKey = value.payload
        }
    }
})

export const { setCity, setApiKey } = weatherSlice.actions
