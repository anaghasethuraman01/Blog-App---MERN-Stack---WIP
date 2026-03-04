const express = require("express");
const {
	getAllBlogs,
	getBlogbyId,
	createBlog,
	updateBlog,
	deleteBlog,
} = require("../controller/blogController");
const router = express.Router();

router.get("/get-all-blogs", getAllBlogs);
router.get("/blog/:id", getBlogbyId);
router.post("/create-blog", createBlog);
router.put("/updateblog/:id", updateBlog);
router.delete("/deleteblog/:id", deleteBlog);
module.exports = router;
