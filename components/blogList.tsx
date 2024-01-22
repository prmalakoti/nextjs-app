import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { Key, ReactNode } from "react";

const getTopics = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/blogs", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch blogs");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading blogs: ", error);
    }
};

export default async function BlogList() {
    const { blogs } = await getTopics();
    return (
        <>
            {blogs.map((t: {
                description: ReactNode;
                title: ReactNode; _id: Key | null | undefined;
            }) => (
                <div
                    key={t._id}
                    className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
                >
                    <div>
                        <h2 className="font-bold text-2xl">{t.title}</h2>
                        <div>{t.description}</div>
                    </div>

                    <div className="flex gap-2">
                        <RemoveBtn id={t._id} />
                        <Link href={`/editBlog//${t._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}