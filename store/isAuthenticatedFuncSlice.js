import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticatedFunc: false
}

export const isAuthenticatedFuncSlice = createSlice({
    name: 'isAuthenticatedFunc',
    initialState,
    reducers: {
        FuncAuthenticated: (state, action) => {
            state.isAuthenticatedFunc = action.payload
        }
    }
})

export const { FuncAuthenticated } = isAuthenticatedFuncSlice.actions

export default isAuthenticatedFuncSlice.reducer