import axios from 'axios';

export const FETCH_COINS = 'fetch_coins';

const ROOT_URL = "https://api.coinmarketcap.com/v1/ticker/";

export function fetchCoins() {
    const request = axios.get(ROOT_URL);

    return{
        type: FETCH_COINS,
        payload: request
    }
}
