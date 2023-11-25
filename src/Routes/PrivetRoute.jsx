import { useContext } from "react";
import { AuthContext } from "../Components/Utility/AuthProvider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <span className="loading loading-ball loading-lg"></span>

    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} replace to="/login"></Navigate>
};

export default PrivetRoute;