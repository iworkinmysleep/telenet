import express from "express";
const router = express.Router();
import {
	addRoomData,
	getRoomData,
	deleteRoom,
	getRoomById,
} from "../controllers/roomController.js";

router.route("/").post(addRoomData).get(getRoomData);

router.route("/:id").get(getRoomById).delete(deleteRoom);

export default router;
