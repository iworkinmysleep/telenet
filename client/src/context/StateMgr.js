import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";
import axios from "axios";

// Initial State
const initialState = {
	roomData: [],
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

	return (
		<GlobalContext.Provider
			value={{
				roomData: state.roomData,
				error: state.error,
				fetchRoomData,
				deleteRoomData,
				addRoomData,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};
