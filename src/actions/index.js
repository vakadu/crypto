import axios from 'axios';

export const FETCH_COINS = 'fetch_coins';
export const FETCH_COIN = 'fetch_coin';

const ROOT_URL = "https://api.coinmarketcap.com/v1/ticker";

export function fetchCoins() {
    const request = axios.get(`${ROOT_URL}/`);

    return{
        type: FETCH_COINS,
        payload: request
    }
}

export function fetchCoin(id) {
    const request = axios.get(`${ROOT_URL}/${id}/`);

    return{
        type: FETCH_COIN,
        payload: request
    }
}
