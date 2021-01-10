/*import {
	ApiStonk,
	Prices,
} from '../types/stonk.types.ts';
*/

function parseStonks(stonks) {
	stonks = JSON.parse(JSON.stringify(stonks));
	const parsedStonks = stonks.map((stonk) => parseStonk(stonk));
	return parsedStonks;
}

function parseStonk(stonk) {
	const parsedStonk = {
		symbol: stonk[1],
		prices: [
			stonk[0][0], 
			stonk[0][1] 
		]
	};
	return parsedStonk;
}
exports.parseStonks = parseStonks	
