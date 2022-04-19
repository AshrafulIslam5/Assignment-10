import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import img from '../../../images/logo.png';
import profilePhoto from '../../../images/user.png';
import HeaderLoading from './HeaderLoading/HeaderLoading';
import './Header.css';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    if (user?.photoURL === null) {
        user.photoURL = profilePhoto;
    }
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="light">
            <Container>
                <Nav.Link as={Link} to='/home' className='d-flex flex-column align-items-center'><img className='w-2' src={img} alt='' /></Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="ms-auto text-center fw-bold">
                        <Nav.Link as={Link} to='home'> Home</Nav.Link>
                        <Nav.Link as={Link} to='blogs'> Blogs</Nav.Link>
                        <Nav.Link as={Link} to='about'> About</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto text-center'>
                        {
                            loading ? <HeaderLoading></HeaderLoading>:
                                user
                                    ?
                                    <>
                                        <button onClick={handleSignOut} className='btn btn-link text-decoration-none'>SignOut</button>
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <p className='text-black mt-3'>{user.displayName}</p>
                                            <img style={{ width: '40px', height: '40px' }} className='ms-2 rounded-circle' src={user.photoURL} alt="" />
                                        </div>
                                    </>
                                    :
                                    <Nav.Link as={Link} to='login'>Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;