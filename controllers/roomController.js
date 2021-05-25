import Room from "../models/roomModel.js";
import asyncHandler from "express-async-handler";

// @desc    Get all rooms
// @route   GET /api/roomitems
// @access  Public
const getRoomItems = asyncHandler(async (req, res) => {
	const roomItems = await Room.find({});
	res.json(roomItems);
});

// @desc    Add room item
// @route   POST /api/roomitems
// @access  Public
const addRoomItem = async (req, res, next) => {
	try {
		const { roomNumber, teacherName, selectedItem, serial, qty, isDefect } =
			req.body;

		const roomItem = await Room.create(req.body);

		return res.status(201).json({
			success: true,
			data: roomItem,
		});
	} catch (err) {
		if (err.name === "ValidationError") {
			const messages = Object.values(err.errors).map((val) => val.message);

			return res.status(400).json({
				success: false,
				error: messages,
			});
		} else {
			return res.status(500).json({
				success: false,
				error: "Server Error",
			});
		}
	}
};

// @desc    Delete room item
// @route   DELETE /api/roomitems/:id
// @access  Public
const deleteRoomItem = async (req, res, next) => {
	try {
		const roomItem = await Room.findById(req.params.id);

		if (!roomItem) {
			return res.status(404).json({
				success: false,
				error: "No room item found",
			});
		}

		await roomItem.remove();

		return res.status(200).json({
			success: true,
			data: {},
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: "Server Error",
		});
	}
};

export { getRoomItems, deleteRoomItem, addRoomItem };
