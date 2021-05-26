import React from "react";
import { ListGroup, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Room = ({ room }) => {
	return (
		<ListGroup>
			<LinkContainer to={`/room/${room._id}`}>
				<Nav.Link>
					<ListGroup.Item variant="dark">{room.roomNumber}</ListGroup.Item>
				</Nav.Link>
			</LinkContainer>
		</ListGroup>
	);
};

export default Room;
