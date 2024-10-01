import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosProtected from "../../hooks/useAxiosProtected";
import Spinner from "../../components/spinner/Spinner";

const CampDetails = () => {
  const { id } = useParams();
  const axiosProtected = useAxiosProtected();

  const { data: campData = [], isPending } = useQuery({
    queryKey: ["campData"],
    queryFn: async () => {
      const { data } = await axiosProtected(`/view-camp-details/${id}`);
      return data;
    },
  });

  if (isPending) {
    return <Spinner />;
  }

  return <div></div>;
};

export default CampDetails;
