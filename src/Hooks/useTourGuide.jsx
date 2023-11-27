import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useTourGuide = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: TourGuide = [] } = useQuery({
    queryKey: ["TourGuide", user?.displayName],
    queryFn: async () => {
      const res = await axiosSecure.get(`/tourGuide/new/${user.displayName}`);
      return res.data;
    },
  });
  return [TourGuide, refetch];
};

export default useTourGuide;
