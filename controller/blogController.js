const Blog = require("../models/blog.models");

//app.get("/get-all-blogs",
const getAllBlogs = async (req, res) => {
	try {
		const blogs = await Blog.find({});
		res.send({ count: blogs.length, data: blogs });
	} catch (error) {
		console.log("Error in getting blogs", error);
		res.status(400).send({ message: "something went wrong" });
	}
};
// //"/blog/:id"
const getBlogbyId = async (req, res) => {
	try {
		const blog = await Blog.findById(req.params.id);
		res.send(blog);
	} catch (error) {
		console.log("Error in getting blog by id", error);
		res.status(400).send({ message: "something went wrong" });
	}
};
///create-blog
const createBlog = async (req, res) => {
	try {
		const data = req.body;
		const blog = new Blog(data);
		const response = await blog.save();
		console.log("DATA", response);
		res.send(response);
	} catch (error) {
		console.log("Error in create blog", error);
		res.status(400).send({ message: "something went wrong" });
	}
};
///updateblog/:id"
const updateBlog = async (req, res) => {
	try {
		const { title, description, author } = req.body;

		const updatedBlog = await Blog.findByIdAndUpdate(
			req.params.id,
			{
				title,
				description,
				author,
			},
			{ new: true },
		);
		console.log(updatedBlog);
		res.send(updatedBlog);
	} catch (error) {
		console.log("Error in updating blog", error);
		res.status(400).send({ message: "something went wrong" });
	}
};
//"/deleteblog/:id
const deleteBlog = async (req, res) => {
	try {
		const id = req.params.id;
		const deletedBlog = await Blog.findByIdAndDelete(id);
		res.send(deletedBlog);
	} catch (error) {
		console.log("Error in deleting blog", error);
		res.status(400).send({ message: "something went wrong" });
	}
};

module.exports = {
	getAllBlogs,
	getBlogbyId,
	createBlog,
	updateBlog,
	deleteBlog,
};
