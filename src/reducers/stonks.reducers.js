/*
const toolkit = require('@reduxjs/toolkit');
const createSlice = toolkit.createSlice;
const PayloadAction = toolkit.PayloadAction;
*/
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
/*import {
	Stonk,
	Prices
} from '../types/stonk.types.ts';
*/

const initialState = { //: StonkState = {
	stonks: {},
};

const stonkSlice = createSlice({
	name: 'stonk',
	initialState: initialState,
	reducers: {
		setStonks: (state, action: PayloadAction<{}>) => {
			state.stonks = action.payload;
		}
	},
	extraReducers: {},
});

export const { setStonks } = stonkSlice.actions
export default stonkSlice.reducer

/*
type StonkState = {
	stonks: []; //Stonk[];
}*/
