import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
	return (
		<header>
			<Navbar bg="primary" variant="dark">
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>Telenet Systems</Navbar.Brand>
					</LinkContainer>
					<Nav className='ml-auto'>
						<LinkContainer to='/addroom'>
							<Nav.Link>ROOM DATA FORM</Nav.Link>
						</LinkContainer>
					</Nav>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
