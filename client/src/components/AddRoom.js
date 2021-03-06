import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ConfirmRoom from "./ConfirmRoom";

const AddRoom = () => {
	const [roomInfo, setRoomInfo] = useState({});
	const [roomNumber, setRoomNumber] = useState("");
	const [speakerNum, setSpeakerNum] = useState(2);
	const [boardType, setBoardType] = useState("Choose...");
	const [hasAP, setHasAP] = useState(true);
	const [apType, setAPType] = useState("");
	const [hasProjector, setHasProjector] = useState(false);
	const [projectorType, setProjectorType] = useState("");
	const [hasAlarm, setHasAlarm] = useState(false);
	const [alarmType, setAlarmType] = useState("");
	const [hasDefect, setHasDefect] = useState(false);
	const [defectType, setDefectType] = useState("");
	const [additionalInfo, setAdditionalInfo] = useState("");

	const [modalShow, setModalShow] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setModalShow(true);
		setRoomInfo({
			roomNumber,
			speakerNum,
			boardType,
			hasAP,
			apType,
			hasProjector,
			projectorType,
			hasAlarm,
			alarmType,
			hasDefect,
			defectType,
			additionalInfo,
		});
	};

	return (
		<>
			<Link to="/" className="btn btn-secondary my-3">
				Go Back
			</Link>
			<div className="text-white">
				<h2 className="m-5">Add Room Data</h2>
				<Form onSubmit={handleSubmit}>
					<Row>
						<Form.Group as={Col} controlId="roomNumber" md="auto">
							<Form.Label>Room Number</Form.Label>
							<Form.Control
								type="text"
								name="roomNumber"
								placeholder="Enter room number..."
								value={roomNumber}
								onChange={(e) => setRoomNumber(e.target.value)}
							/>
						</Form.Group>

						<Form.Group as={Col} controlId="speakerNum" md="auto">
							<Form.Label>Number of Speakers</Form.Label>
							<Form.Control
								type="number"
								value={speakerNum}
								onChange={(e) => setSpeakerNum(e.target.value)}
							/>
						</Form.Group>
						<Form.Group as={Col} controlId="boardType" md={2}>
							<Form.Label>Board Type</Form.Label>
							<Form.Control
								as="select"
								value={boardType}
								onChange={(e) => setBoardType(e.target.value)}>
								<option>Choose...</option>
								<option>Activ</option>
								<option>Viewsonic</option>
								<option>No Board</option>
							</Form.Control>
						</Form.Group>
						<Form.Group as={Col} id="hasAP" className="my-3 mx-5">
							<Form.Check
								className="my-4"
								type="checkbox"
								label="Access Point?"
								checked={hasAP}
								onChange={(e) => setHasAP(e.target.checked)}
							/>
						</Form.Group>
						<Form.Group as={Col} controlId="APType" md={4}>
							<Form.Label>AP info</Form.Label>
							<Form.Control
								type="text"
								placeholder="Access Point info..."
								value={apType}
								onChange={(e) => setAPType(e.target.value)}
								md={2}
							/>
						</Form.Group>
					</Row>
					<Row>
						<Form.Group as={Col} id="hasProjector" className="my-3" md={3}>
							<Form.Check
								className="my-4"
								type="checkbox"
								label="Check box if room has a projector?"
								checked={hasProjector}
								onChange={(e) => setHasProjector(e.target.checked)}
							/>
						</Form.Group>

						<Form.Group as={Col} controlId="projectorType">
							<Form.Label>If So, Enter Brand </Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter projector brand..."
								value={projectorType}
								onChange={(e) => setProjectorType(e.target.value)}
							/>
						</Form.Group>
					</Row>
					<Row>
						<Form.Group as={Col} id="hasAlarm" className="my-3" md={3}>
							<Form.Check
								className="my-4"
								type="checkbox"
								label="Check box if room has any fire alarm devices?"
								checked={hasAlarm}
								onChange={(e) => setHasAlarm(e.target.checked)}
							/>
						</Form.Group>

						<Form.Group as={Col} controlId="alarmType">
							<Form.Label>If So, Enter Device </Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter alarm device..."
								value={alarmType}
								onChange={(e) => setAlarmType(e.target.value)}
							/>
						</Form.Group>
					</Row>
					<Row>
						<Form.Group as={Col} id="hasDefect" className="my-3" md={3}>
							<Form.Check
								className="my-4"
								type="checkbox"
								label="Check box if there's a defective item"
								checked={hasDefect}
								onChange={(e) => setHasDefect(e.target.checked)}
							/>
						</Form.Group>

						<Form.Group as={Col} controlId="defectType">
							<Form.Label>If So, Enter Item(s)</Form.Label>
							<Form.Control
								as="textarea"
								placeholder="Enter defective items and give brief description of defect..."
								value={defectType}
								onChange={(e) => setDefectType(e.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="additionalInfo">
							<Form.Label>Additional Info</Form.Label>
							<Form.Control
								as="textarea"
								placeholder="Please enter any additional info..."
								value={additionalInfo}
								onChange={(e) => setAdditionalInfo(e.target.value)}
							/>
						</Form.Group>
					</Row>

					<Button variant="primary" type="submit" size="lg" className="my-5">
						Add Room
					</Button>
					<ConfirmRoom
						show={modalShow}
						onHide={() => setModalShow(false)}
						roomInfo={roomInfo}
					/>
				</Form>
			</div>
		</>
	);
};

export default AddRoom;
