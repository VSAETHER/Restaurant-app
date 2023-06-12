import { useRestaurantContext } from "./restaurantContext";
import Card from "./Card";
import { restaurantContextType } from "../models/restaurantContextType";
import { isFavorite, useFavoritesContext } from "./FavoritesContext";
import ConfirmationModal from "./ConfirmationModal";
import Header from "./Header";

type prop = {
  Favorites: boolean;
};

const Cards = ({ Favorites }: prop) => {
  const { currentId } = useFavoritesContext();
  const restaurants = useRestaurantContext();
  const fav = isFavorite();
  let restaurantsFav: restaurantContextType[] = [];
  if (Favorites)
    restaurantsFav = restaurants.filter((id) => fav.includes(id.id));
  else restaurantsFav = restaurants;
  return (
    <section className="mb-10">
      <ConfirmationModal id={currentId}></ConfirmationModal>
      <Header></Header>
      <section className="flex justify-center mt-8">
        {Favorites ? (
          <h1 className="text-4xl md:text-6xl m-6">Favorites</h1>
        ) : (
          <h1 className="text-4xl md:text-6xl m-6">Restaurants</h1>
        )}
      </section>

      <div className="flex flex-wrap gap-8 justify-evenly sm:mx-20">
        {restaurantsFav.map((restaurant) => (
          <Card
            key={restaurant.id}
            id={restaurant.id}
            image={restaurant.img}
            description={restaurant.description_short}
            name={restaurant.name}
          ></Card>
        ))}
      </div>
    </section>
  );
};

export default Cards;
