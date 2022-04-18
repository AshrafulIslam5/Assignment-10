import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import img from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="light">
            <Container>
                <Nav.Link><img className='w-2' src={img} alt='' /></Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="ms-auto text-center fw-bold">
                        <Nav.Link as={Link} to='home'> Home</Nav.Link>
                        <Nav.Link as={Link} to='blogs'> Blogs</Nav.Link>
                        <Nav.Link as={Link} to='about'> About</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto text-center'>
                        {user
                            ?
                            <button onClick={handleSignOut} className=''>signOut</button>
                            :
                            <Nav.Link as={Link} to='login'>Login</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;