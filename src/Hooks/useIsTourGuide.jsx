import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useIsTourGuide = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isTourGuide } = useQuery({
    queryKey: [user?.email, "isTourGuide"],
    enabled: !loading ,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/tourGuide/${user?.email}`);
      console.log(res.data);
      return res.data.tourGuide;
    },
  });
  return [isTourGuide];
};

export default useIsTourGuide;
