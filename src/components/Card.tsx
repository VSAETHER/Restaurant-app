import { Link } from "react-router-dom";
import { useFavoritesContext } from "./FavoritesContext";

type props = {
  id: number;
  image: string;
  description: string;
  name: string;
};

const Card = ({ id, image, description, name }: props) => {
  const { toggleFavorites } = useFavoritesContext();
  return (
    <section style={{ maxWidth: "350px", marginTop: "5rem" }}>
      <Link to={`${id}`}>
        <img src={image} style={{ maxWidth: "100%" }}></img>
        <h1>{name}</h1>
      </Link>
      <h2>{description}</h2>
      <button
        onClick={() =>
          // window.confirm("Are you sure you want to delete this Card?") &&
          toggleFavorites(id)
        }
      >
        Favorite
      </button>
    </section>
  );
};
export default Card;
