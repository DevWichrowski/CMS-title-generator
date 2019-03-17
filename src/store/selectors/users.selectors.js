import { createSelector } from 'reselect';

const selectUsers = state => state.usersInfo;

export const getLoginStatus = createSelector(
    selectUsers,
    state => state.userLoggedIn
 );