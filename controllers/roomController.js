import Room from "../models/roomModel.js";
import asyncHandler from "express-async-handler";

// @desc    Get all rooms
// @route   GET /api/roomdata
// @access  Public
const getRoomData = asyncHandler(async (req, res) => {
	const roomItems = await Room.find({});
	res.json(roomItems);
});

// @desc    Add room data
// @route   POST /api/roomdata
// @access  Public
const addRoomData = async (req, res, next) => {
	try {
		const {
			roomNumber,
			speakerNum,
			boardType,
			hasAP,
			hasAlarm,
			alarmType,
			hasDefect,
			defectType,
			additionalInfo,
		} = req.body;

		const roomData = await Room.create(req.body);

		return res.status(201).json({
			success: true,
			data: roomData,
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

// @desc    Delete room data
// @route   DELETE /api/roomdata/:id
// @access  Public
const deleteRoom = async (req, res, next) => {
	try {
		const room = await Room.findById(req.params.id);

		if (!room) {
			return res.status(404).json({
				success: false,
				error: "No room found",
			});
		}

		await room.remove();

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

export { getRoomData, deleteRoom, addRoomData };
