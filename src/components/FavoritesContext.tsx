import { createContext, useContext, useState } from "react";

type ContextProps = {
  children: React.ReactNode;
};
type FavoritesContextType = {
  id: number[];
  toggleFavorites: (idNumber: number) => void;
};
const FavoritesContext = createContext<FavoritesContextType>(
  {} as FavoritesContextType
);
export const useFavoritesContext = () => useContext(FavoritesContext);

export const isFavorite = () => {
  if (localStorage.getItem("restaurantId"))
    return JSON.parse(localStorage.getItem("restaurantId")!);
  else return [];
};

export const FavoritesContextProvider = ({ children }: ContextProps) => {
  const [id, setId] = useState<number[]>([]);

  const toggleFavorites = (idNumber: number) => {
    const fav = isFavorite();
    if (fav.includes(idNumber)) {
      if (
        window.confirm(
          "Are you sure you want to remove this restaurant from favorites?"
        )
      ) {
        let position = fav.findIndex((id: any) => id == idNumber);
        fav.splice(position, 1);
      }
    } else {
      fav.push(idNumber);
    }
    localStorage.setItem("restaurantId", JSON.stringify(fav));
    setId(fav);
  };

  return (
    <FavoritesContext.Provider value={{ toggleFavorites, id }}>
      {children}
    </FavoritesContext.Provider>
  );
};
