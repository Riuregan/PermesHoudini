import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
    isClientAuthenticated: false,
    isFuncAuthenticated: false,
    currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {

    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            };
        case USER_ACTION_TYPES.SET_IS_CLIENT_AUTHENTICATED:
            return {
                ...state,
                isClientAuthenticated: payload,
            };
        case USER_ACTION_TYPES.SET_IS_FUNC_AUTHENTICATED:
            return {
                ...state,
                isFuncAuthenticated: payload,
            };
        default:
            return state;
    }
};