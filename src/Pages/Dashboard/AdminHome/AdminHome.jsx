import useAuth from "../../../Hooks/useAuth";


const AdminHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2>Hello Welcome, {user.displayName ? user?.displayName : "Back"}</h2>
        </div>
    );
};

export default AdminHome;