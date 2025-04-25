import React from "react";
import { ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-lime-600 flex items-center gap-1">
        <Link to={"/"}>
          <span className="font-extrabold">Vet</span>
          <span className="text-gray-700">Buddy</span>
        </Link>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-6 text-gray-800 font-medium items-center">
        <li 
          className="group relative cursor-pointer hover:text-lime-500 transition-colors"
          onClick={() => navigate('/adopt')}
        >
          Adopt <ChevronDown className="inline w-4 h-4 ml-1" />
        </li>
        <li 
          className="group relative cursor-pointer hover:text-lime-500 transition-colors"
          onClick={() => navigate('/volunteer')}
        >
          Volunteer <ChevronDown className="inline w-4 h-4 ml-1" />
        </li>
        <li className="group relative cursor-pointer">
          Resources <ChevronDown className="inline w-4 h-4 ml-1" />
        </li>
        <li className="group relative cursor-pointer">
          About <ChevronDown className="inline w-4 h-4 ml-1" />
        </li>
        <li className="group relative cursor-pointer">
          Pages <ChevronDown className="inline w-4 h-4 ml-1" />
        </li>
        <li className="cursor-pointer text-orange-600 font-semibold">
          <Link to="/login">Login</Link>
        </li>
      </ul>

      {/* Donate Button */}
      <button 
        onClick={() => navigate('/donate')}
        className="bg-lime-300 hover:bg-lime-400 text-black px-5 py-2 rounded-full font-medium transition duration-200"
      >
        Donate Now
      </button>
    </nav>
  );
};

export default Navbar;
