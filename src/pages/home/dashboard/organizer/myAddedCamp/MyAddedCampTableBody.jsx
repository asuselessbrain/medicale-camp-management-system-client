import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import DeleteModal from "./DeleteModal";
import Swal from "sweetalert2";

const MyAddedCampTableBody = ({ camp, index }) => {
  const {
    _id,
    campName,
    imageLink,
    campFee,
    campTime,
    campLocation,
    healthcareProfessionalName,
    description,
    organizerEmail,
    organizerName,
  } = camp;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <tbody>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <td className="px-6 py-4">{index + 1}</td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {campName}
        </th>

        <td className="px-6 py-4">
          <img src={imageLink} className="w-12" alt="" />
        </td>
        <td className="px-6 py-4">{campFee} Tk</td>
        <td className="px-6 py-4">{campTime}</td>
        <td className="px-6 py-4">{campLocation}</td>
        <td className="px-6 py-4">{healthcareProfessionalName}</td>
        <td className="px-6 py-4">{organizerName}</td>
        <td className="px-6 py-4">{organizerEmail}</td>
        <td className="px-6 py-4">
          <div className="flex items-center gap-2">
            <button className="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white">
              <FaRegEdit size={20} />
            </button>
            <button
              onClick={()=>handleDelete(_id)}
              className="flex p-2.5 bg-red-500 rounded-xl hover:rounded-3xl hover:bg-red-600 transition-all duration-300 text-white"
            >
              <MdDeleteForever size={20} />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default MyAddedCampTableBody;
