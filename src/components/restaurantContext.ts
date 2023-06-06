import React, { createContext, useContext, useState } from "react";
import { restaurant } from "../models/models";

type restaurantContextType = {
  id: number;
  name: string;
  address: string;
  description_short: string;
  description_long: string;
  img: string;
  menu: menu;
};
type menu = {
  entrees: string[];
  dishes: string[];
  deserts: string[];
};

export const restaurantContext = createContext<restaurantContextType[]>(
  {} as restaurantContextType[]
);

export const useRestaurantContext = () => useContext(restaurantContext);
