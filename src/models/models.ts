export interface restaurant {
  id: number;
  name: string;
  address: string;
  description_short: string;
  description_long: string;
  img: string;
  menu: menu;
}
export interface menu {
  entrees: string[];
  dishes: string[];
  deserts: string[];
}
