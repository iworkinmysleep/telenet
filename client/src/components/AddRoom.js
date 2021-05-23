import { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import AddItem from "./AddItem";


const AddRoom = () => {
	const [roomNumber, setRoomNumber] = useState("");
	const [teacherName, setTeacherName] = useState("");
	const [items, setItems] = useState([])


	return (
		<>
			<Container>
				<Form>
					<Row>
						<Form.Group as={Col} controlId="roomNumber" md="auto">
							<Form.Label>Room Number</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter room number"
								value={roomNumber}
								onChange={(e) => setRoomNumber(e.target.value)}
							/>
						</Form.Group>

						<Form.Group as={Col} controlId="teacherName" md="auto">
							<Form.Label>Teacher Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter teacher's name"
								value={teacherName}
								onChange={(e) => setTeacherName(e.target.value)}
							/>
						</Form.Group>
					</Row>
					<div className="my-5">
						<AddItem teacherName={teacherName} roomNumber={roomNumber} items={items} setItems={setItems}/>
					</div>
					<Button>Upload Room Data</Button>
				</Form>
			</Container>
		</>
	);
};

export default AddRoom;
