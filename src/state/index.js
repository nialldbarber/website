import React, { createContext, useReducer } from 'react'
import { menuReducer } from '~@reducers/menu'

const AppContext = createContext()

const initialState = {
	navOpen: false
}

const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(menuReducer, initialState)
	const value = { state, dispatch }

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

const ContextOneConsumer = AppContext.Consumer

export { AppContext, Provider, ContextOneConsumer }
