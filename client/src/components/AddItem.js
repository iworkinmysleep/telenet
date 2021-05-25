import axios from "axios";
import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import ItemList from "./ItemList";

const AddItem = () => {
	const [roomData, setRoomData] = useState({
		roomNumber: "",
		speakerNum: 1,
		boardType: "",
		hasAP: true,
		hasAlarm: false,
		alarmType: "",
		hasDefect: false,
		defectType: "",
		additionalInfo: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleChange = (e) => {
		setRoomData({ [e.target.name]: e.target.value });
	};

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Row>
					<Form.Group as={Col} controlId="roomNumber" md="auto">
						<Form.Label>Room Number</Form.Label>
						<Form.Control
							type="text"
							name="roomNumber"
							placeholder="Enter room number..."
							value={roomData.roomNumber}
							onChange={handleChange}
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="speakerNum" md="auto">
						<Form.Label>Number of Speakers</Form.Label>
						<Form.Control
							type="number"
							name="speakerNum"
							value={roomData.speakerNum}
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group as={Col} controlId="boardType">
						<Form.Label>Board Type</Form.Label>
						<Form.Control
							as="select"
							name="boardType"
							value={roomData.boardType}
							onChange={handleChange}>
							<option>Choose...</option>
							<option>Activ</option>
							<option>Viewsonic</option>
							<option>No Board</option>
						</Form.Control>
					</Form.Group>
					<Form.Group as={Col} id="hasAP" className="my-3">
						<Form.Check
							className="my-4"
							type="checkbox"
							name="hasAP"
							label="Access Point?"
							checked={roomData.hasAP}
							onChange={handleChange}
						/>
					</Form.Group>
				</Row>
				<Row>
					<Form.Group as={Col} id="hasAlarm" className="my-3">
						<Form.Check
							className="my-4"
							type="checkbox"
							name="hasAlarm"
							label="Please check if there are any fire alarm devices?"
							checked={roomData.hasAlarm}
							onChange={handleChange}
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="alarmType">
						<Form.Label>If So, Enter Device </Form.Label>
						<Form.Control
							type="text"
							name="alarmType"
							placeholder="Enter alarm device..."
							value={roomData.alarmType}
							onChange={handleChange}
						/>
					</Form.Group>
				</Row>
				<Row>
					<Form.Group as={Col} id="hasDefect" className="my-3">
						<Form.Check
							className="my-4"
							type="checkbox"
							name="hasDefect"
							label="Please check if there's a defective item"
							checked={roomData.hasDefect}
							onChange={handleChange}
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="defectType">
						<Form.Label>If So, Enter Item(s)</Form.Label>
						<Form.Control
							as="textarea"
							name="defectType"
							placeholder="Enter defective items and give brief description of defect..."
							value={roomData.defectType}
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group controlId="additionalInfo">
						<Form.Label>Additional Info</Form.Label>
						<Form.Control
							as="textarea"
							name="additionalInfo"
							placeholder="Please enter any additional info..."
							value={roomData.additionalInfo}
							onChange={handleChange}
						/>
					</Form.Group>
				</Row>

				<Button variant="primary" type="submit" size="lg" className='my-5'>
					Add Room
				</Button>
			</Form>

			<ItemList />
		</>
	);
};

export default AddItem;
