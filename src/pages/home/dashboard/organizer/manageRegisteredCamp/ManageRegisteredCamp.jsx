import { useState } from "react";
import useAuth from "../../../../../hooks/useAuth";
import useAxiosProtected from "../../../../../hooks/useAxiosProtected";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../../../components/spinner/Spinner";
import ManageRegisteredCampBody from "./ManageRegisteredCampBody";
import Pagination from "../../admin/users/Pagination";
import Title from "../../../../../components/shared/Title";
import { toast } from "react-toastify";

const ManageRegisteredCamp = () => {
  const axiosProtected = useAxiosProtected();
  const { user } = useAuth();
  const numberOfUsersPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const {
    data: manageMyAddedCamp = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["manageMyAddedCamp", user?.email],
    queryFn: async () => {
      const { data } = await axiosProtected(
        `/manage-camp-request/${user?.email}`
      );
      return data;
    },
  });

  const updateConfirmationStatus = async(id, value) => {

    const status = value === 'confirmed' ? "Confirmed" : "Rejected";
    const {data} = await axiosProtected.patch(`/update-confirmation-status/${id}`, {status})
    if(data.modifiedCount>0){
      refetch()
      toast.success(`${status} Successfully!`)
    }
  }

  const { data: userCount = 0, isPending } = useQuery({
    queryKey: ["userCount"],
    queryFn: async () => {
      const { data } = await axiosProtected(
        `/manage-camp-request-count/${user?.email}`
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

  if (isPending) {
    return <Spinner />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container bg-gray-100 mx-auto p-4 rounded-xl">
      <Title title="Mange Registered Camp" />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Participant Name
              </th>
              <th scope="col" className="px-6 py-3">
                Camp Name
              </th>
              <th scope="col" className="px-6 py-3">
                Camp Fees
              </th>
              <th scope="col" className="px-6 py-3">
                Contact Number
              </th>
              <th scope="col" className="px-6 py-3">
                Payment Status
              </th>
              <th scope="col" className="px-6 py-3">
                Confirmation Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {manageMyAddedCamp.map((camp, index) => (
            <ManageRegisteredCampBody
              key={camp._id}
              camp={camp}
              index={index}
              refetch={refetch}
              updateConfirmationStatus={updateConfirmationStatus}
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

export default ManageRegisteredCamp;
