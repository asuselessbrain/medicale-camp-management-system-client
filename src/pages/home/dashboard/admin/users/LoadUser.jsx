import useUser from "../../../../../hooks/useUser";
import LoadUserRow from "./LoadUserRow";

const LoadUser = () => {
  const [users] = useUser();
  console.log(users);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
          <th scope="col" className="px-6 py-3">
              
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Phone Number
            </th>
            <th scope="col" className="px-6 py-3">
              Account Creation Time
            </th>
            <th scope="col" className="px-6 py-3">
              Last Login
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>

        {users.map((user, index) => (
          <LoadUserRow key={user._id} user={user} index={index} />
        ))}
      </table>
    </div>
  );
};

export default LoadUser;
