import _ from 'lodash';

import { FETCH_COINS, FETCH_COIN } from "../actions";

export default function (state = {}, action) {
    switch (action.type){
        case FETCH_COINS:
            //console.log(action.payload.data);
            return _.mapKeys(action.payload.data, 'id');

        case FETCH_COIN:
            //console.log(action.payload.data.id);
            return { ...state, [action.payload.data.id]: action.payload.data };

        default:
            return state;
    }
}
