import useAuth from "../../../Hooks/useAuth";


const UserHome = () => {
    const {user} = useAuth()
    return (
        <div>
            <h2>Welcome Back, {user.displayName ? user.displayName : "Home"}</h2>
        </div>
    );
};

export default UserHome;