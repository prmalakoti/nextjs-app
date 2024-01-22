import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
    {
        title: String,
        description: String,
    },
    {
        timestamps: true,
    }
);

const Blog = mongoose.models.blogList || mongoose.model("blogList", blogSchema);

export default Blog;