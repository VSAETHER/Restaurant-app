import { useRestaurantContext } from "./restaurantContext";
import Card from "./Card";
import Header from "./header";
import { restaurantContextType } from "../models/restaurantContextType";
import { isFavorite } from "./FavoritesContext";

type prop = {
  Favorites: boolean;
};

const Cards = ({ Favorites }: prop) => {
  const restaurants = useRestaurantContext();
  const fav = isFavorite();
  let restaurantsFav: restaurantContextType[] = [];
  if (Favorites)
    restaurantsFav = restaurants.filter((id) => fav.includes(id.id));
  else restaurantsFav = restaurants;
  return (
    <>
      <Header></Header>
      <section className="flex justify-center mt-8">
        {Favorites ? (
          <h1 className="text-6xl m-6">Favorites</h1>
        ) : (
          <h1 className="text-6xl m-6">Restaurants</h1>
        )}
      </section>
      <div className="flex flex-wrap gap-8 justify-evenly mx-20">
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
    </>
  );
};

export default Cards;
