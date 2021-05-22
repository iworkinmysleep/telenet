import React from "react";
import { Form, Button, Col } from "react-bootstrap";

const AddRoom = () => {
	return (
		<>
			<Form>
				<Form.Row>
					<Form.Group as={Col} controlId="roomNumber">
						<Form.Label>Enter room number</Form.Label>
						<Form.Control type="text" placeholder="Enter room number" />
					</Form.Group>
					<Form.Group as={Col} controlId="teacherName">
						<Form.Label>Teacher's name</Form.Label>
						<Form.Control type="text" placeholder="Enter teacher's name" />
					</Form.Group>
				</Form.Row>

				<Form.Group controlId="selectItem">
					<Form.Label>Select item</Form.Label>
					<Form.Control as="select">
						<option>Active Board</option>
						<option>Info Board</option>
						<option>Valcom Speaker</option>
					</Form.Control>
				</Form.Group>

				<Form.Group controlId="additionalInfo">
					<Form.Label>Additional Info</Form.Label>
					<Form.Control as="textarea" rows={3} />
				</Form.Group>
			</Form>
			<Form>
				<br />
				<Form.Group>
					<Form.File id="addImg" label="Add image" />
				</Form.Group>
				<br />
				<Button variant="primary" type="submit" value="Submit" size="lg">
					Add Room
				</Button>
			</Form>
		</>
	);
};

export default AddRoom;
