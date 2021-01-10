import { combineReducers } from '@reduxjs/toolkit'

import stonksReducers from '../reducers/stonks.reducers.js';

const rootReducer = combineReducers({
	stonks: stonksReducers,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
