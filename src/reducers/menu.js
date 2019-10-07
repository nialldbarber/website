import { CHANGE_HAMBURGER, CLOSE_HAMBURGER } from '../constants/hamburger'

export const menuReducer = (state, action) => {
	switch (action.type) {
		case CHANGE_HAMBURGER:
			return { ...state, navOpen: !state.navOpen }
		case CLOSE_HAMBURGER:
			return { ...state, navOpen: false }
		default:
			return state
	}
}
