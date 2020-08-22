import React, { Component } from 'react';

export default class BetView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: '',
        }
        this.handleBetChange = this.handleBetChange.bind(this);
        this.doubleBet = this.doubleBet.bind(this);
        this.halveBet = this.halveBet.bind(this);
        this.randomizeSeed = this.randomizeSeed.bind(this);
        this.updateMultiplier = this.updateMultiplier.bind(this);
    };

    componentDidMount() {
        this.props.userData();
        this.props.createSeedFunc();
    };

    handleBetChange = (e) => {
        let bet = e.target.value
        this.props.updateBetAmt(bet)
    };

    doubleBet = (e) => {
        e.preventDefault();
        let bet = this.props.betAmount * 2
        this.props.updateBetAmt(bet)
    };

    halveBet = (e) => {
        e.preventDefault();
        let bet = this.props.betAmount / 2
        this.props.updateBetAmt(bet)
    };

    randomizeSeed() {
        this.props.createSeedFunc()
    };

    updateMultiplier(e) {
        let multi = e.target.value
        this.props.updateMultiAmt(multi)
    };

    handleBet() {
        let data = {
            balance: this.props.balance,
            seed: this.props.seed,
            multiplier: this.props.multiplier,
            target:this.props.target,
            betAmount: this.props.betAmount,
        }
        
        //Clear error state
        this.setState({errorMessage: ''});

        //Check if bet is less than zero
        if (data.betAmount < 0) {
            this.setState({errorMessage: `Bet can't be less than zero`})
        } else if (isNaN(data.betAmount)) {
            this.setState({errorMessage: `Bet is not a number`})
        } else if (data.balance - data.betAmount < 0) {
            this.setState({errorMessage: `Insufficient balance!`})
        } else {
            //Deduct bet from balance
            this.props.placeBetFunc(data.betAmount);
            this.props.handleBet(data)
                .then(res => {
                    let win = res.payload.winnings
                    if(win > 0) {
                        this.props.winBetFunc(win)
                    }
                })
        }
    };

    render() {
        return (
            <div>
                {/* Balance */}
                <h4>Balance</h4>
                <label id='balance'>
                    $ {this.props.balance.toFixed(2)}
                </label>
                
                {/* Seed generator */} 
                <input value={this.props.seed} readOnly={true} />
                <button className='game-button' onClick={this.randomizeSeed}>Randomize seed</button>

                {/* Result and target indicator*/}
                <div>
                    <div style={{color: `${this.props.resultColor}`}}>{this.props.lastRoll}</div>
                    <div>Target: less than {this.props.lastTarget}</div>
                </div>

                {/* Multiplier */}
                <form>
                    <h4>Multiplier</h4>
                    <input
                        type='number'
                        value={this.props.multiplier}
                        onChange={this.updateMultiplier}
                        placeholder='Multiplier'
                    />
                    <label>{(this.props.target)} %</label>

                {/* Place bet */}
                <h4>Bet</h4>
                <input
                    type='number'
                    value={this.props.betAmount} 
                    onChange={this.handleBetChange}
                    placeholder='Your bet'
                />

                {/* Errors */}
                {this.state.errorMessage && 
                    <div>
                        Error: {this.state.errorMessage}
                    </div>}
                
                {/* Bet manipulation */}
                <button className='game-button' onClick={this.doubleBet}>
                    Double
                </button>

                <button className='game-button' onClick={this.halveBet}>
                    Half
                </button>
                </form>

                <button className='game-button' onClick={() => this.handleBet()}>
                    Roll
                </button>
            </div>
        )
    };
};