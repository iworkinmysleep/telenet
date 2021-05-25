import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
	return (
		<header>
			<Navbar bg="primary" variant="dark">
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>Telenet Systems</Navbar.Brand>
					</LinkContainer>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
