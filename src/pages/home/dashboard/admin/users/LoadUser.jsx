import useUser from "../../../../../hooks/useUser";
import LoadUserRow from "./LoadUserRow";
import Pagination from "./Pagination";

const LoadUser = () => {
  const [users] = useUser();
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <tr>
          <th scope="col" className="px-6 py-4">
              
            </th>
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
          <LoadUserRow key={user._id} user={user} index={index} />
        ))}
      </table>

      <Pagination />
    </div>
  );
};

export default LoadUser;
