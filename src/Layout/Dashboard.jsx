import { FaBook, FaEnvelope, FaHome, FaList, FaSearch } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useIsTourGuide from "../Hooks/useIsTourGuide";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isTourGuide] = useIsTourGuide();
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-blue-700">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              {/* Admin options */}
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addPackage">
                  <FaBook></FaBook>
                  Add Package
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUser">
                  <FaList></FaList>
                  Manage Users
                </NavLink>
              </li>
            </>
          ) : isTourGuide ? (
            <>
              {/* Guide options */}
              <li>
                <NavLink to="/dashboard/guideProfile">Guide Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/guideTours">My Assigned Tours</NavLink>
              </li>
            </>
          ) : (
            <>
              {/* Regular user options */}
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/userBookings">
                  <FaHome></FaHome>
                  My Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/wishlist">
                  <FaHome></FaHome>
                  My Wishlist
                </NavLink>
              </li>
            </>
          )}

          {/* Shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaSearch></FaSearch>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
