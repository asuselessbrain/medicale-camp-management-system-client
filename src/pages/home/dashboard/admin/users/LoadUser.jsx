import { useQuery } from "@tanstack/react-query";
import LoadUserRow from "./LoadUserRow";
import Pagination from "./Pagination";
import useAxiosProtected from "../../../../../hooks/useAxiosProtected";
import { useState } from "react";
import Spinner from "../../../../../components/spinner/Spinner";

const LoadUser = () => {
  const axiosProtected = useAxiosProtected();
  const numberOfUsersPerPage = 1;
  const [currentPage, setCurrentPage] = useState(0);

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users",numberOfUsersPerPage,currentPage],
    queryFn: async () => {
      const { data } = await axiosProtected(
        `/users?numberOfUsersPerPage=${numberOfUsersPerPage}&currentPage=${currentPage}`
      );
      return data;
    },
  });
 
  const { data: userCount = 0 } = useQuery({
    queryKey: ["userCount"],
    queryFn: async () => {
      const { data } = await axiosProtected("/user-count");
      return data.result;
    },
  });

  const numberOfPages = Math.ceil(userCount / numberOfUsersPerPage);

  const numberOfPageArray = [...Array(numberOfPages).keys()];

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-4"></th>
            <th scope="col" className="px-6 py-4">
              Name
            </th>
            <th scope="col" className="px-6 py-4">
              Image
            </th>
            <th scope="col" className="px-6 py-4">
              Email
            </th>
            <th scope="col" className="px-6 py-4">
              Phone Number
            </th>
            <th scope="col" className="px-6 py-4">
              Role
            </th>
            <th scope="col" className="px-6 py-4">
              Account Creation Time
            </th>
            <th scope="col" className="px-6 py-4">
              Last Login
            </th>
            <th scope="col" className="px-6 py-4">
              Action
            </th>
          </tr>
        </thead>

        {users.map((user, index) => (
          <LoadUserRow
            key={user._id}
            user={user}
            index={index}
            refetch={refetch}
          />
        ))}
      </table>

      <Pagination
        numberOfPageArray={numberOfPageArray}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default LoadUser;
