import { useParams } from "react-router-dom";
import { useRestaurantContext } from "../components/restaurantContext";
import Header from "../components/header";
import { useFavoritesContext } from "../components/FavoritesContext";

const Details = () => {
  const { id } = useParams();
  const idNumber = parseInt(id!);
  const restaurants = useRestaurantContext();
  const { toggleFavorites } = useFavoritesContext();

  return (
    <section>
      <Header></Header>
      <section className="flex flex-col items-center">
        <h1>{restaurants[idNumber].name}</h1>
        <p>{restaurants[idNumber].description_long}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl"
          onClick={() => toggleFavorites(idNumber)}
        >
          Add to favorites
        </button>
        <h1>Menu</h1>

        {restaurants[idNumber].menu.entrees.map((entrees) => (
          <h2>{entrees}</h2>
        ))}
        {restaurants[idNumber].menu.dishes.map((dishes) => (
          <h2>{dishes}</h2>
        ))}
        {restaurants[idNumber].menu.deserts.map((deserts) => (
          <h2>{deserts}</h2>
        ))}
      </section>
    </section>
  );
};
export default Details;
