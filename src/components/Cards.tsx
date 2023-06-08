import { useRestaurantContext } from "./restaurantContext";
import Card from "./Card";
import Header from "./header";
const Cards = () => {
  const restaurants = useRestaurantContext();
  return (
    <>
      <Header></Header>
      <section className="flex justify-center mt-8">
        <h1 className="text-6xl">Restaurants</h1>
      </section>
      <div className="flex flex-wrap gap-8 justify-evenly mx-20">
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
