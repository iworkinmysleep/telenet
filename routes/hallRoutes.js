import express from "express";
const router = express.Router();
import {
	addHallData,
	getHallData,
	deleteHall,
	getHallById,
} from "../controllers/hallController.js";

router.route("/").post(addHallData).get(getHallData);

router.route("/:id").get(getHallById).delete(deleteHall);

export default router;
