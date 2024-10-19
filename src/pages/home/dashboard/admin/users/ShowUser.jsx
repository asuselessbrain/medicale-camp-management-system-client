import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../../../components/spinner/Spinner";
import LoadUser from "./LoadUser";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import useAxiosProtected from "../../../../../hooks/useAxiosProtected";
import { useState } from "react";
import ResetBtn from "../../../../../components/resetBtn/ResetBtn";
import NoCampFound from "../../../../../components/noCampFound/NoCampFound";

const ShowUser = () => {
  const axiosProtected = useAxiosProtected();
  const numberOfUsersPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const [searchByName, setSearchByName] = useState("");
  const [searchByEmail, setSearchByEmail] = useState("");

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users", numberOfUsersPerPage, currentPage, searchByEmail, searchByName],
    queryFn: async () => {
      const { data } = await axiosProtected(
        `/users?numberOfUsersPerPage=${numberOfUsersPerPage}&currentPage=${currentPage}&searchByName=${searchByName}&searchByEmail=${searchByEmail}`
      );
      return data;
    },
  });

  const { data: userCount = 0, isPending } = useQuery({
    queryKey: ["userCount", searchByEmail, searchByName],
    queryFn: async () => {
      const { data } = await axiosProtected(`/user-count?searchByName=${searchByName}&searchByEmail=${searchByEmail}`);
      return data.result;
    },
  });

  const numberOfPages = Math.ceil(userCount / numberOfUsersPerPage);

  const numberOfPageArray = [...Array(numberOfPages).keys()];

  const handleNextPage = () => {
    if (currentPage < numberOfPageArray.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearchByName = (e) => {
    e.preventDefault();

    const searchResult = e.target.search_bar.value;
    setSearchByName(searchResult);
  };
  const handleSearchByEmail = (e) => {
    e.preventDefault();
    const email = e.target.searchEmail.value;
    setSearchByEmail(email);
  };

  const handleReset = () => {
    setSearchByName("");
    setSearchByEmail("");
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isPending) {
    return <Spinner />;
  }

  if (users.length === 0) {
    return <NoCampFound />;
  }
  return (
    <div className="m-2">
      <div className="mb-6 flex items-center gap-6 justify-between">
        <div className="flex-1 gap-6 flex items-center justify-between">
          <SearchBar
            handleSearchKeyword={handleSearchByName}
            label="Search by Name"
            placeholder="Enter User Name"
            id="search_bar"
          />
          <SearchBar
            handleSearchKeyword={handleSearchByEmail}
            label="Search by Email"
            placeholder="Search by Email"
            id="searchEmail"
          />
        </div>
        <ResetBtn handleReset={handleReset} />
      </div>
      <LoadUser users={users} refetch={refetch} />
      <Pagination
        numberOfPageArray={numberOfPageArray}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </div>
  );
};

export default ShowUser;
