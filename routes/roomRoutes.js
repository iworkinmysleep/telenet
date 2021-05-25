import express from "express";
const router = express.Router();
import {
	addRoomItem,
	getRoomItems,
	deleteRoomItem,
} from "../controllers/roomController.js";

router.route("/").post(addRoomItem).get(getRoomItems);

router.route("/:id").delete(deleteRoomItem);

export default router;
