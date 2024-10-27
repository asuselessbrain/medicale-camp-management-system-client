import { useQuery } from "@tanstack/react-query";
import Title from "../../../components/shared/Title";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Spinner from "../../../components/spinner/Spinner";
import CampCard from "../../../components/campCard/CampCard";
import { Link } from "react-router-dom";

const PreviousCamp = () => {
  const axiosPublic = useAxiosPublic();

  const { data: previousCamp = [], isLoading } = useQuery({
    queryKey: ["previousCamp"],
    queryFn: async () => {
      const { data } = await axiosPublic("/previous-camp");
      return data;
    },
  });

  console.log(previousCamp);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <Title title="Previous Camp" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {previousCamp.map((camp) => (
          <CampCard key={camp._id} popularCamp={camp} />
        ))}
      </div>
      <Link to="/available-camp">
        <button className="flex mx-auto px-3 py-2 border-b-8 duration-1000 border-blue-500 hover:bg-blue-700 hover:text-white my-10 font-semibold text-xl">
          Show Available Camp
        </button>
      </Link>
    </div>
  );
};

export default PreviousCamp;
