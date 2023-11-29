import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: "https://tour-guide-server-omega.vercel.app",
});
const useAxiosPublic = () => {
    return  axiosPublic;
};

export default useAxiosPublic;