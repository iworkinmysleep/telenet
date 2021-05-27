import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RoomDetails = () => {
	const [details, setDetails] = useState([]);
	const params = useParams();

	useEffect(() => {
		const fetchDetails = async () => {
			const res = await axios.get(
				`/api/roomdata/${params.id}`
			);
			setDetails(res.data);
		};
		fetchDetails();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<h1>{details.roomNumber}</h1>
		</>
	);
};

export default RoomDetails;
