import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageUser = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    });

    // Function to handle making a user an admin
    const handleMakeAdmin = (userId) => {
        // Logic for making the user an admin
        console.log(`Making user with ID ${userId} an admin`);
    };

    // Function to handle making a user a tour guide
    const handleMakeTourGuide = (userId) => {
        // Logic for making the user a tour guide
        console.log(`Making user with ID ${userId} a tour guide`);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
            <table className="min-w-full border border-gray-300">
                <thead>
                    <tr>
                        <th className="border bg-gray-100 p-2">User Name</th>
                        <th className="border bg-gray-100 p-2">User Email</th>
                        <th className="border bg-gray-100 p-2">Role</th>
                        <th className="border bg-gray-100 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="border p-2">{user.name}</td>
                            <td className="border p-2">{user.email}</td>
                            <td className="border p-2">{user.role}</td>
                            <td className="border p-2">
                                <button
                                    onClick={() => handleMakeAdmin(user.id)}
                                    disabled={user.role === 'Admin'}
                                    className={`bg-blue-500 text-white px-4 py-2 rounded mr-2 ${user.role === 'Admin' && 'opacity-50 cursor-not-allowed'}`}
                                >
                                    Make Admin
                                </button>
                                <button
                                    onClick={() => handleMakeTourGuide(user.id)}
                                    disabled={user.role === 'Tour Guide'}
                                    className={`bg-green-500 text-white px-4 py-2 rounded ${user.role === 'Tour Guide' && 'opacity-50 cursor-not-allowed'}`}
                                >
                                    Make Tour Guide
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUser;
