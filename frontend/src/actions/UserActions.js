import * as UserUtil from '../util/UserUtil';

export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA';
export const PLACE_BET = 'PLACE_BET';
export const WIN_BET = 'WIN_BET';

export const receiveUserData = (payload) => ({
    type: RECEIVE_USER_DATA,
    payload
});

export const placeBet = (payload) => ({
    type: PLACE_BET,
    payload
});

export const winBet = (payload) => ({
    type: WIN_BET,
    payload
});

export const userData = () => dispatch => {
    return UserUtil.getUserData()
        .then(res => dispatch(receiveUserData(res)))
        .catch(err => console.log(err))
};

export const placeBetFunc = (bet) => dispatch => {
    return UserUtil.placeBet(bet)
        .then(res => dispatch(placeBet(res)))
        .catch(err => console.log(err))
};

export const winBetFunc = (prize) => dispatch => {
    return UserUtil.winBet(prize)
        .then(res => dispatch(winBet(res)))
        .catch(err => console.log(err))
};