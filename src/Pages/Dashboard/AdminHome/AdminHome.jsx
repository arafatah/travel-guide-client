import React from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <title>Admin Home</title>
      </Helmet>
      <div className="flex items-center justify-center mb-4">
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt={`${user?.displayName}'s Profile`}
            className="w-16 h-16 rounded-full"
          />
        ) : (
          <div className="w-16 h-16 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
        )}
        <h2 className="text-3xl font-bold ml-4 text-gray-800 dark:text-white">
          Welcome, {user?.displayName ? user?.displayName : "Admin"}
        </h2>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-md shadow-md">
        <p className="text-gray-600 dark:text-gray-300">
          You are currently logged in as an admin. Manage your dashboard and
          access various administrative features.
        </p>
      </div>
    </div>
  );
};

export default AdminHome;
