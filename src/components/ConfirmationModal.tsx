import { useFavoritesContext } from "./FavoritesContext";

type prop = {
  id: number;
};

const ConfirmationModal = ({ id }: prop) => {
  const { removeFavorite, setConfirmationBox, confirmationBox } =
    useFavoritesContext();

  return (
    <div className="absolute">
      {confirmationBox ? (
        <div className="fixed z-20 bg-black w-full h-screen bg-opacity-70 flex justify-center items-center">
          <div className="rounded-lg bg-slate-100 bg-opacity-90 py-6 sm:w-1/3 inset-x-1/3 inset-y-1/2">
            <h2 className="text-center">Are you sure?</h2>
            <section className="flex justify-center gap-6">
              <button
                className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl"
                onClick={() => removeFavorite(id)}
              >
                yes
              </button>
              <button
                onClick={() => setConfirmationBox(false)}
                className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl"
              >
                no
              </button>
            </section>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default ConfirmationModal;
