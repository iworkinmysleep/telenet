import express from "express";
const router = express.Router();
import {
	addRoomData,
	getRoomData,
	deleteRoom,
} from "../controllers/roomController.js";

router.route("/").post(addRoomData).get(getRoomData);

router.route("/:id").delete(deleteRoom);

export default router;
