import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useWishList = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {refetch, data: wishlist=[]} = useQuery({
        queryKey: ["wishlist", user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/wishlist/${user.email}`);
            return res.data;
        }
    })
    return [wishlist,refetch ]
};

export default useWishList; 