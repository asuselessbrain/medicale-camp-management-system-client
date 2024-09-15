import { useQuery } from "@tanstack/react-query";
import useAxiosProtected from "./useAxiosProtected";

const useUser = () => {
  const axiosProtected = useAxiosProtected();

  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosProtected.get("/users");
      console.log("from use user" ,data)
      return data;
    },
  });
  return [users, isLoading];
};

export default useUser;
