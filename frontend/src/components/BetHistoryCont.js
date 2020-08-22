import { connect } from 'react-redux';

import BetHistory from './BetHistory';

const mapState = (state) => {
    return {
        betHistory: state.bet.betHistory,
        betAmount: state.bet.betAmount,
    };
};

export default connect (mapState)(BetHistory);