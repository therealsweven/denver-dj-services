import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "./images/white-transparent-logo.png";
import headerTitle from "./images/ddjs-white-transparent.png";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import ClientLoginForm from "./forms/ClientLoginForm";

export default function NavBar() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="navbar bg-accent">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl"
          >
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img
            src={headerLogo}
            className="h-10"
            alt="Denver DJ Services Logo Icon"
          />
          <img
            src={headerTitle}
            className="h-10"
            alt="Denver DJ Services Logo Text"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <select className="rounded text-xs mr-5" data-choose-theme>
              <option value="mytheme">DDJS</option>
              <option value="synthwave">Synthwave</option>
              <option value="cyberpunk">Cyberpunk</option>
              <option value="valentine">Valentine</option>
              <option value="luxury">Luxury</option>
            </select>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ClientLoginForm />
      </div>
    </div>
  );
}
