import { useQuery } from "@tanstack/react-query";
import useAxiosProtected from "../../../hooks/useAxiosProtected";
import Spinner from "../../../components/spinner/Spinner";
import CampCard from "../../../components/campCard/CampCard";
import Title from "../../../components/shared/Title";

const PopularCamp = () => {
  const axiosProtected = useAxiosProtected();

  const { data: popularCamps = [], isLoading } = useQuery({
    queryKey: ["popularCamps"],
    queryFn: async () => {
      const { data } = await axiosProtected("/popular-camp");
      return data;
    },
  });
  console.log(popularCamps);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
        <Title title="Popular Camp" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularCamps.map((popularCamp) => (
          <CampCard key={popularCamp._id} popularCamp={popularCamp} />
        ))}
      </div>
    </div>
  );
};

export default PopularCamp;
