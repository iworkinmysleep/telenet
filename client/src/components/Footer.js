import React from "react";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
	return (
		<footer className='bg-primary text-white'>
			<Row>
				<Col className="text-center py-3">Copyright &copy; Telenet Systems</Col>
			</Row>
		</footer>
	);
};

export default Footer;
