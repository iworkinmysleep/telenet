import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";
import axios from "axios";

// Initial State
const initialState = {
	roomData: [],
	hallData: [],
	error: null,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Actions
	async function fetchRoomData() {
		try {
			const res = await axios.get("/api/roomdata");

			dispatch({
				type: "FETCH_ROOM_DATA",
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: "ROOM_DATA_ERROR",
				payload: err.response,
			});
		}
	}

	async function deleteRoomData(id) {
		try {
			await axios.delete(`/api/roomdata/${id}`);

			dispatch({
				type: "DELETE_ROOM_DATA",
				payload: id,
			});
		} catch (err) {
			dispatch({
				type: "ROOM_DATA_ERROR",
				payload: err.response,
			});
		}
	}

	async function addRoomData(room) {
		const config = {
			headers: {
				"Content-type": "application/json",
			},
		};
		try {
			const res = await axios.post("/api/roomdata", room, config);
			dispatch({
				type: "ADD_ROOM_DATA",
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: "ROOM_DATA_ERROR",
				payload: err.response,
			});
		}
	}
	async function fetchHallData() {
		try {
			const res = await axios.get("/api/halldata");

			dispatch({
				type: "FETCH_HALL_DATA",
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: "HALL_DATA_ERROR",
				payload: err.response,
			});
		}
	}

	async function deleteHallData(id) {
		try {
			await axios.delete(`/api/halldata/${id}`);

			dispatch({
				type: "DELETE_HALL_DATA",
				payload: id,
			});
		} catch (err) {
			dispatch({
				type: "HALL_DATA_ERROR",
				payload: err.response,
			});
		}
	}

	async function addHallData(hall) {
		const config = {
			headers: {
				"Content-type": "application/json",
			},
		};
		try {
			const res = await axios.post("/api/halldata", hall, config);
			dispatch({
				type: "ADD_HALL_DATA",
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: "HALL_DATA_ERROR",
				payload: err.response,
			});
		}
	}

	return (
		<GlobalContext.Provider
			value={{
				roomData: state.roomData,
				hallData: state.hallData,
				error: state.error,
				fetchRoomData,
				deleteRoomData,
				addRoomData,
				fetchHallData,
				addHallData,
				deleteHallData,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};
