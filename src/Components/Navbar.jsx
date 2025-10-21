import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links = 
    <>
      <NavLink to="/" >
        <li className={"text-black font-semibold"}>
          Home
        </li>
      </NavLink>

      <NavLink to="/plants" >
       <li className={"text-black font-semibold"}>
          Plants
        </li>
      </NavLink>

     <NavLink to="/my_Profile">
        <li className={"text-black font-semibold"}>
          My Profile
        </li>
      </NavLink>
    </>
    return (
       <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
       
        <Link to="/"  className=" bg-gradient-to-r from-[#16A34A] to-[#4ADE80] text-transparent bg-clip-text text-2xl font-bold">GREEN NEST</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
        {links}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={"/auth"} className="btn hover:text-black bg-gradient-to-r from-[#16A34A] to-[#4ADE80] text-white font-bold">
  Log In
</Link>

        
      </div>
    </div>
    );
};

export default Navbar;