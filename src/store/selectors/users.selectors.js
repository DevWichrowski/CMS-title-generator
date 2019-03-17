import { createSelector } from 'reselect';

const selectUsers = state => state.balanceInfo;

export const getLoginStatus = createSelector(
    selectUsers,
    state => state.balance
 );

 export const getBalanceSelector = createSelector(
    selectBalance,
    state => state.userLoggedIn
 );