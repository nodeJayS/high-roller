import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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
            <div className='container'>
            <div className='game-body'>

            <div className='row'>
            <div className='col-sm'>
                {/* Seed generator */}
                <h4>Player Seed</h4>
                <input value={this.props.seed} readOnly={true} />
                <button className='game-button' onClick={this.randomizeSeed}>Randomize seed</button>
            </div>            
            <div className='col-sm'>
                {/* Balance */}
                <h4>Balance</h4>
                <div id='balance'>
                    $ {this.props.balance.toFixed(2)}
                </div> 
            </div>
            </div>

            <div className='row'>
            <div className='col-sm'>
                {/* Result and target indicator*/}
                <div>
                    <h2 className='game-result' style={{color: `${this.props.resultColor}`}}>RESULT: {this.props.lastRoll}</h2>
                    <div>Target: less than {this.props.lastTarget}</div>
                </div>
            </div>
            <div className='col-sm'>
                {/* Multiplier */}
                <Form>
                    <h4>Multiplier</h4>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>x</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        type='number'
                        value={this.props.multiplier}
                        onChange={this.updateMultiplier}
                        placeholder='Multiplier'
                    />
                    <InputGroup.Append>
                        <InputGroup.Text>{(this.props.target).toFixed(2)} %</InputGroup.Text>
                    </InputGroup.Append>
                    </InputGroup>

                    {/* Place bet */}
                    <h4>Bet</h4>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text><i className="fas fa-dollar-sign"></i></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        type='number'
                        value={this.props.betAmount} 
                        onChange={this.handleBetChange}
                        placeholder='Your bet'
                    />
                    </InputGroup>
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
                </Form>
            </div>
            </div>

                <button className='game-button' onClick={() => this.handleBet()}>
                    Roll
                </button>
            </div>
            </div>
        )
    };
};