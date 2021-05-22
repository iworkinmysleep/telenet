import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button, Dropdown } from "react-bootstrap";

const HomePage = () => {
	return (
		<>
			<Jumbotron>
				<h1>Room Data</h1>
				<p>
					Use the Add Room button below to enter room data or use the dropdown
					menu below to view room data.
				</p>
				<p>
					<Link to="/addroom">
						<Button variant="primary">Add Room</Button>
					</Link>
				</p>
			</Jumbotron>
			<br />
			<br />
			<Dropdown>
				<Dropdown.Toggle variant="secondary" id="dropdown-basic">
					Select Room
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
					<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
					<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</>
	);
};

export default HomePage;
