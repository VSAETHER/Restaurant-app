import { useParams } from "react-router-dom";
import { useRestaurantContext } from "../components/restaurantContext";

const Details = () => {
  const { id } = useParams();
  const idNumber = parseInt(id!);
  const restaurants = useRestaurantContext();

  return (
    <section>
      <h1>{restaurants[idNumber].name}</h1>
      <p>{restaurants[idNumber].description_long}</p>
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
  );
};
export default Details;
