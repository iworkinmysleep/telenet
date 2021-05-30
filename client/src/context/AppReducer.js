export const AppReducer = (state, action) => {
	switch (action.type) {
		case "FETCH_ROOM_DATA":
			return {
				...state,
				roomData: action.payload,
			};
		case "DELETE_ROOM_DATA":
			return {
				...state,
				roomData: state.roomData.filter((room) => room._id !== action.payload),
			};
		case "ADD_ROOM_DATA":
			return {
				...state,
				roomData: [...state.roomData, action.payload],
			};
		case "FETCH_HALL_DATA":
			return {
				...state,
				hallData: action.payload,
			};
		case "DELETE_HALL_DATA":
			return {
				...state,
				hallData: state.hallData.filter((hall) => hall._id !== action.payload),
			};
		case "ADD_HALL_DATA":
			return {
				...state,
				hallData: [...state.hallData, action.payload],
			};
		default:
			return state;
	}
};
