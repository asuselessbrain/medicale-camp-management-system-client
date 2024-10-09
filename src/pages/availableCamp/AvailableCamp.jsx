import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Title from "../../components/shared/Title";
import CampCard from "../../components/campCard/CampCard";
import Spinner from "../../components/spinner/Spinner";

const AvailableCamp = () => {
  const axiosPublic = useAxiosPublic();

  const { data: availableCamp = [], isLoading } = useQuery({
    queryKey: ["availableCamp"],
    queryFn: async () => {
      const { data } = await axiosPublic("/all-camp");
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Title title="Available Camp" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {availableCamp.map((popularCamp) => (
          <CampCard key={popularCamp._id} popularCamp={popularCamp} />
        ))}
      </div>
    </div>
  );
};

export default AvailableCamp;
