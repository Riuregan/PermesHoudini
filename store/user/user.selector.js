import { createSelector } from "reselect";

export const selectCurrentUser = (state) => state.user.currentUser;

//const selectUserReducer = (state) = state.user

export const selectIsClientAuthenticated = createSelector(
    // [selectUserReducer],
    (user) => user.isClientAuthenticated
);


export const selectIsFuncAuthenticated = createSelector(
    // [selectUserReducer],
    (user) => user.isFuncAuthenticated
);
