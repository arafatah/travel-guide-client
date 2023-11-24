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


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>, 
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "community", 
                element: <Community></Community>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: "aboutUs",
                element: <AboutUs></AboutUs>
            },
            {
                path: "contact",
                element: <ContactUs></ContactUs>
            
            }
        ]
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    }
])
export default Routes;