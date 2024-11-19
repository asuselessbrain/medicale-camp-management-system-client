import { useState } from "react";
import useAxiosProtected from "../../../../hooks/useAxiosProtected";
import useAuth from "../../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../../components/spinner/Spinner";
import Title from "../../../../components/shared/Title";
import TableHead from "../../../../components/shared/TableHead";
import MyRegisteredCampTableBody from "./MyRegisteredCampTableBody";
import Pagination from "../admin/users/Pagination";

const MyRegisteredCamp = () => {
  const axiosProtected = useAxiosProtected();
  const { user } = useAuth();
  const numberOfUsersPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCampId, setSelectedCampId] = useState(null); // Track the camp ID for the modal

  const handleModal = (campId) => {
    setSelectedCampId(campId); // Open modal for the specific camp
  };

  const closeModal = () => {
    setSelectedCampId(null); // Close modal
  };

  const {
    data: manageMyAddedCamp = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["manageMyAddedCamp", user?.email],
    queryFn: async () => {
      const { data } = await axiosProtected(
        `/my-registered-camp/${user?.email}`
      );
      return data;
    },
  });

  const { data: userCount = 0, isPending } = useQuery({
    queryKey: ["userCount"],
    queryFn: async () => {
      const { data } = await axiosProtected(
        `/count-my-added-camp/${user?.email}`
      );
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

  if (isPending || isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container bg-gray-100 mx-auto p-4 rounded-xl">
      <Title title="My Registered Camp" />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <TableHead
            col1="Participant Name"
            col2="Camp Name"
            col3="Camp Fees"
            col4="Payment Status"
            col5="Confirmation Status"
            col6="Payment"
            col7="Cancel"
          />
          {manageMyAddedCamp.map((camp, index) => (
            <MyRegisteredCampTableBody
              key={camp._id}
              camp={camp}
              index={index}
              refetch={refetch}
              handleModal={handleModal}
              isModalOpen={selectedCampId === camp._id} // Check if this camp's modal should be open
              closeModal={closeModal}
            />
          ))}
        </table>
      </div>
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

export default MyRegisteredCamp;
