import React, { useContext } from "react";
import { GlobalContext } from "../context/StateMgr";
import { Modal, Button, Row, Col, Container } from "react-bootstrap";
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
				className="text-center">
				<Modal.Header closeButton>
					<Modal.Title>{roomInfo.roomNumber}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<small>Check over data and edit if necessary.</small>
					<Container className='my-5'>
						<Row>
							<Col>
								<h5 className="text-info">Number of speakers</h5>
								{roomInfo.speakerNum}
							</Col>
							<Col>
								<h5 className="text-info">Board type</h5>
								{roomInfo.boardType}
							</Col>
							{roomInfo.hasAP && (
								<Col>
									<h5 className="text-info">Access point info</h5>
									{roomInfo.apType}
								</Col>
							)}
						</Row>
						<Row>
							{roomInfo.hasProjector && (
								<Col>
									<h5 className="text-info">Projector info</h5>
									{roomInfo.projectorType}
								</Col>
							)}
							{roomInfo.hasAlarm && (
								<Col>
									<h5 className="text-info">Fire alarm device info</h5>
									{roomInfo.alarmType}
								</Col>
							)}
							{roomInfo.hasDefect && (
								<Col>
									<h5 className="text-info">Defective items info</h5>
									{roomInfo.defectType}
								</Col>
							)}
						</Row>
						<Row className='my-5'>
							<Col>
								<h5 className="text-info">Additional info</h5>
								{roomInfo.additionalInfo}
							</Col>
						</Row>
					</Container>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="info" onClick={onHide}>
						Edit
					</Button>
					<LinkContainer to="/">
						<Button onClick={() => addRoomData(roomInfo)}>Add Room</Button>
					</LinkContainer>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Confirm;
