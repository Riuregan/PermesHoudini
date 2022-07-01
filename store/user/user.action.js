import { USER_ACTION_TYPES } from "./user.types";

const createAction = (type, payload) => ({ type, payload });

export const setCurrentUser = (user) => {

    return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};

export const setIsClientAuthenticated = (boolean) => {
    return createAction(USER_ACTION_TYPES.SET_IS_CLIENT_AUTHENTICATED, boolean);
};

export const setIsFuncAuthenticated = (boolean) => {
    return createAction(USER_ACTION_TYPES.SET_IS_FUNC_AUTHENTICATED, boolean);
};