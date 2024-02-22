import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBox from "../searchBox/SearchBox";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("users"));

  const cartItems = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear("users");
    navigate("/");
  };
  // navList Data
  const navList = (
    <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/allproduct"}>All Product</Link>
      </li>
      {!user ? (
        <li>
          <Link to={"/signup"}>Signup</Link>
        </li>
      ) : (
        ""
      )}

      {!user ? (
        <li>
          <Link to={"/login"}>login</Link>
        </li>
      ) : (
        ""
      )}
      {user?.role === "user" && (
        <li>
          <Link to={"/user-dashboard"}>{user?.name}</Link>
        </li>
      )}
      {/* Admin */}
      {user?.role === "admin" && (
        <li>
          <Link to={"/admin-dashboard"}>Admin-{user.name}</Link>
        </li>
      )}
      {/* logout */}

      {user && (
        <li className="cursor-pointer" onClick={logout}>
          Logout
        </li>
      )}
      {/* Cart */}
      <li>
        <Link to={"/cart"}>Cart({cartItems.length})</Link>
      </li>
    </ul>
  );
  return (
    <div className="sticky top-0">
      <nav className="bg-pink-600 ">
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
