import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-100 bg-opacity-90 items-center flex flex-col sm:flex-row justify-between p-6 sticky top-0 z-10">
      <Link to="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 sm:ml-20 rounded-3xl">
          Home
        </button>
      </Link>
      <Link to="/favorites">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 sm:mr-20 rounded-3xl">
          Favorites
        </button>
      </Link>
    </header>
  );
};
export default Header;
