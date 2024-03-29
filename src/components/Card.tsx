import { Link } from "react-router-dom";
import { useFavoritesContext } from "./FavoritesContext";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { isFavorite } from "./FavoritesContext";

type props = {
  id: number;
  image: string;
  description: string;
  name: string;
};

const Card = ({ id, image, description, name }: props) => {
  const { toggleFavorites } = useFavoritesContext();

  return (
    <article className=" w-full sm:w-96 flex bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-col items-center mt-10">
      <article className="w-full relative mb-4">
        <Link to={`${id}`}>
          <img
            src={image}
            className="w-full rounded-t-lg object-cover sm:h-80 h-40"
          ></img>
        </Link>

        {isFavorite().includes(id) ? (
          <button
            onClick={() => toggleFavorites(id)}
            className="absolute text-3xl right-3"
          >
            <AiFillHeart className="text-red-500 fon"></AiFillHeart>{" "}
          </button>
        ) : (
          <button
            onClick={() => toggleFavorites(id)}
            className="absolute text-3xl right-3"
          >
            <AiOutlineHeart className="text-red-500 fon"></AiOutlineHeart>
          </button>
        )}
      </article>

      <article className="flex flex-row gap-4 p-5 mb-4">
        <Link to={`${id}`}>
          <section className="flex flex-col items-center">
            <h1>{name}</h1>
            <h2 className="text-center">{description}</h2>
          </section>
        </Link>
      </article>
    </article>
  );
};
export default Card;
