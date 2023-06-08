import { Link } from "react-router-dom";
import { useFavoritesContext } from "./FavoritesContext";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

type props = {
  id: number;
  image: string;
  description: string;
  name: string;
};

const Card = ({ id, image, description, name }: props) => {
  const { toggleFavorites } = useFavoritesContext();

  let fav: number[] = [];
  if (localStorage.getItem("restaurantId"))
    fav = JSON.parse(localStorage.getItem("restaurantId")!);

  return (
    <section className=" w-96 flex bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-col items-center mt-10">
      <section className="w-full relative">
        <img
          src={image}
          className="w-full rounded-t-lg object-cover h-80"
        ></img>
        <button
          onClick={() => toggleFavorites(id)}
          className="absolute text-3xl right-3"
        >
          {fav.includes(id) ? (
            <AiFillHeart className="text-red-500 fon"></AiFillHeart>
          ) : (
            <AiOutlineHeart className="text-red-500 fon"></AiOutlineHeart>
          )}
        </button>
      </section>

      <section className="flex flex-row gap-4 p-5">
        <Link to={`${id}`}>
          <section className="flex flex-col items-center">
            <h1>{name}</h1>
            <h2>{description}</h2>
          </section>
        </Link>
      </section>
    </section>
  );
};
export default Card;
