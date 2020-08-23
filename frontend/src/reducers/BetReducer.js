import {
    UPDATE_BET,
    UPDATE_MULTI,
    CREATE_SEED,
    RECEIVE_BET_RESULT
    } from '../actions/BetActions'

const initialState = {
    seed: '',
    multiplier: 2.00,
    target: 49.50,
    betAmount: 1,
    lastRoll: '∞',
    lastTarget: '∞',
    resultColor: 'grey',
    betHistory: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case UPDATE_BET:
            return {
                ...state,
                betAmount: action.payload
            };
        case UPDATE_MULTI:
            return {
                ...state,
                multiplier: action.payload.multiplier,
                target: action.payload.target
            };
        case CREATE_SEED:
            return {
                ...state,
                seed: action.payload
            };
        case RECEIVE_BET_RESULT:
            let history = {
                result: action.payload.result,
                betAmount: action.payload.betAmount,
                target: action.payload.target,
                multiplier: action.payload.multiplier,
                winnings: action.payload.winnings,
                timestamp: action.payload.timestamp,
                seed: action.payload.seed,
                nonce: action.payload.nonce
            }
            return {
                ...state,
                lastRoll: action.payload.lastRoll,
                lastTarget: action.payload.lastTarget,
                resultColor: action.payload.resultColor,
                betHistory: [...state.betHistory, history]
            }
        default: 
            return state;
    };
};