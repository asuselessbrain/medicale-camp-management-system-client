import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../../../components/spinner/Spinner";
import LoadUser from "./LoadUser";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import useAxiosProtected from "../../../../../hooks/useAxiosProtected";
import { useState } from "react";

const ShowUser = () => {
  const axiosProtected = useAxiosProtected();
  const numberOfUsersPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users", numberOfUsersPerPage, currentPage],
    queryFn: async () => {
      const { data } = await axiosProtected(
        `/users?numberOfUsersPerPage=${numberOfUsersPerPage}&currentPage=${currentPage}`
      );
      return data;
    },
  });

  const { data: userCount = 0, isPending } = useQuery({
    queryKey: ["userCount"],
    queryFn: async () => {
      const { data } = await axiosProtected("/user-count");
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

  if (isLoading) {
    return <Spinner />;
  }

  if (isPending) {
    return <Spinner />;
  }
  return (
    <div className="m-2">
      <SearchBar />
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
