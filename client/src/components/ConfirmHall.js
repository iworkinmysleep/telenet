import React, { useContext } from "react";
import { GlobalContext } from "../context/StateMgr";
import { Modal, Button, Row, Col, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ConfirmHall = ({ show, onHide, hallInfo }) => {
	const { addHallData } = useContext(GlobalContext);
	return (
		<>
			<Modal
				show={show}
				onHide={onHide}
				size="lg"
				animation={false}
				className="text-center">
				<Modal.Header closeButton>
					<Modal.Title>{hallInfo.hallSection}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<small>Check over data and edit if necessary.</small>
					<Container className="my-5">
						<Row>
							<Col>
								<h5 className="text-info">Speaker Area</h5>
								{hallInfo.speakerArea}
							</Col>

							{hallInfo.hasRestroom && (
								<Col>
									<h5 className="text-info">Restroom info</h5>
									{hallInfo.restroomType}
								</Col>
							)}
							{hallInfo.hasAP && (
								<Col>
									<h5 className="text-info">Access point info</h5>
									{hallInfo.apType}
								</Col>
							)}
						</Row>
						<Row>
							{hallInfo.hasCamera && (
								<Col>
									<h5 className="text-info">Camera info</h5>
									{hallInfo.cameraType}
								</Col>
							)}
							{hallInfo.hasAlarm && (
								<Col>
									<h5 className="text-info">Fire alarm device info</h5>
									{hallInfo.alarmType}
								</Col>
							)}
							{hallInfo.hasDefect && (
								<Col>
									<h5 className="text-info">Defective items info</h5>
									{hallInfo.defectType}
								</Col>
							)}
						</Row>
						<Row className="my-5">
							<Col>
								<h5 className="text-info">Additional info</h5>
								{hallInfo.additionalInfo}
							</Col>
						</Row>
					</Container>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="info" onClick={onHide}>
						Edit
					</Button>
					<LinkContainer to="/">
						<Button onClick={() => addHallData(hallInfo)}>
							Add Hall and Restroom Data
						</Button>
					</LinkContainer>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default ConfirmHall;
