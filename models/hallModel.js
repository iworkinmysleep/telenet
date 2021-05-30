import mongoose from "mongoose";

const hallSchema = mongoose.Schema({
	hallSection: {
		type: String,
		trim: true,
		required: [true, "Please enter hall section"],
	},
	speakerArea: {
		type: String,
		required: [true, "Please enter speaker area"],
	},
	hasRestroom: {
		type: Boolean,
		required: true,
	},
	restroomType: {
		type: String,
	},
	hasCamera: {
		type: Boolean,
		required: true,
	},
	cameraType: {
		type: String,
	},
	hasAP: {
		type: Boolean,
		required: true,
	},
	apType: {
		type: String,
		require: true,
	},
	hasAlarm: {
		type: Boolean,
		required: true,
	},
	alarmType: {
		type: String,
	},
	hasDefect: {
		type: Boolean,
		required: true,
	},
	defectType: {
		type: String,
	},
	additionalInfo: {
		type: String,
	},
});

const Hall = mongoose.model("Hall", hallSchema);

export default Hall;
