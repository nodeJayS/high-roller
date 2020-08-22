import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavLink from 'react-bootstrap/NavLink';

import Login from './Login';
import Register from './Register';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.loadNav = this.loadNav.bind(this);
    }

    loadNav = () => {
        return (
        <div className='container'>
        <NavbarBrand >
            <NavLink>
            <h3>Casino</h3>
            </NavLink>
        </NavbarBrand>
        <Nav>
            <Login />
            <Register />
        </Nav>

        </div>
        )
    }
    render() {
        return (
            <Navbar>
                {this.loadNav()}
            </Navbar>
        )
    }
}
