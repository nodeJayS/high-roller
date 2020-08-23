import { connect } from 'react-redux';

import BetHistory from './BetHistory';

const mapState = (state) => {
    return {
        multiplier: state.bet.multiplier,
        betHistory: state.bet.betHistory,
        betAmount: state.bet.betAmount,
        resultColor: state.bet.resultColor,
    };
};

export default connect (mapState)(BetHistory);