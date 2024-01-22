import EditBlogForm from "@/components/editBlogForm";

const getTopicById = async (id: any) => {
    try {
        const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topic");
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

export default async function EditTopic({ params }: { params: { id: string } }) {
    const { id } = params;
    const { blog } = await getTopicById(id);
    const { title, description } = blog;

    return <EditBlogForm id={id} title={title} description={description} />;
}