import { createContext, useContext } from "react";
import { restaurantContextType } from "../models/restaurantContextType";

export const RestaurantContext = createContext<restaurantContextType[]>(
  {} as restaurantContextType[]
);

export const useRestaurantContext = () => useContext(RestaurantContext);
