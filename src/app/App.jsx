import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from './rootReducer'

import { fetchStonks } from '../services/stonks-api.js'
import { setStonks } from '../reducers/stonks.reducers.js'
import { parseStonks } from '../utils/parser.js'
//import { selectStonks } from '../selectors/stonk.selectors.js'

const App = () => {
	const dispatch = useDispatch();

	const stonks = fetchStonks();
	const parsedStonks = parseStonks(stonks);
	dispatch(setStonks(parsedStonks));
	const selectedStonks = useSelector (
		(state: RootState) => state.stonks
	)
	//const selectedStonks = useSelector(selectStonks)

	const content = selectedStonks[0]
	console.log(selectedStonks);
	console.log(selectedStonks[0]);
	console.log(selectedStonks[1]);
	//console.log(selectedStonks[0][0]);
	//console.log(selectedStonks[0][1]);
	/*selectedStonks.forEach((stonk) => {
		console.log(stonk[1]);
		console.log(stonk[0][0]);
		console.log(stonk[0][1]);
	});*/

	return <div>{content}</div>
}

export default App
