import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
	roomNumber: {
		type: String,
		required: true,
	},
	teacherName: {
		type: String,
		required: true,
	},

	timestamps: true,
});

const Room = mongoose.model("Room", roomSchema);

export default Room;
