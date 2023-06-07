import { useRestaurantContext } from "../components/restaurantContext";
import Card from "../components/Card";
import { useFavoritesContext } from "../components/FavoritesContext";

const Favorites = () => {
  let fav: number[];
  useFavoritesContext();
  if (localStorage.getItem("restaurantId"))
    fav = JSON.parse(localStorage.getItem("restaurantId")!);
  const restaurants = useRestaurantContext();
  const restaurantsFav = restaurants.filter((id) => fav.includes(id.id));

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "3rem",
        justifyContent: "space-evenly",
      }}
    >
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
  );
};

export default Favorites;
