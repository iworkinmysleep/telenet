import React, { useContext } from "react";
import { GlobalContext } from "../context/StateMgr";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Confirm = ({ show, onHide, roomInfo }) => {
	const { addRoomData } = useContext(GlobalContext);
	return (
		<>
			<Modal
				show={show}
				onHide={onHide}
				size="lg"
				animation={false}
				centered>
				<Modal.Header closeButton>
					<Modal.Title>
						{roomInfo.roomNumber}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<small>Check over data and edit if necessary.</small>
					<Row>
						<Col md={4}>
							<h5 className="text-info">Number of speakers</h5>
						</Col>
						<Col>{roomInfo.speakerNum}</Col>
					</Row>
					<Row>
						<Col md={4}>
							<h5 className="text-info">Board type</h5>
						</Col>
						<Col>{roomInfo.boardType}</Col>
					</Row>
					{roomInfo.hasAP && (
						<Row>
							<Col md={4}>
								<h5 className="text-info">Access point info</h5>
							</Col>
							<Col>{roomInfo.apType}</Col>
						</Row>
					)}
					{roomInfo.hasProjector && (
						<Row>
							<Col md={4}>
								<h5 className="text-info">Projector info</h5>
							</Col>
							<Col>{roomInfo.projectorType}</Col>
						</Row>
					)}
					{roomInfo.hasAlarm && (
						<Row>
							<Col md={4}>
								<h5 className="text-info">Fire alarm device info</h5>
							</Col>
							<Col>{roomInfo.alarmType}</Col>
						</Row>
					)}
					{roomInfo.hasDefect && (
						<Row>
							<Col md={4}>
								<h5 className="text-info">Defective items info</h5>
							</Col>
							<Col>{roomInfo.defectType}</Col>
						</Row>
					)}
					<Row>
						<Col md={4}>
							<h5 className="text-info">Additional info</h5>
						</Col>
						<Col>{roomInfo.additionalInfo}</Col>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="info" onClick={onHide}>Edit</Button>
					<LinkContainer to="/">
						<Button onClick={() => addRoomData(roomInfo)}>Add Room</Button>
					</LinkContainer>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Confirm;
