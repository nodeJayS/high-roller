import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

let crypto = require('crypto');

export default class BetHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.historyTable = this.historyTable.bind(this);
    };
    
    toggleModal = () => {
        this.setState({
            show: !this.state.show
        })
    };

    historyTable = () => {
        return (
            <Table responsive variant='dark' className='game-history' borderless>
                <thead>
                    <tr>
                        <th>Bet Amount</th>
                        <th>Under Target</th>
                        <th>Multiplier</th>
                        <th>Roll</th>
                        <th>Profit</th>
                        <th>Provably-Fair</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.betHistory.slice(0).reverse().map((bet, index) =>
                        <tr key={index}>
                            <td>$ {parseFloat(bet.betAmount).toFixed(2)}</td>
                            <td>{bet.target}</td>
                            <td>x {bet.multiplier}</td>
                            <td>{bet.result}</td>
                            <td>{bet.winnings}</td>
                            <td>
                                <Button className='modal-button' size='sm' onClick={this.toggleModal}>Verify</Button>
                                <Modal show={this.state.show} onHide={this.toggleModal} size='lg'>
                                    <Modal.Header>
                                        <Modal.Title>Provably-Fair Verification</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <h4>Player seed</h4>
                                        <div>{bet.seed}</div>
                                        <h4>Game seed</h4>
                                        <div>{bet.seed + '_' + bet.timestamp + '_' + bet.nonce}</div>
                                        <h4>Game hash (sha256)</h4>
                                        <div>{crypto.createHash('sha256').update(bet.seed + '_' + bet.timestamp + '_' + bet.nonce).digest('hex')}</div>
                                        <h4>Timestamp</h4>
                                        <div>{bet.timestamp}</div>
                                        <h4>Nonce</h4>
                                        <div>{bet.nonce}</div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <button className='game-button' onClick={this.toggleModal}>Close</button>
                                    </Modal.Footer>
                                </Modal>
                                
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        )
    };

    render() {
        return (
            <div className='container'>
                <h4 className='history-title'>History</h4>
                <div>{this.historyTable()}</div>
            </div>
        )
    };
};
