import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";


const AdminHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <Helmet>
                <title>Admin Home</title>
            </Helmet>
            <h2>Hello Welcome, {user?.displayName ? user?.displayName : "Back"}</h2>
        </div>
    );
};

export default AdminHome;