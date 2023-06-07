import { useRestaurantContext } from "./restaurantContext";
import Card from "./Card";

const Cards = () => {
  const restaurants = useRestaurantContext();
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "3rem",
        justifyContent: "space-evenly",
      }}
    >
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
  );
};

export default Cards;
