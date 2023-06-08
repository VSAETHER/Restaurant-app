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
      <section className="flex justify-center">
        <section className="flex flex-col items-center w-4/5 flex bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
          <h1 className="p-4 text-3xl m-10">{restaurants[idNumber].name}</h1>
          <img
            src={restaurants[idNumber].img}
            className="w-3/4 rounded-lg "
          ></img>

          <p className="p-2 text-lg m-6 w-1/2 text-center">
            {restaurants[idNumber].description_long}
          </p>
          <button
            className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl"
            onClick={() => toggleFavorites(idNumber)}
          >
            Add to favorites
          </button>

          <section className="flex flex-col bg-blue-100 items-center w-2/3 flex border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-10 pb-20">
            <h1 className="m-4">Menu</h1>
            <h2 className="m-4"> Starters</h2>
            {restaurants[idNumber].menu.entrees.map((entrees) => (
              <p className="m-2 bg-white w-1/2 text-center">{entrees}</p>
            ))}
            <h2 className="m-4"> Mains</h2>
            {restaurants[idNumber].menu.dishes.map((dishes) => (
              <p className="m-2 bg-white w-1/2 text-center">{dishes}</p>
            ))}

            <h2 className="m-4"> Deserts</h2>
            {restaurants[idNumber].menu.deserts.map((deserts) => (
              <p className="m-2 bg-white w-1/2 text-center">{deserts}</p>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};
export default Details;
