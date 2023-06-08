import Cards from "../components/Cards";
import { useFavoritesContext } from "../components/FavoritesContext";

const Favorites = () => {
  useFavoritesContext();
  return <Cards Favorites={true}></Cards>;
};

export default Favorites;
