import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, Params, useParams } from "react-router-dom";

interface Recipe {
  id: string;
  image: string;
  imageType: string;
  title: string;
}

function Cuisine() {
  const params: Params<string> = useParams();

  useEffect(() => {
    getCuisine(params.type as string);
  }, [params.type]);

  const [cuisine, setCuisine] = useState([]);

  const getCuisine = async (name: string) => {
    const checkData = localStorage.getItem(name);
    if (checkData) {
      setCuisine(JSON.parse(checkData));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
          import.meta.env.VITE_API_KEY
        }&cuisine=${name}`
      );
      const data = await api.json();
      localStorage.setItem(name, JSON.stringify(data.results));
      setCuisine(data.results);
    }
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="grid grid-cols-[_repeat(auto-fit,_minmax(20rem,_1fr))] gap-12">
        {cuisine.map((recipe: Recipe) => {
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

export default Cuisine;
