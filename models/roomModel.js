import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
	roomNumber: {
		type: String,
		trim: true,
		required: [true, "Please add room number"],
	},
	speakerNum: {
		type: Number,
		required: true,
	},
	boardType: {
		type: String,
		required: true,
	},
	hasProjector: {
		type: Boolean,
		required: true,
	},
	projectorType: {
		type: String,
	},
	hasAP: {
		type: Boolean,
		required: true,
		default: true,
	},
	hasAlarm: {
		type: Boolean,
		required: true,
		default: false,
	},
	alarmType: {
		type: String,
	},
	hasDefect: {
		type: Boolean,
		required: true,
		default: false,
	},
	defectType: {
		type: String,
	},
	additionalInfo: {
		type: String,
	},
});

const Room = mongoose.model("Room", roomSchema);

export default Room;
