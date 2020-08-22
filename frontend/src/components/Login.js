import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default class Login extends Component {
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
                <div onClick={this.toggleModal}>LOGIN</div>
                <Modal show={this.state.show} onHide={this.toggleModal} size='lg' animation={false}>
                    <Form>
                        <Modal.Header>
                                <Modal.Title>LOGIN</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                        <Form.Group>
                            <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text><i className="fas fa-user"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                placeholder="Username"
                            />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text><i className="fas fa-key"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                            <Form.Control type="string" placeholder='Password'/>
                            </InputGroup>
                        </Form.Group>
                        </Modal.Body>

                        <Modal.Footer>
                            <button className='btn btn-primary' type='submit' onClick={this.toggleModal}>Submit</button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        )
    }
}
