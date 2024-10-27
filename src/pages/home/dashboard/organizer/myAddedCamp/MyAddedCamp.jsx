import { useQuery } from "@tanstack/react-query";
import MyAddedCampTableBody from "./MyAddedCampTableBody";
import useAxiosProtected from "../../../../../hooks/useAxiosProtected";
import useAuth from "../../../../../hooks/useAuth";
import Swal from "sweetalert2";
import Pagination from "../../admin/users/Pagination";
import Spinner from "../../../../../components/spinner/Spinner";
import { useState } from "react";

const MyAddedCamp = () => {
  const axiosProtected = useAxiosProtected();
  const { user } = useAuth();
  const numberOfUsersPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const { data: myAddedCamp = [], refetch, isLoading } = useQuery({
    queryKey: ["myAddedCamp", user?.email],
    queryFn: async () => {
      const { data } = await axiosProtected(`/my-added-camp/${user?.email}`);
      return data;
    },
  });

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosProtected.delete(`/delete-my-camp/${id}`);
        if (res.data.deletedCount > 0) {
          refetch()
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  const { data: userCount = 0, isPending } = useQuery({
    queryKey: ["userCount"],
    queryFn: async () => {
      const { data } = await axiosProtected(`/my-added-camp-count/${user?.email}`);
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

  if(isPending){
    return <Spinner />
  }

  if(isLoading){
    return <Spinner />
  }  

  return (
    <div className="container bg-gray-100 mx-auto p-4 rounded-xl">
      <h2 className="text-7xl mx-auto font-semibold text-center font-dancing-script mt-2 mb-10 text-blue-500">
        My Added Camp
      </h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Camp Name
              </th>
              {/* <th scope="col" className="px-6 py-3">
                Image
              </th> */}
              <th scope="col" className="px-6 py-3">
                Camp Fees
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                H P Name
              </th>
              <th scope="col" className="px-6 py-3">
                Organizer Name
              </th>
              <th scope="col" className="px-6 py-3">
                Organizer Email
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {myAddedCamp.map((camp, index) => (
            <MyAddedCampTableBody
              key={camp._id}
              camp={camp}
              index={index}
              handleDelete={handleDelete}
              refetch={refetch}
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

export default MyAddedCamp;
