import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Title from "../../components/shared/Title";
import CampCard from "../../components/campCard/CampCard";
import Spinner from "../../components/spinner/Spinner";
import PaginationDesign from "../../components/peginationDesign/PaginationDesign";
import SearchBar from "../../components/searchBar/SearchBar";
import { useState } from "react";
import ResetBtn from "../../components/resetBtn/ResetBtn";
import NoCampFound from "../../components/noCampFound/NoCampFound";

const AvailableCamp = () => {
  const axiosPublic = useAxiosPublic();
  const [search, setSearch] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const { data: availableCamp = [], isLoading } = useQuery({
    queryKey: ["availableCamp", search, searchLocation],
    queryFn: async () => {
      const { data } = await axiosPublic(`/all-camp?search=${search}&searchLocation=${searchLocation}`);
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }
  
  if(availableCamp.length === 0){
    return <NoCampFound />
  }

  const handleSearch = (e) => {
    e.preventDefault();

    const searchResult = e.target.search_bar.value;
    setSearch(searchResult);
    console.log(searchResult);
  };
  const handelLocation = e => {
    e.preventDefault();
    const location = e.target.searchLocation.value;
    setSearchLocation(location)
  }

  const handleReset = () => {
    setSearch("");
    setSearchLocation("")
  };

  return (
    <div className="p-4">
      <Title title="Available Camp" />
      <SearchBar handleSearch={handleSearch} handelLocation={handelLocation} />
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
