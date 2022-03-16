import { useEffect, useState } from "react";
import { Recipe } from "../Types";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Veggie() {
  useEffect(() => {
    getVeggie();
  }, []);

  const [veggie, setVeggie] = useState([]);

  const getVeggie = async () => {
    const checkData = localStorage.getItem("veggie");
    if (checkData) {
      setVeggie(JSON.parse(checkData));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_API_KEY
        }&number=9&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };
  return (
    <div>
      <h3 className="mt-8 text-2xl font-semibold text-gray-800">
        Our Vegetarian Picks
      </h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "4rem",
        }}
      >
        {veggie.map((recipe: Recipe) => (
          <SplideSlide key={recipe.id}>
            <Link to={"/recipe/" + recipe.id}>
              <div className="my-4 h-72 overflow-hidden relative">
                <p className="z-20 absolute left-1/2 -translate-x-2/4 bottom-0 text-white w-full text-center font-semibold text-base h-2/5 flex justify-center items-center">
                  {recipe.title}
                </p>
                <div className="z-10 absolute rounded-3xl h-full w-full bg-gradient-to-t from-black/80" />
                <img
                  className="rounded-3xl absolute left-0 w-full h-full object-cover"
                  src={recipe.image}
                  alt={recipe.title}
                />
              </div>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Veggie;
