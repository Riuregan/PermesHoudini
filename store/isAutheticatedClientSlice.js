import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticatedClient: false
}

export const isAuthenticatedClientSlice = createSlice({
    name: 'isAuthenticatedClient',
    initialState,
    reducers: {
        ClientAuthenticated: (state, action) => {
            state.isAuthenticatedClient = action.payload
        }
    }
})

export const { ClientAuthenticated } = isAuthenticatedClientSlice.actions

export default isAuthenticatedClientSlice.reducer