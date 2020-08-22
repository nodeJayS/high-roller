import * as BetUtil from '../util/BetUtil';
import * as SeedUtil from '../util/SeedUtil';

export const UPDATE_BET = 'UPDATE_BET';
export const UPDATE_MULTI = 'UPDATE_MULTI';
export const CREATE_SEED = 'CREATE_SEED';
export const RECEIVE_BET_RESULT = 'RECEIVE_BET_RESULT';

export const updateBet = (payload) => ({
    type: UPDATE_BET,
    payload
});

export const updateMulti = (payload) => ({
    type: UPDATE_MULTI,
    payload
});

export const createSeed = (payload) => ({
    type: CREATE_SEED,
    payload
});

export const receiveBetResult = (payload) => ({
    type: RECEIVE_BET_RESULT,
    payload
});

export const updateBetAmt = (bet) => dispatch => {
    return BetUtil.updateBet(bet)
        .then(res => dispatch(updateBet(res)))
        .catch(err => console.log(err)) // Temp error catcher
};

export const updateMultiAmt = (multi) => dispatch => {
    return BetUtil.updateMulti(multi)
        .then(res => dispatch(updateMulti(res)))
        .catch(err => console.log(err)) // Temp error catcher
};

export const createSeedFunc = () => dispatch => {
    return SeedUtil.createSeed()
        .then(res => dispatch(createSeed(res)))
        .catch(err => console.log(err)) // Temp error catcher
};

export const handleBet = (data) => dispatch => {
    return BetUtil.getResult(data)
        .then(res => dispatch(receiveBetResult(res)))
        .catch(err => console.log(err)) // Temp error catcher
}