import asyncHandler from "express-async-handler";
import Room from "../models/roomModel.js";

const postRoom = asyncHandler(async (req, res) => {
	const { roomNumber, teacherName } = req.body;
	const room = await Room.create({
		roomNumber,
		teacherName,
	});

	if (room) {
		res.status(201).json({
			_id: room._id,
			roomNumber: room.roomNumber,
			teacherName: room.teacherName,
		});
	} else {
		res.status(400);
		throw new Error("Invalid room data");
	}
});

const getRooms = asyncHandler(async (req, res) => {
	const rooms = await Room.find({});
	res.json(rooms);
});

const deleteRoom = asyncHandler(async (req, res) => {
	const room = await Room.findById(req.params.id);

	if (room) {
		await room.remove();
		res.json({ message: "Room removed" });
	} else {
		res.status(404);
		throw new Error("Room not found");
	}
});

const getRoomById = asyncHandler(async (req, res) => {
	const room = await Room.findById(req.params.id);
	if (room) {
		res.json(room);
	} else {
		res.status(404);
		throw new Error("Room not found");
	}
});

const updateRoom = asyncHandler(async (req, res) => {
	const room = await Room.findById(req.params.id);

	if (room) {
		(room.roomNumber = roomNumber), (room.teacherName = teacherName);

		const updatedRoom = await room.save();

		res.json(updatedRoom);
	} else {
		res.status(404);
		throw new Error("Room not found");
	}
});

export { postRoom, getRooms, getRoomById, deleteRoom, updateRoom };
