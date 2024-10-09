import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Title from "../../components/shared/Title";
import CampCard from "../../components/campCard/CampCard";
import Spinner from "../../components/spinner/Spinner";
import PaginationDesign from "../../components/peginationDesign/PaginationDesign";
import SearchBar from "../../components/searchBar/SearchBar";
import { useState } from "react";
import img from "../../assets/images/reset.png";
import ResetBtn from "../../components/resetBtn/ResetBtn";

const AvailableCamp = () => {
  const axiosPublic = useAxiosPublic();
  const [search, setSearch] = useState("");

  const { data: availableCamp = [], isLoading } = useQuery({
    queryKey: ["availableCamp", search],
    queryFn: async () => {
      const { data } = await axiosPublic(`/all-camp?search=${search}`);
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  const handleSearch = (e) => {
    e.preventDefault();

    const searchResult = e.target.search_bar.value;
    setSearch(searchResult);
    console.log(searchResult);
  };

  const handleReset = () => {
    setSearch("");
  };

  return (
    <div className="p-4">
      <Title title="Available Camp" />
      <SearchBar handleSearch={handleSearch} />
      <ResetBtn handleReset={handleReset} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {availableCamp.map((popularCamp) => (
          <CampCard key={popularCamp._id} popularCamp={popularCamp} />
        ))}
      </div>

      <PaginationDesign />
    </div>
  );
};

export default AvailableCamp;
