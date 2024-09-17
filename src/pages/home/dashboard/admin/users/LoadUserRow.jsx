import PropTypes from "prop-types";
import { useState } from "react";
import { LiaEditSolid } from "react-icons/lia";
import { MdDeleteForever } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const LoadUserRow = ({ user, index }) => {
  const {
    name,
    imageUrl,
    email,
    phoneNumber,
    registrationTime,
    lastLoginTime,
  } = user;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="px-6 py-4">{index + 1}</td>
        <td className="px-6 py-4">{name}</td>
        <td className="px-6 py-4">
          <img src={imageUrl} alt="userImage" className="rounded" width={46} />
        </td>
        <td className="px-6 py-4">{email}</td>
        <td className="px-6 py-4">{phoneNumber}</td>
        <td className="px-6 py-4">
          {new Date(registrationTime).toLocaleString()}
        </td>
        <td className="px-6 py-4">
          {new Date(lastLoginTime).toLocaleString()}
        </td>
        <td className="px-6 py-4 text-right flex items-center gap-2">
          <button
            onClick={handleToggle}
            className="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
          >
            <LiaEditSolid size={24} />
          </button>

          {/* <!-- Main modal --> */}
          {isOpen && (
            <div
              id="static-modal"
              data-modal-backdrop="static"
              // tabindex="-1"
              aria-hidden="true"
              className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="relative p-4 w-full max-w-md max-h-full">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  {/* <!-- Modal header --> */}
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Update Role
                    </h3>
                    <button
                      type="button"
                      onClick={handleToggle}
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="static-modal"
                    >
                      <RxCross2 size={24} />
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  {/* <!-- Modal body --> */}
                  <div className="p-4 md:p-5 space-y-4">
                    <form className="max-w-sm mx-auto">
                      <label
                        htmlFor="countries"
                        className="block mb-4 text-sm font-medium text-gray-900 dark:text-white text-left"
                      >
                        Select a role
                      </label>
                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>Select a role</option>
                        <option value="US">User</option>
                        <option value="CA">Organizer</option>
                        <option value="FR">Doctor</option>
                        <option value="DE">Admin</option>
                      </select>
                    </form>
                  </div>
                  {/* <!-- Modal footer --> */}
                  <div className="flex items-center p-4 md:p-5">
                    <button
                      data-modal-hide="static-modal"
                      onClick={handleToggle}
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Update
                    </button>
                    <button
                      data-modal-hide="static-modal"
                      onClick={handleToggle}
                      type="button"
                      className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <button className="flex p-2.5 bg-red-500 rounded-xl hover:rounded-3xl hover:bg-red-600 transition-all duration-300 text-white">
            <MdDeleteForever size={24} />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

LoadUserRow.propTypes = {
  user: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default LoadUserRow;
