import Cards from "../components/Cards";
import { useFavoritesContext } from "../components/FavoritesContext";

const Favorites = () => {
  // You don't retrieve anything from the context, why calling it ?
  useFavoritesContext();
  return <Cards Favorites={true}></Cards>;
};

export default Favorites;
