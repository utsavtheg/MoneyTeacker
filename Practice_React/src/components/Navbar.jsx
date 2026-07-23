import React from "react";

const Navbar = ({setToggle}) => {
  return (
    <nav className="bg-slate-900 text-white shadow-md rounded-2xl">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400 cursor-pointer">
          ProductHub
        </h1>

        {/* Menu */}
        <div className="flex items-center gap-8">

          <button className="hover:text-cyan-400 transition cursor-pointer">
            Home
          </button>

          <button className="hover:text-cyan-400 transition cursor-pointer">
            Products
          </button>

          <button className="hover:text-cyan-400 transition cursor-pointer">
            About
          </button>

          <button className="hover:text-cyan-400 transition cursor-pointer">
            Contact
          </button>

        </div>

        {/* Create Product */}
        <button
        onClick={()=>setToggle((prev) => !prev)}
         className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-semibold transition cursor-pointer">
          Create Product
        </button>

      </div>
    </nav>
  );
};

export default Navbar;