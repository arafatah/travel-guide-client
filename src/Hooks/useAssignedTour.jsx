import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAssignedTour = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: assignedTour = [] } = useQuery({
    queryKey: ["assignedTour", user?.displayName],
    queryFn: async () => {
      const res = await axiosSecure.get(`/booking/new/${user.displayName}`);
      return res.data;
    },
  });
  return [assignedTour, refetch];
};

export default useAssignedTour;
