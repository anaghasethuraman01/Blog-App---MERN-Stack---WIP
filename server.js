const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5001;
require("dotenv").config();
const mongoose = require("mongoose");
const Blog = require("./models/blog.models");
const blogRoutes = require("./routes/blogRoutes.js")
//to resolve cors errors
app.use(cors());
app.use(express.json());
//to test endpoint
// app.get("/", (req, res) => {
// 	res.send("success is yours");
// });

app.use("/", blogRoutes);
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		app.listen(PORT, () => {
			console.log(`server is listening on ${PORT}`);
		});
	})
	.catch((err) => {
		console.log("Error", err);
	});
