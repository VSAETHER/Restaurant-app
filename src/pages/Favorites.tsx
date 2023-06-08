import { useRestaurantContext } from "../components/restaurantContext";
import Card from "../components/Card";
import { useFavoritesContext } from "../components/FavoritesContext";
import Header from "../components/header";

const Favorites = () => {
  let fav: number[] = [];
  useFavoritesContext();
  if (localStorage.getItem("restaurantId"))
    fav = JSON.parse(localStorage.getItem("restaurantId")!);

  const restaurants = useRestaurantContext();

  const restaurantsFav = restaurants.filter((id) => fav.includes(id.id));

  return (
    <>
      <Header></Header>
      <section className="flex justify-center mt-8">
        <h1 className="text-6xl">Favorites</h1>
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

export default Favorites;
