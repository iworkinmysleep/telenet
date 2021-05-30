import React, { useContext, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { GlobalContext } from "../context/StateMgr";
import { LinkContainer } from "react-router-bootstrap";

const Home = () => {
	const { roomData, fetchRoomData, hallData, fetchHallData } =
		useContext(GlobalContext);

	useEffect(() => {
		fetchRoomData();
		fetchHallData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="text-white text-center">
			<h1 className="mt-5">Southeast High School</h1>
			<div className="class-section my-5">
				<p className="text-center text-info">Select a <strong>classroom</strong> number to see items</p>
				<Dropdown size="lg">
					<Dropdown.Toggle variant="secondary" className="text-center">
						Choose classroom...
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{roomData.map((room) => (
							<LinkContainer to={`/room/${room._id}`}>
								<Dropdown.Item key={room._id}>{room.roomNumber}</Dropdown.Item>
							</LinkContainer>
						))}
					</Dropdown.Menu>
				</Dropdown>
			</div>
			<div className="hallway-section my-5">
				<p className="text-center text-info">Select a <strong>hallway</strong> section to see items</p>
				<Dropdown size="lg">
					<Dropdown.Toggle variant="secondary" className="text-center">
						Choose hallway...
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{hallData.map((hall) => (
							<LinkContainer to={`/hall/${hall._id}`}>
								<Dropdown.Item key={hall._id}>{hall.hallSection}</Dropdown.Item>
							</LinkContainer>
						))}
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</div>
	);
};

export default Home;
