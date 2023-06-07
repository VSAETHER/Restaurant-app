import { createContext, useContext, useState } from "react";

type ContextProps = {
  children: React.ReactNode;
};
type FavoritesContextType = {
  id: number[];
  toggleFavorites: (idNumber: number) => void;
};
export const FavoritesContext = createContext<FavoritesContextType>(
  {} as FavoritesContextType
);

export const useFavoritesContext = () => useContext(FavoritesContext);

export const FavoritesContextProvider = ({ children }: ContextProps) => {
  const [id, setId] = useState<number[]>([]);

  const toggleFavorites = (idNumber: number) => {
    if (localStorage.getItem("restaurantId")) {
      let fav: number[] = JSON.parse(localStorage.getItem("restaurantId")!);
      if (fav.includes(idNumber)) {
        let position = fav.findIndex((id) => id == idNumber);
        fav.splice(position, 1);
      } else {
        fav.push(idNumber);
      }
      localStorage.setItem("restaurantId", JSON.stringify(fav));
    } else localStorage.setItem("restaurantId", JSON.stringify([idNumber]));
    setId(JSON.parse(localStorage.getItem("restaurantId")!));
  };
  return (
    <FavoritesContext.Provider value={{ toggleFavorites, id }}>
      {children}
    </FavoritesContext.Provider>
  );
};
