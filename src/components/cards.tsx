import { useRestaurantContext } from "./restaurantContext";
import { Link } from "react-router-dom";

const Cards = () => {
  const restaurants = useRestaurantContext();
  console.log(restaurants);
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
        <Link to={`Details/${restaurant.id}`}>
          <section style={{ maxWidth: "350px", marginTop: "5rem" }}>
            <img src={restaurant.img} style={{ maxWidth: "100%" }}></img>
            <h1>{restaurant.name}</h1>
            <h2>{restaurant.description_short}</h2>
          </section>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
