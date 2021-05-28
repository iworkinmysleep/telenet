import React, { useContext, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { GlobalContext } from "../context/StateMgr";
import { LinkContainer } from "react-router-bootstrap";

const Home = () => {
	const { roomData, fetchRoomData } = useContext(GlobalContext);

	useEffect(() => {
		fetchRoomData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="text-white text-center">
			<h1 className="mt-5">Southeast High School</h1>
			<p className="text-center">Select a classroom number to see items</p>
			<Dropdown size="lg">
				<Dropdown.Toggle variant="secondary" className="text-center">
					Choose classroom...
				</Dropdown.Toggle>
				<Dropdown.Menu>
					{roomData.map((room) => (
						<LinkContainer to={`/room/${room._id}`} key={room._id}>
							<Dropdown.Item as="button">
								{room.roomNumber}
							</Dropdown.Item>
						</LinkContainer>
					))}
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

export default Home;
