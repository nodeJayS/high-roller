import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    };
    
    toggleModal = () => {
        this.setState({
            show: !this.state.show
        })
    };

    render() {
        return (
            <div>
                <div onClick={this.toggleModal}>REGISTER</div>
                <Modal show={this.state.show} onHide={this.toggleModal} size='lg' animation={false}>
                    <Form>
                        <Modal.Header>
                                <Modal.Title>REGISTER</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                        <Form.Group>
                            <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text><icon className="fas fa-user"></icon></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                placeholder="Username"
                            />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text><i class="fas fa-key"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                            <Form.Control type="string" readOnly/>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <Form.Check
                                type="radio"
                                name="formHorizontalRadios"
                            />
                            
                            <Form.Check
                                type="radio"
                                label="I don’t want a way to recover my account. If I forget my password, please lock my account permanently."
                                name="formHorizontalRadios"
                            />
                        </Form.Group>

                        </Modal.Body>

                        <Modal.Footer>
                            <Form.Check type="checkbox" label="I have read and agreed to the terms of service." />
                            <button className='btn btn-primary' type='submit' onClick={this.toggleModal}>Submit</button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        )
    }
}
