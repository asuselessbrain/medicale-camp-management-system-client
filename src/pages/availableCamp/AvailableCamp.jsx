import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Title from "../../components/shared/Title";
import CampCard from "../../components/campCard/CampCard";
import Spinner from "../../components/spinner/Spinner";
import { useState } from "react";
import ResetBtn from "../../components/resetBtn/ResetBtn";
import NoCampFound from "../../components/noCampFound/NoCampFound";
import SearchBar from "../home/dashboard/admin/users/SearchBar";
import Sorting from "../../components/sorting/Sorting";
import Pagination from "../home/dashboard/admin/users/Pagination";

const AvailableCamp = () => {
  const axiosPublic = useAxiosPublic();
  const [search, setSearch] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const numberOfCampPerPage = 12;
  const [currentPage, setCurrentPage] = useState(0);

  const { data: availableCamp = [], isLoading } = useQuery({
    queryKey: [
      "availableCamp",
      search,
      searchLocation,
      currentPage,
      numberOfCampPerPage,
    ],
    queryFn: async () => {
      const { data } = await axiosPublic(
        `/all-camp?search=${search}&searchLocation=${searchLocation}&currentPage=${currentPage}&numberOfCampPerPage=${numberOfCampPerPage}`
      );
      return data;
    },
  });

  const { data: availableCampNumber = 0, isFetching } = useQuery({
    queryKey: ["availableCampNumber", search, searchLocation],
    queryFn: async () => {
      const { data } = await axiosPublic(
        `/get-total-camp-number?search=${search}&searchLocation=${searchLocation}`
      );
      return data.totalCamp;
    },
  });

  const numberOfPages = Math.ceil(availableCampNumber / numberOfCampPerPage);

  const pageNumbering = [...Array(numberOfPages).keys()];

  const handleNextPage = () => {
    if (currentPage < pageNumbering.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (isFetching) {
    return <Spinner />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (availableCamp.length === 0) {
    return <NoCampFound />;
  }

  const handleSearch = (e) => {
    e.preventDefault();

    const searchResult = e.target.search_bar.value;
    setSearch(searchResult);
  };
  const handelLocation = (e) => {
    e.preventDefault();
    const location = e.target.searchLocation.value;
    setSearchLocation(location);
  };

  const handleReset = () => {
    setSearch("");
    setSearchLocation("");
  };

  return (
    <div className="p-4">
      <Title title="Available Camp" />
      <div className="flex items-center justify-between mb-10 gap-6">
        <div className="flex flex-col md:flex-row items-center gap-6 justify-between flex-1">
          <SearchBar
            handleSearchKeyword={handleSearch}
            label="Search by Camp Name"
            placeholder="Enter your Camp Name"
            id="search_bar"
          />
          <SearchBar
            handleSearchKeyword={handelLocation}
            label="Search by Location"
            placeholder="Enter your Location"
            id="searchLocation"
          />
        </div>
        <Sorting />
        <ResetBtn handleReset={handleReset} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {availableCamp.map((popularCamp) => (
          <CampCard key={popularCamp._id} popularCamp={popularCamp} />
        ))}
      </div>

      <Pagination numberOfPageArray={pageNumbering}
        setCurrentPage={setCurrentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        currentPage={currentPage} />
    </div>
  );
};

export default AvailableCamp;
