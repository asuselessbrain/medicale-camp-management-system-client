import { useQuery } from "@tanstack/react-query";
import useAxiosProtected from "./useAxiosProtected";

const useUser = () => {
  const axiosProtected = useAxiosProtected();

  const { data: users = [], isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosProtected.get("/users");
      return data;
    },
  });
  return [users, isLoading, refetch];
};

export default useUser;
