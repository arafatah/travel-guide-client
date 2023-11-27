import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Community from "../Pages/Community/Community";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AllPackages from "../Pages/AllPackages/AllPackages";
import TourList from "../Pages/TourTypes/TourList";
import AllStory from "../Pages/Home/StorySection/AllStory/AllStory";
import SingleStory from "../Pages/Home/StorySection/SingleStory";
import Dashboard from "../Layout/Dashboard";
import WishList from "../Pages/Dashboard/WishList/WishList";
import PrivetRoute from "./PrivetRoute";
import WishlistDetails from "../Pages/Dashboard/WishList/WishlistDetails";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import SinglePackageDetails from "../Pages/SinglePackageDetails/SinglePackageDetails";
import TourGuideProfile from "../Pages/TourGuide/TourGuideProfile";
import MyBookings from "../Pages/Dashboard/UserHome/MyBookings";
import GuideHome from "../Pages/Dashboard/GuideHome/GuideHome";
import AssignedTour from "../Pages/Dashboard/GuideHome/AssignedTour";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import ManageUser from "../Pages/Dashboard/AdminHome/ManageUser";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "community",
        element: <Community></Community>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/allPackages",
        element: <AllPackages />,
      },
      {
        path: "/tour-type/:tourType",
        element: <TourList />,
      },
      {
        path: "/allStory",
        element: <AllStory />,
      },
      {
        path: "/allStory/:id",
        element: <SingleStory />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/review/${params.id}`),
      },
      {
        path: "/package/:id",
        element: <SinglePackageDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/packages/${params.id}`),
      },
      {
        path: "/tourGuide/:id",
        element: <TourGuideProfile />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tourGuide/${params.id}`),
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      // User Routes
      {
        path: "wishlist",
        element: (
          <PrivetRoute>
            <WishList />
          </PrivetRoute>
        ),
      },
      {
        path: "userHome",
        element: (
          <PrivetRoute>
            <UserHome />
          </PrivetRoute>
        ),
      },
      {
        path: "userBookings",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "wishlist/packageDetails/:id",
        element: <WishlistDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/wishlist/new/${params.id}`),
      },
      // Guide Routes
      {
        path: "guideProfile",
        element: <PrivetRoute><GuideHome /></PrivetRoute>,
      },
      {
        path: "guideTours",
        element: <PrivetRoute><AssignedTour /></PrivetRoute>,
      },
      // Admin Routes
      {
        path: "adminHome",
        element: <AdminHome/>
      },
      {
        path: "manageUser",
        element: <ManageUser/>
      }
      
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
]);
export default Routes;
