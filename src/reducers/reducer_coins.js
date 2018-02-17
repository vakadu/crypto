import _ from 'lodash';

import { FETCH_COINS } from "../actions";

export default function (state = {}, action) {
    switch (action.type){
        case FETCH_COINS:
            console.log(action.payload.data);
            return _.mapKeys(action.payload.data, 'id');

        default:
            return state;
    }
}
