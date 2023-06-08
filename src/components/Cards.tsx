import { useRestaurantContext } from "./restaurantContext";
import Card from "./Card";
import Header from "./header";
const Cards = () => {
  const restaurants = useRestaurantContext();
  return (
    <>
      <Header></Header>
      <div className="flex flex-1 flex-wrap gap-10 justify-around mx-20">
        {restaurants.map((restaurant) => (
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
