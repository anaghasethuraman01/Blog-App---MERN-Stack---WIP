const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5001;
require("dotenv").config();
const mongoose = require("mongoose");
const Blog = require("./models/blog.models");

//to resolve cors errors
app.use(cors());
app.use(express.json());
//to test endpoint
// app.get("/", (req, res) => {
// 	res.send("success is yours");
// });
app.get("/get-all-blogs", async (req, res) => {
	try {
		const blogs = await Blog.find({});
		res.send({ count: blogs.length, data: blogs });
	} catch (error) {
		console.log("Error in getting blogs", error);
		res.status(400).send({ message: "something went wrong" });
	}
});
//checking git
app.get("/blog/:id", async (req, res) => {
	try {
		const blog = await Blog.findById(req.params.id);
		res.send(blog);
	} catch (error) {
		console.log("Error in getting blogs", error);
		res.status(400).send({ message: "something went wrong" });
	}
});
app.post("/create-blog", async (req, res) => {
	try {
		const data = req.body;
		const response = await blog.save();
		console.log("DATA", response);
		res.send(response);
	} catch (error) {
		console.log("Error in create blog", error);
		res.status(400).send({ message: "something went wrong" });
	}
});

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
