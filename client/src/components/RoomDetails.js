import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/StateMgr";

const RoomDetails = ({ match }) => {
	const { roomData, listRoomDetails } = useContext(GlobalContext);
  

	useEffect(() => {
		listRoomDetails(match.params.id);
      // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [match]);

	return (
		<div>
			<h1>{roomData.roomNumber}</h1>
		</div>
	);
};

export default RoomDetails;
