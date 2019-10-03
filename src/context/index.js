import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

const AppContext = createContext()

const initialState = {
	navOpen: false
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_HAMBURGER':
			return { ...state, navOpen: !state.navOpen }
		default:
			return state
	}
}

function ContextOneProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState)
	const value = { state, dispatch }

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

const ContextOneConsumer = AppContext.Consumer

export { AppContext, ContextOneProvider, ContextOneConsumer }

ContextOneProvider.propTypes = {
	children: PropTypes.object
}
