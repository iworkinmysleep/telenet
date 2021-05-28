import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/StateMgr";
import { Jumbotron, Table, Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const RoomDetails = ({ history }) => {
	const [details, setDetails] = useState([]);
	const params = useParams();
	const { deleteRoomData } = useContext(GlobalContext);

	useEffect(() => {
		const fetchDetails = async () => {
			const res = await axios.get(`/api/roomdata/${params.id}`);
			setDetails(res.data);
		};
		fetchDetails();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const deleteHandler = () => {
		if (window.confirm("Are you sure?")) {
			deleteRoomData(details._id);
		}
		history.push("/");
	};

	return (
		<>
			<Link to="/" className="btn btn-secondary my-3">
				Go Back
			</Link>
			<Jumbotron className="text-center">
				<h2>Room Number {details.roomNumber}</h2>
				<Table
					striped
					bordered
					hover
					size="sm"
					variant="dark"
					responsive
					className="tbl-sm my-3">
					<thead>
						<tr>
							<th>Speaker Qty</th>
							<th>Board Type</th>
							{details.hasAP && <th>Access Point</th>}
							{details.hasProjector && <th>Projector</th>}
							{details.hasAlarm && <th>Fire Alarm Device(s)</th>}
							<th>Defective Items</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{details.speakerNum}</td>
							<td>{details.boardType}</td>
							{details.hasAP && <td>{details.apType}</td>}
							{details.hasProjector && <td>{details.projectorType}</td>}
							{details.hasAlarm && <td>{details.alarmType}</td>}
							<td>
								{details.isDefect ? (
									<small>Defective</small>
								) : (
									<small>Good Condition</small>
								)}
							</td>
						</tr>
					</tbody>
				</Table>
				<h4>Additional Information</h4>
				<Card
					style={{ width: "50vw", margin: "auto" }}
					className="bg-dark"
					body>
					{details.additionalInfo}
				</Card>
				<Button
					variant="danger"
					size="lg"
					className="my-3"
					onClick={deleteHandler}>
					<i className="fas fa-trash mx-2"></i>
					Delete Room Data
				</Button>
			</Jumbotron>
		</>
	);
};

export default RoomDetails;
