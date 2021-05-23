import asyncHandler from "express-async-handler";
import Item from "../models/itemModel.js";

const getItems = asyncHandler(async (req, res) => {
	const items = await Item.find({});
	res.json(items);
});

const getItemById = asyncHandler(async (req, res) => {
	const item = await Item.findById(req.params.id);

	if (item) {
		res.json(item);
	} else {
		res.status(404);
		throw new Error("Item not found");
	}
});

const deleteItem = asyncHandler(async (req, res) => {
	const item = await Item.findById(req.params.id);

	if (item) {
		await item.remove();
		res.json({ message: "Item removed" });
	} else {
		res.status(404);
		throw new Error("Item not found");
	}
});

const createItem = asyncHandler(async (req, res) => {
	const { selectedItem, serial, qty, isDefect } = req.body;
	const item = await Item.create({
		selectedItem,
		serial,
		qty,
		isDefect,
	});

	if (item) {
		res.status(201).json({
			_id: item._id,
			selectedItem: item.selectedItem,
			serial: item.serial,
			qty: item.qty,
			isDefect: item.isDefect,
		});
	} else {
		res.status(400);
		throw new Error("Invalid item data");
	}
});

const updateItem = asyncHandler(async (req, res) => {
	const { selectedItem, serial, qty, isDefect } = req.body;

	const item = await Item.findById(req.params.id);

	if (item) {
		(item.selectedItem = selectedItem),
			(item.serial = serial),
			(item.qty = qty),
			(item.isDefect = isDefect);

		const updatedItem = await item.save();
		res.json(updatedItem);
	} else {
		res.status(404);
		throw new Error("Item not found");
	}
});

export { getItems, getItemById, deleteItem, createItem, updateItem };
