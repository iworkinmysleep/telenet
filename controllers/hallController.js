import Hall from "../models/hallModel.js";
import asyncHandler from "express-async-handler";

// @desc    Get all hall sections
// @route   GET /api/halldata
const getHallData = asyncHandler(async (req, res) => {
	const hallItems = await Hall.find({});
	res.json(hallItems);
});

// @desc  Get single hall section
// @route GET /api/halldata/:id
const getHallById = asyncHandler(async (req, res) => {
	const hall = await Hall.findById(req.params.id);
	if (hall) {
		res.json(hall);
	} else {
		res.status(404);
		throw new Error("Hall not found");
	}
});

// @desc    Add hall data
// @route   POST /api/halldata
const addHallData = async (req, res, next) => {
	try {
		const {
			hallSection,
			speakerArea,
			hasRestroom,
			restroomType,
			hasAP,
			apType,
			hasCamera,
			cameraType,
			hasAlarm,
			alarmType,
			hasDefect,
			defectType,
			additionalInfo,
		} = req.body;

		const hallData = await Hall.create(req.body);

		return res.status(201).json({
			success: true,
			data: hallData,
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

// @desc    Delete hall data
// @route   DELETE /api/halldata/:id
const deleteHall = async (req, res, next) => {
	try {
		const hall = await Hall.findById(req.params.id);

		if (!hall) {
			return res.status(404).json({
				success: false,
				error: "No Hall found",
			});
		}

		await hall.remove();

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

export { getHallData, getHallById, deleteHall, addHallData };
