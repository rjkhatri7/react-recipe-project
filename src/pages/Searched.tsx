import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, Params, useParams } from "react-router-dom";

interface Recipe {
  id: string;
  image: string;
  imageType: string;
  title: string;
}

function Searched() {
  const params: Params<string> = useParams();

  useEffect(() => {
    getSearched(params.search as string);
  }, [params.search]);

  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const getSearched = async (name: string) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&query=${name}`
    );
    const data = await api.json();
    setSearchedRecipes(data.results);
  };
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="grid grid-cols-[_repeat(auto-fit,_minmax(20rem,_1fr))] gap-12">
        {searchedRecipes.map((recipe: Recipe) => {
          return (
            <div key={recipe.id}>
              <Link to={"/recipe/" + recipe.id}>
                <img
                  className="w-full rounded-[2rem]"
                  src={recipe.image}
                  alt={recipe.title}
                />
                <h4 className="text-base font-normal">{recipe.title}</h4>
              </Link>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Searched;
