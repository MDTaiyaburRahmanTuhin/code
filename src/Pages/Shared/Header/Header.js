import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { users, logOut } = useAuth();
    return (
        <>
            <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Animal Care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/addservice">Addservice</Nav.Link>
                        <Nav.Link as={HashLink} to="/myorder">MyOrder</Nav.Link>

                        {users?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link href="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            Signed in as: <Link to="/login">{users?.displayName}</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;