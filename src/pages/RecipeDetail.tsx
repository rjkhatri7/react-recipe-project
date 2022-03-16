import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";
import { RecipeDetails } from "../Types";

function RecipeDetail() {
  const params: Params<string> = useParams();

  useEffect(() => {
    getSearchResult(params.id as string);
  }, [params.id]);

  const [details, setDetails] = useState<RecipeDetails>(new RecipeDetails());
  const [activeTab, setActiveTab] = useState("instructions");

  const getSearchResult = async (id: string) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data: RecipeDetails = await api.json();
    setDetails(data);
  };

  return (
    <motion.div
      className="mt-28 mb-20 flex"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mr-4">
        <h2 className=" font-bold text-xl mb-8">{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <div className="ml-12 w-[70%]">
        <button
          onClick={() => setActiveTab("instructions")}
          className={
            activeTab === "instructions"
              ? "m-1 px-4 py-2 border-2 border-black mr-4 font-semibold text-white bg-gradient-to-r from-[#494949] to-[#313131]"
              : "m-1 px-4 py-2 border-2 border-black mr-4 font-semibold bg-white"
          }
        >
          Instructions
        </button>
        <button
          onClick={() => setActiveTab("ingredients")}
          className={
            activeTab === "ingredients"
              ? "m-1 px-4 py-2 border-2 border-black mr-4 font-semibold text-white bg-gradient-to-r from-[#494949] to-[#313131]"
              : "m-1 px-4 py-2 border-2 border-black mr-4 font-semibold bg-white"
          }
        >
          Ingredients
        </button>
        {activeTab === "instructions" && (
          <div>
            <h3
              className="mt-8"
              dangerouslySetInnerHTML={{ __html: details.summary }}
            />
            <h3
              className="mt-6"
              dangerouslySetInnerHTML={{ __html: details.instructions }}
            />
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul className=" list-disc mt-8">
            {details.extendedIngredients.map((ingredient) => {
              return (
                <li className="text-lg" key={ingredient.id}>
                  {ingredient.original}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export default RecipeDetail;
