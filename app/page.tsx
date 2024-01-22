import BlogList from "@/components/blogList";
import Link from "@/node_modules/next/link";
export default function Home() {
  return (
    <>
      <h1 className="mt-2 mr-4 text-left md:text-right font-semibold text-blue-600 underline cursor-pointer">
        <Link href={"/recipes"}>
          Want see recipes !!!
        </Link> </h1>
      <div><BlogList /></div>
    </>

  );
}
