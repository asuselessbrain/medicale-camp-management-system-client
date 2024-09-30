import PropTypes from "prop-types";
import useAxiosProtected from "../../../../../hooks/useAxiosProtected";
import { toast } from "react-toastify";

const UpdateModal = ({ setShowModal, camp, refetch }) => {
  const axiosProtected = useAxiosProtected();
  const {
    _id,
    campName,
    campFee,
    campTime,
    campLocation,
    healthcareProfessionalName,
    description,
  } = camp;

  const handleUpdate = async (e, id) => {
    e.preventDefault();
    const campName = e.target.campName?.value;
    const campFee = e.target.campFee?.value;
    const campTime = e.target.campTime?.value;
    const campLocation = e.target.campLocation?.value;
    const healthcareProfessionalName =
      e.target.healthcareProfessionalName?.value;
    const description = e.target.description?.value;

    const updatedData = {
      campName,
      campFee,
      campTime,
      campLocation,
      healthcareProfessionalName,
      description,
    };
    const { data } = await axiosProtected.put(
      `/update-camp/${id}`,
      updatedData
    );

    if (data.modifiedCount > 0) {
      refetch();
      setShowModal(false);
      toast.success("Updated Successfully!");
    }
  };

  return (
    <div
      id="crud-modal"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed flex z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-gray-100 rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Update Camp
            </h3>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <form onSubmit={(e) => handleUpdate(e, _id)} className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label
                  htmlFor="campName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Camp Name
                </label>
                <input
                  type="text"
                  name="campName"
                  defaultValue={campName}
                  id="campName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter camp name"
                  required
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="campFee"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Camp Fee
                </label>
                <input
                  type="number"
                  name="campFee"
                  defaultValue={campFee}
                  id="campFee"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter camp fee"
                  required
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="campLocation"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Camp Location
                </label>
                <input
                  type="text"
                  name="campLocation"
                  defaultValue={campLocation}
                  id="campLocation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter camp location"
                  required
                />
              </div>
              <div className="space-y-2 col-span-2">
                <label className="p-3 text-xl font-inter">Camp Time:</label>
                <input
                  type="datetime-local"
                  name="campTime"
                  defaultValue={campTime}
                  id="campTime"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-3 bg-white"
                />
              </div>
              <div className="space-y-2 col-span-2">
                <label
                  htmlFor="healthcareProfessionalName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Healthcare Professional Name
                </label>
                <select
                  id="healthcareProfessionalName"
                  defaultValue={healthcareProfessionalName}
                  name="healthcareProfessionalName"
                  className="block w-full h-12 p-3 rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 bg-white padding: 0;"
                >
                  <option value="">Select Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Camp Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  defaultValue={description}
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter camp description"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Update Camp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

UpdateModal.propTypes = {
  camp: PropTypes.object.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default UpdateModal;
