import axios from "axios";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
  baseURL: "https://tour-guide-server-omega.vercel.app",
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();

  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token')
    // console.log('request stopped by interceptors', token)
    config.headers.authorization = `Bearer ${token}`;
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
  // intersect 401 error
  // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        // console.log('status error in the interceptor', status);
        // for 401 or 403 logout the user and move the user to the login
        if (status === 401 || status === 403) {
            await logOut();
        }
        return Promise.reject(error);
    })

  return axiosSecure;
};


export default useAxiosSecure;