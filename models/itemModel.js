import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
	room: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "Room",
	},
	selectedItem: {
		type: String,
		required: true,
	},
	serial: {
		type: String,
		required: true,
	},
	qty: {
		type: Number,
		required: true,
		default: 1,
	},
	isDefect: {
		type: Boolean,
		required: true,
		default: false,
	},
	images: {
		type: String,
		required: false,
	},

	timestamps: true,
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
