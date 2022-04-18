import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <Navbar sticky='top' bg="light" expand="lg" className="d-flex justify-content-around">
            <Container>
                <Nav.Link><img className='w-2' src={img} alt='' /></Nav.Link>
                <Nav className="d-flex justify-content-around align-items-center fw-bold">
                    <Nav.Link><Link className='text-decoration-none text-dark' to='/home'>Home</Link></Nav.Link>
                    <Nav.Link><Link className='text-decoration-none text-dark' to='/checkout'>CheckOut</Link></Nav.Link>
                    <Nav.Link><Link className='text-decoration-none text-dark' to='/blogs'>Blogs</Link></Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link><Link className='text-decoration-none text-dark' to='/about'>About</Link></Nav.Link>
                    <Nav.Link><Link className='text-decoration-none text-dark' to='/login'>Login</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;