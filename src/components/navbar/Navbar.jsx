import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "../searchBox/SearchBox";

const Navbar = () => {
  // navList Data
  const navList = (
    <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/allproduct"}>All Product</Link>
      </li>
      <li>
        <Link to={"/signup"}>Signup</Link>
      </li>
      <li>
        <Link to={"/user-dashboard"}>Arth</Link>
      </li>
      {/* Admin */}
      {/* <li>
        <Link to={"/"}>Admin</Link>
      </li> */}
      {/* logout */}
      {/* <li>
      Logout
        </li> */}
      {/* Cart */}
      <li>
        <Link to={"/cart"}></Link>
      </li>
    </ul>
  );
  return (
    <div>
      <nav className="bg-pink-600 sticky top-0">
        {/* main  */}
        <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
          {/* left  */}
          <div className="left py-3 lg:py-0">
            <Link to={"/"}>
              <h2 className=" font-bold text-white text-2xl text-center">
                Earth-Store
              </h2>
            </Link>
          </div>
          {/* right  */}
          <div className="right flex justify-center mb-4 lg:mb-0">
            {navList}
          </div>
          {/* Search Bar  */}
          <SearchBox />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
