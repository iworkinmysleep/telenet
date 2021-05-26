import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Room from "./Room";
import { GlobalContext } from "../context/StateMgr";

const Home = () => {
	const { roomData, fetchRoomData } = useContext(GlobalContext);

	useEffect(() => {
		fetchRoomData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<h1 className="text-center">Southeast High School</h1>
			<p className="text-center">Click on a classroom number to see items</p>
			<Row>
				{roomData.map((room) => (
					<Col key={room._id} md={2} className="text-center">
						<Room room={room} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default Home;
