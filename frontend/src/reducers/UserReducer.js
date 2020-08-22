import {
    RECEIVE_USER_DATA,
    PLACE_BET,
    WIN_BET
    } from '../actions/UserActions';

const initialState = {
    balance: 0.00,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_USER_DATA:
            return {
                ...state,
                balance: action.payload.balance
            };
        case PLACE_BET:
            return {
                ...state,
                balance: state.balance - action.payload
            };
        case WIN_BET:
            return{
                ...state,
                balance: state.balance + action.payload
            }
        default: 
            return state;
    };
};