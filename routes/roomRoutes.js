import express from "express";
const router = express.Router();
import {
	postRoom,
	getRoom,
	deleteRoom,
	getRoomById,
	updateRoom,
} from "../controllers/roomController.js";

router.route("/").post(postRoom).get(getRoom);

router.route("/:id").delete(deleteRoom).get(getRoomById).put(updateRoom);

export default router;
