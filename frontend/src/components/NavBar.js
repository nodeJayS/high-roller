import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// import Login from './Login';
// import Register from './Register';
import About from './About';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.loadNav = this.loadNav.bind(this);
    }

    loadNav = () => {
        return (
        <div className='container nav-container'>
            <div className='nav-title'>
                <h2>HIGH-ROLLER</h2>
            </div>
            <Nav>
                <About />
                <a href='https://github.com/nodeJayS/high-roller'><i className="fab fa-github"> </i>GITHUB</a>
            </Nav>
            {/* <Nav>
                <Login />
                <Register />
            </Nav> */}
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
