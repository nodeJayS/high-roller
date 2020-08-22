import { connect } from 'react-redux';

import BetView from './BetView';
import { 
    updateBetAmt,
    updateMultiAmt,
    createSeedFunc,
    handleBet
    } from '../actions/BetActions';
import {
    userData,
    placeBetFunc,
    winBetFunc
    } from '../actions/UserActions';

const mapState = (state) => {
    return {
        balance: state.user.balance,
        seed: state.bet.seed,
        multiplier: state.bet.multiplier,
        target: state.bet.target,
        betAmount: state.bet.betAmount,
        lastRoll: state.bet.lastRoll,
        lastTarget: state.bet.lastTarget,
        resultColor: state.bet.resultColor,
    }
}

const mapDispatch = (dispatch) => {
    return {
        updateBetAmt: (bet) => dispatch(updateBetAmt(bet)),
        updateMultiAmt: (bet) => dispatch(updateMultiAmt(bet)),
        createSeedFunc: () => dispatch(createSeedFunc()),
        handleBet: (data) => dispatch(handleBet(data)),

        userData: () => dispatch(userData()),
        placeBetFunc: (bet) => dispatch(placeBetFunc(bet)),
        winBetFunc: (bet) => dispatch(winBetFunc(bet))
    };
};

export default connect(mapState, mapDispatch)(BetView);