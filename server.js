import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import colors from "colors";
import morgan from "morgan";
import { notFound, errorHandler } from "./middleware/errorWare.js";
import connectDB from "./config/db.js";

import roomRoutes from "./routes/roomRoutes.js";


dotenv.config();

connectDB();

const app = express();

app.use(cors())

if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Api is running");
});

app.use("/api/roomitems", roomRoutes);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
);