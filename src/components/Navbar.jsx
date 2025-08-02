import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link to="/">Service Provider</Link>
      </div>
      <div className="flex items-center space-x-5">
        <button className="hover:cursor-pointer">
          <img src="" width="22" height="22" alt="" />
        </button>
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-300">
          About
        </Link>
        <Link to="/services" className="hover:text-gray-300">
          Services
        </Link>

        <Link to="/dashboard" className="hover:text-gray-300">
          Dashboard
        </Link>

        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Logout
        </button>

        <Link to="/login" className="hover:text-gray-300">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
