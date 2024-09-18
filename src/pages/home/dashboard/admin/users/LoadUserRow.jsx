import PropTypes from "prop-types";
import { useState } from "react";
import { LiaEditSolid } from "react-icons/lia";
import { MdDeleteForever } from "react-icons/md";
import UpdateUserModal from "./UpdateUserModal";
import useAxiosProtected from "../../../../../hooks/useAxiosProtected";
import { toast } from "react-toastify";
import useUser from "../../../../../hooks/useUser";
import Swal from "sweetalert2";

const LoadUserRow = ({ user, index }) => {
  const {
    _id,
    name,
    imageUrl,
    email,
    phoneNumber,
    registrationTime,
    lastLoginTime,
    role,
  } = user;
  const [isOpen, setIsOpen] = useState(false);
  const axiosProtected = useAxiosProtected();
  const [, , refetch] = useUser();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleUpdateRole = async (e) => {
    e.preventDefault();
    const role = e.target.role.value;
    const { data } = await axiosProtected.patch(`/update-user/${email}`, {
      role,
    });
    if (data.modifiedCount > 0) {
      refetch();
      toast.success("User role updated successfully!");
    }
    handleToggle();
  };

  const handleDelete = (id) => {
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
        const res = await axiosProtected.delete(`/delete-user/${id}`);

        if (res.data.deletedCount) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
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
          {role.charAt(0).toUpperCase() + role.slice(1)}
        </td>
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
            <UpdateUserModal
              handleToggle={handleToggle}
              handleUpdateRole={handleUpdateRole}
              role={role}
            />
          )}

          <button
            onClick={() => handleDelete(_id)}
            className="flex p-2.5 bg-red-500 rounded-xl hover:rounded-3xl hover:bg-red-600 transition-all duration-300 text-white"
          >
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
