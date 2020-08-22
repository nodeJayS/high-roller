import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    };

    toggleModal = () => {
        this.setState({
            show: !this.state.show
        })
    };

    render() {
        return (
            <div>
                <div onClick={this.toggleModal}><i className="fas fa-question-circle"> </i>ABOUT</div>
                <Modal show={this.state.show} onHide={this.toggleModal} size='lg'>
                    <Modal.Header>
                        <Modal.Title>ABOUT US</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div>High-roller is a provably fair dice game with a 1% house edge.</div>
                    </Modal.Body>

                    <Modal.Footer>
                        <button className='btn btn-primary' type='submit' onClick={this.toggleModal}>Close</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    };
};