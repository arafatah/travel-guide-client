import { FaBook, FaEnvelope, FaHeart, FaHome, FaList, FaUserAlt } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useIsTourGuide from "../Hooks/useIsTourGuide";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isTourGuide] = useIsTourGuide();

  return (
    <div className="flex">
      {/* Dashboard sidebar */}
      <div className="w-64 min-h-screen bg-slate-500">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              {/* Admin options */}
              <li>
                <NavLink
                  to="/dashboard/adminHome"
                  className="flex items-center space-x-2"
                >
                  <FaHome />
                  <span className="hidden md:inline">My Profile</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addPackage"
                  className="flex items-center space-x-2"
                >
                  <FaBook />
                  <span className="hidden md:inline">Add Package</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageUser"
                  className="flex items-center space-x-2"
                >
                  <FaList />
                  <span className="hidden md:inline">Manage Users</span>
                </NavLink>
              </li>
            </>
          ) : isTourGuide ? (
            <>
              {/* Guide options */}
              <li>
                <NavLink
                  to="/dashboard/guideProfile"
                  className="flex items-center space-x-2"
                >
                  <FaHome />
                  <span className="hidden md:inline">Guide Profile</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/guideTours"
                  className="flex items-center space-x-2"
                >
                  <FaUserAlt />
                  <span className="hidden md:inline">My Assigned Tours</span>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {/* Regular user options */}
              <li>
                <NavLink
                  to="/dashboard/userHome"
                  className="flex items-center space-x-2"
                >
                  <FaHome />
                  <span className="hidden md:inline">My Profile</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/userBookings"
                  className="flex items-center space-x-2"
                >
                  <FaBook />
                  <span className="hidden md:inline">My Bookings</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/wishlist"
                  className="flex items-center space-x-2"
                >
                  <FaHeart />
                  <span className="hidden md:inline">My Wishlist</span>
                </NavLink>
              </li>
            </>
          )}

          {/* Shared nav links */}
          <div className="divider my-4"></div>
          <li>
            <NavLink
              to="/"
              className="flex items-center space-x-2"
            >
              <FaHome />
              <span className="hidden md:inline">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="flex items-center space-x-2"
            >
              <FaEnvelope />
              <span className="hidden md:inline">Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Dashboard content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
