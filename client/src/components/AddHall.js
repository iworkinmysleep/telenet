import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ConfirmHall from "./ConfirmHall";

const AddHall = () => {
	const [hallInfo, setHallInfo] = useState({});
	const [hallSection, setHallSection] = useState("");
	const [speakerArea, setSpeakerArea] = useState("");
	const [hasRestroom, setHasRestroom] = useState(false);
	const [restroomType, setRestroomType] = useState("");
	const [hasAP, setHasAP] = useState(false);
	const [apType, setAPType] = useState("");
	const [hasCamera, setHasCamera] = useState(false);
	const [cameraType, setCameraType] = useState("");
	const [hasAlarm, setHasAlarm] = useState(false);
	const [alarmType, setAlarmType] = useState("");
	const [hasDefect, setHasDefect] = useState(false);
	const [defectType, setDefectType] = useState("");
	const [additionalInfo, setAdditionalInfo] = useState("");

	const [modalShow, setModalShow] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setModalShow(true);
		setHallInfo({
			hallSection,
			speakerArea,
			hasRestroom,
			restroomType,
			hasAP,
			apType,
			hasCamera,
			cameraType,
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
				<h2 className="m-5">Add Hall and Restroom Data</h2>
				<Form onSubmit={handleSubmit}>
					<Row>
						<Form.Group as={Col} controlId="hallArea" md="auto">
							<Form.Label>Hall Section</Form.Label>
							<Form.Control
								type="text"
								name="hallSection"
								placeholder="Enter hallway section..."
								value={hallSection}
								onChange={(e) => setHallSection(e.target.value)}
							/>
						</Form.Group>

						<Form.Group as={Col} controlId="speakerArea" md="auto">
							<Form.Label>Speaker Area in Hallway</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter speaker(s) area..."
								value={speakerArea}
								onChange={(e) => setSpeakerArea(e.target.value)}
							/>
						</Form.Group>

						<Form.Group as={Col} id="hasRestroom" className="my-3 mx-5">
							<Form.Check
								className="my-4"
								type="checkbox"
								label="Check if hallway has a restroom"
								checked={hasRestroom}
								onChange={(e) => setHasRestroom(e.target.checked)}
							/>
						</Form.Group>
						<Form.Group as={Col} controlId="restroomType" md={4}>
							<Form.Label>Restroom Info</Form.Label>
							<Form.Control
								type="text"
								placeholder="Restroom info..."
								value={restroomType}
								onChange={(e) => setRestroomType(e.target.value)}
								md={2}
							/>
						</Form.Group>
					</Row>
					<Row>
						<Form.Group as={Col} id="hasAP" className="my-3" md={3}>
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
						<Form.Group as={Col} id="hasCamera" className="my-3" md={3}>
							<Form.Check
								className="my-4"
								type="checkbox"
								label="Check box if hallway has a camera(s)"
								checked={hasCamera}
								onChange={(e) => setHasCamera(e.target.checked)}
							/>
						</Form.Group>

						<Form.Group as={Col} controlId="projectorType">
							<Form.Label>If So, Enter Camera Info </Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter camera info..."
								value={cameraType}
								onChange={(e) => setCameraType(e.target.value)}
							/>
						</Form.Group>
					</Row>
					<Row>
						<Form.Group as={Col} id="hasAlarm" className="my-3" md={3}>
							<Form.Check
								className="my-4"
								type="checkbox"
								label="Check box if hallway has any fire alarm devices"
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
						Add Hall
					</Button>
					<ConfirmHall
						show={modalShow}
						onHide={() => setModalShow(false)}
						hallInfo={hallInfo}
					/>
				</Form>
			</div>
		</>
	);
};

export default AddHall;
