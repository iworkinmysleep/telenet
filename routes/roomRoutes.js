import express from "express";
const router = express.Router();
import {
	addRoomData,
	getRoomData,
	deleteRoom,
	editRoomData,
	getRoomById,
} from "../controllers/roomController.js";

router.route("/").post(addRoomData).get(getRoomData);

router.route("/:id").get(getRoomById).delete(deleteRoom).put(editRoomData);

export default router;
