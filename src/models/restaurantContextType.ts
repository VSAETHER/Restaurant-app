// Types and interface are defined with a capital letter
// It is a convention
export type restaurantContextType = {
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
