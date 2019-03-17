import * as UserActions from '../actions/usersActions';

const initialState = {
	userLoggedIn: 'asd',
};

export function usersReducer(state = initialState, action) {
	switch (action.type) {

		case UserActions.TEST_ACTION: {
			return state;
		}

		default: {
			return state;
		}
    }
}
