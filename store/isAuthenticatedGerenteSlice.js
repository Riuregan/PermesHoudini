import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticatedGerente: false
}

export const isAuthenticatedGerenteSlice = createSlice({
    name: 'isAuthenticatedGerente',
    initialState,
    reducers: {
        GerenteAuthenticated: (state, action) => {
            state.isAuthenticatedGerente = action.payload
        }
    }
})

export const { GerenteAuthenticated } = isAuthenticatedGerenteSlice.actions

export default isAuthenticatedGerenteSlice.reducer