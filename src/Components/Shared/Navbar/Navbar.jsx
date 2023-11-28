import { Link, NavLink } from "react-router-dom";
import Container from "../Container";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
import useAdmin from "../../../Hooks/useAdmin";
import useIsTourGuide from "../../../Hooks/useIsTourGuide";

const Navbar = () => {
  const [isAdmin] = useAdmin();
  const [isTourGuide] = useIsTourGuide();

  const { user, logOut } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/community">Community</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <Container>
        <div className="navbar bg-base-100">
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <Link to="/" className="">
              <img src="https://i.ibb.co/6rb7QS2/output-onlinepngtools.png" alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            {user?.email ? (
              <div className="relative inline-block text-left">
                <div
                  onClick={toggleDropdown}
                  className="cursor-pointer flex items-center space-x-1"
                >
                  <div className="avatar">
                    <div className="rounded-full w-10 h-10 m-1">
                      <img src={user?.photoURL} alt="" />
                    </div>
                  </div>
                </div>
                {isDropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-2 px-4">
                      <div className="mb-2">
                        <span className="font-semibold">
                          {user.displayName}
                        </span>
                        <br />
                        <span className="text-gray-500">{user.email}</span>
                      </div>
                      <hr className="my-2" />
                      <Link
                        to={
                          isAdmin
                            ? "/dashboard/adminHome"
                            : isTourGuide
                            ? "/dashboard/guideProfile"
                            : "/dashboard/userHome"
                        }
                        onClick={toggleDropdown}
                        className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Dashboard
                      </Link>
                      <Link
                        to="/offer-announcements"
                        onClick={toggleDropdown}
                        className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Offer Announcements
                      </Link>
                      <button
                        onClick={logOut}
                        className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-1">
                <Link to="/login" className="btn btn-ghost btn-sm rounded-btn">
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="btn btn-ghost btn-sm rounded-btn"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
