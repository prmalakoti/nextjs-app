"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddBlog() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (!title || !description) {
            alert("Title and description are required.");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/blogs", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ title, description }),
            });

            if (res.ok) {
                router.push("/");
                router.refresh();
            } else {
                throw new Error("Failed to create a blog");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-8/12">
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="border border-slate-500 px-8 py-2 rounded-lg"
                type="text"
                placeholder="Blog Title"
            />

            <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="border border-slate-500 px-8 py-2 rounded-lg"
                type="text-area"
                placeholder="Blog Description"
            />

            <button
                type="submit"
                className="bg-green-500 font-bold text-white py-3 px-6 w-fit rounded-lg"
            >
                Add Blog
            </button>
        </form>
    );
}