import express from "express";
const router = express.Router();
import {
	getItems,
	getItemById,
	deleteItem,
	createItem,
	updateItem,
} from "../controllers/itemController.js";

router.route("/").get(getItems).post(createItem);
router.route("/:id").get(getItemById).delete(deleteItem).put(updateItem);
export default router;
