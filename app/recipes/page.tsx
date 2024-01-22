import productList from "@/components/products"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

const getProducts = async () => {
    const data = await fetch("https://dummyjson.com/recipes");
    const listOfrecipes = await data.json();
    return listOfrecipes;

}
export default async function Products() {
    const { recipes } = await getProducts();
    return (
        <>
            <div> Recipes List</div>
            <div className="flex flex-wrap cursor-wait">

                {recipes.map((recipe) => {
                    return (
                        <>
                            <div className="ml-4 mr-5 mb-2 p-4 w-[270px] h-[350px] rounded-lg bg-gray-100 hover:bg-gray-200">
                                < h1 key={recipe.id}> {recipe.tags.slice(" ").join(", ")}</h1>
                                <img src={recipe.image}></img>
                                < h1 key={recipe.id}> {recipe.name}</h1>
                                <h4> <b>Cuisine:</b> {recipe.cuisine}</h4>
                            </div>
                        </>
                    )
                }
                )
                }



            </div>

        </>
    )
}