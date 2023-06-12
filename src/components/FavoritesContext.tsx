import { createContext, useContext, useState } from "react";

type ContextProps = {
  children: React.ReactNode;
};
type FavoritesContextType = {
  currentId: number;
  idList: number[];
  toggleFavorites: (idNumber: number) => void;
  removeFavorite: (idNumber: number) => void;
  confirmationBox: boolean;
  setConfirmationBox: React.Dispatch<React.SetStateAction<boolean>>;
};
const FavoritesContext = createContext<FavoritesContextType>(
  {} as FavoritesContextType
);

const setFavoritesList = (id: number[]) => {
  localStorage.setItem("restaurantId", JSON.stringify(id));
};

export const useFavoritesContext = () => useContext(FavoritesContext);

export const isFavorite = () => {
  if (localStorage.getItem("restaurantId"))
    return JSON.parse(localStorage.getItem("restaurantId")!);
  else return [];
};

export const FavoritesContextProvider = ({ children }: ContextProps) => {
  const [idList, setIdList] = useState<number[]>([]);
  const [currentId, setCurrentId] = useState<number>(10);
  const [confirmationBox, setConfirmationBox] = useState<boolean>(false);

  const toggleFavorites = (idNumber: number) => {
    const fav = isFavorite();
    if (fav.includes(idNumber)) {
      setConfirmationBox(true);
      setCurrentId(idNumber);
    } else {
      fav.push(idNumber);
      setFavoritesList(fav);
      setIdList(fav);
    }
  };

  const removeFavorite = (idNumber: number) => {
    const fav = isFavorite();
    let position = fav.findIndex((id: any) => id == idNumber);
    fav.splice(position, 1);
    setFavoritesList(fav);
    setIdList(fav);
    setConfirmationBox(false);
  };

  return (
    <FavoritesContext.Provider
      value={{
        toggleFavorites,
        removeFavorite,
        idList,
        confirmationBox,
        setConfirmationBox,
        currentId,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
