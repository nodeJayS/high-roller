import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

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
            <Table>
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Under Target</th>
                        <th>Roll</th>
                        <th>Winnings</th>
                        <th>Provably-Fair</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.betHistory.slice(0).reverse().map((bet, index) =>
                        <tr key={index}>
                            <td>${parseFloat(bet.betAmount).toFixed(2)}</td>
                            <td>{bet.target}</td>
                            <td>{bet.result}</td>
                            <td>{bet.winnings}</td>
                            <td>
                                <button onClick={this.toggleModal}>Verify</button>
                                <Modal show={this.state.show} onHide={this.toggleModal} size='lg' animation={false}>
                                    <Modal.Header>
                                        <Modal.Title>Provably-Fair Verification</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <h4>Seed</h4>
                                        <div>{bet.seed}</div>
                                        <h4>Timestamp</h4>
                                        <div>{bet.timestamp}</div>
                                        <h4>Nonce</h4>
                                        <div>{bet.nonce}</div>
                                        <h4>Game seed</h4>
                                        <div>{bet.seed + '_' + bet.timestamp + '_' + bet.nonce}</div>
                                        <h4>Game hash (sha256)</h4>
                                        <div>{crypto.createHash('sha256').update(bet.seed + '_' + bet.timestamp + '_' + bet.nonce).digest('hex')}</div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <button onClick={this.toggleModal}>Close</button>
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
            <div>
                <h4>History</h4>
                <div>{this.historyTable()}</div>
            </div>
        )
    };
};