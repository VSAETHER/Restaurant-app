import { useParams } from "react-router-dom";
import { useRestaurantContext } from "../components/RestaurantContext";
import { useFavoritesContext } from "../components/FavoritesContext";
import { isFavorite } from "../components/FavoritesContext";
import ConfirmationModal from "../components/ConfirmationModal";
import Header from "../components/Header";

const Details = () => {
  const { id } = useParams();
  // I'd rather add a fallback if the id is not defined or does not match any restaurant
  // There is a problem if hyou enter /99 in the url for instance.
  // So it is better to display a message for the user <p>No restaurant found</p> for instance
  const idNumber = parseInt(id!);
  const restaurants = useRestaurantContext();
  const { toggleFavorites, confirmationBox } = useFavoritesContext();
  const fav = isFavorite();
  // Remove console logs ;)
  console.log(confirmationBox);

  return (
    <section>
      {/* There is a better way to handle this modal, it is to put it in the app and 
      handle the shwo modal display in the favorites context */}
      <ConfirmationModal id={idNumber}></ConfirmationModal>
      <Header></Header>
      <section className="flex justify-center">
        <section className="flex flex-col items-center w-full sm:w-4/5 flex bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:m-10">
          {/* Rather than reaching the restaurant with its index, create a const 
          once and for all before the return of the component */}
          <h1 className="p-4 text-3xl m-10">{restaurants[idNumber].name}</h1>
          <img
            src={restaurants[idNumber].img}
            className="w-3/4 rounded-lg "
          ></img>

          <p className="p-2 text-lg m-6 sm:w-1/2 text-center">
            {restaurants[idNumber].description_long}
          </p>
          {fav.includes(idNumber) ? (
            <button
              className="m-4 bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-3xl"
              onClick={() => toggleFavorites(idNumber)}
            >
              Remove from favorites
            </button>
          ) : (
            <button
              className="m-4 bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-3xl"
              onClick={() => toggleFavorites(idNumber)}
            >
              Add to favorites
            </button>
          )}

          <section className="flex flex-col bg-blue-100 items-center w-full sm:w-2/3 flex border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-10 pb-20">
            <h1 className="m-4">Menu</h1>
            <h2 className="m-4"> Starters</h2>
            {restaurants[idNumber].menu.entrees.map((entrees) => (
              <p key={entrees} className="m-2 bg-white w-1/2 text-center">
                {entrees}
              </p>
            ))}
            <h2 className="m-4"> Mains</h2>
            {restaurants[idNumber].menu.dishes.map((dishes) => (
              <p key={dishes} className="m-2 bg-white w-1/2 text-center">
                {dishes}
              </p>
            ))}

            <h2 className="m-4"> Deserts</h2>
            {restaurants[idNumber].menu.deserts.map((deserts) => (
              <p key={deserts} className="m-2 bg-white w-1/2 text-center">
                {deserts}
              </p>
            ))}
          </section>
          <p className="mb-8">{restaurants[idNumber].address}</p>
        </section>
      </section>
    </section>
  );
};
export default Details;
