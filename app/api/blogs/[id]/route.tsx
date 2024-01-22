import connectMongoDB from "@/config/mongodb";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function PUT(request, { params }: any) {
    const { id } = params;
    const { newTitle: title, newDescription: description } = await request.json();
    await connectMongoDB();
    await Blog.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "Blog updated" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const blog = await Blog.findOne({ _id: id });
    return NextResponse.json({ blog }, { status: 200 });
}