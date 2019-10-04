import { CHANGE_HAMBURGER } from '../constants/hamburger'

export const menuReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_HAMBURGER:
      return { ...state, navOpen: !state.navOpen }
    default:
      return state
  }
}
