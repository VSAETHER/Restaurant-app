import { createContext, useContext } from "react";
import { restaurantContextType } from "../models/restaurantContextType";

export const restaurantContext = createContext<restaurantContextType[]>(
  {} as restaurantContextType[]
);

export const useRestaurantContext = () => useContext(restaurantContext);
