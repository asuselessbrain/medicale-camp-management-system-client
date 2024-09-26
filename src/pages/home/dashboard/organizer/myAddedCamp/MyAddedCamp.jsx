import MyAddedCampTableBody from "./MyAddedCampTableBody";

const MyAddedCamp = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Camp Name
            </th>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Camp Fees
            </th>
            <th scope="col" className="px-6 py-3">
              Date & Time
            </th>
            <th scope="col" className="px-6 py-3">
              Location
            </th>
            <th scope="col" className="px-6 py-3">
              Location
            </th>
            <th scope="col" className="px-6 py-3">
              H P Name
            </th>
            <th scope="col" className="px-6 py-3">
              Participant
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <MyAddedCampTableBody />
      </table>
    </div>
  );
};

export default MyAddedCamp;
