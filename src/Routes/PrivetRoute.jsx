
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivetRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useAuth()
    if (loading) {
        return <span className="loading loading-ball loading-lg"></span>

    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} replace to="/login"></Navigate>
};

export default PrivetRoute;