import axios from "axios";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import useAuth from "../../../../../hooks/useAuth";
import useAxiosProtected from "../../../../../hooks/useAxiosProtected";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const fileTypes = ["JPG", "PNG", "GIF"];

const AddCamp = () => {
  const [file, setFile] = useState(null);
  const {user} = useAuth()
  const axiosProtected = useAxiosProtected()
  const navigate = useNavigate()

  const imageBbUrl = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_imagebb_api
  }`;
  const handleChange = async (e) => {
    e.preventDefault();
    const image = e.target.image.files[0];
    const form = e.target;
    const campName = form.name.value;
    const campFee = form.campFee.value;
    const campTime = form.campTime.value;
    const campLocation = form.campLocation.value;
    const healthcareProfessionalName = form.healthcareProfessionalName.value;
    const description = form.description.value;
    const organizerName = form.organizerName.value;
    const organizerEmail = form.organizerEmail.value;

    const res = await axios.post(
      imageBbUrl,
      { image },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const imageLink = res.data.data.display_url;

    const campInfo = {
      campName,
      imageLink,
      campFee,
      campTime,
      campLocation,
      healthcareProfessionalName,
      description,
      organizerEmail,
      organizerName
    }

    const postCampRes = await axiosProtected.post("/add-camp", campInfo)

    if(postCampRes.data.insertedId){
      toast.success("Camp Added Successfully!")
      navigate("/dashboard/manage-camp")
    }
    
  };

  const handleChange2 = (file) => {
    setFile(file);
  };

  return (
    <div className="container bg-gray-100 mx-auto p-4 rounded-xl">
      {/* <!-- Page Title --> */}
      <h2 className="text-7xl mx-auto font-semibold text-center font-dancing-script mt-2 text-blue-500">
        Add a Camp
      </h2>

      <form
        onSubmit={handleChange}
        className="grid grid-cols-1 gap-6 mt-10 p-3"
      >
        {/* <!-- camp name and image --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* camp name */}
          <div className="space-y-2">
            <label className="p-3 text-xl font-inter">Camp Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Camp Name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-3 bg-white"
            />
          </div>
          {/* <!-- Image Upload --> */}
          <div className="space-y-2">
            <label className="p-3 text-xl font-inter">Image:</label>
            <FileUploader
              handleChange={handleChange2}
              name="image"
              types={fileTypes}
            />
            <p className="ml-2 mt-3">
              {file ? `File name: ${file.name}` : "no files uploaded yet"}
            </p>
          </div>
        </div>

        {/* <!-- Category --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch h-full">
          {/* camp fee */}
          <div className="space-y-2 h-full">
            <label className="p-3 text-xl font-inter">Camp Fee:</label>
            <input
              type="number"
              id="campFee"
              name="campFee"
              placeholder="Camp Fee"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-3 bg-white"
            />
          </div>
          {/* date and time */}
          <div className="space-y-2 h-full">
            <label className="p-3 text-xl font-inter">Camp Time:</label>
            <input
              type="datetime-local"
              name="campTime"
              id="campTime"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-3 bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch h-full">
          {/* <!-- Location --> */}
          <div className="space-y-2 h-full">
            <label className="p-3 text-xl font-inter">Venue Location</label>
            <input
              type="text"
              id="campLocation"
              name="campLocation"
              placeholder="Venue Location"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-3 bg-white"
            />
          </div>
          {/* healthcare professional name */}
          <div className="space-y-2 h-full">
            <label className="p-3 text-xl font-inter">
              Healthcare Professional Name
            </label>
            <select
              id="healthcareProfessionalName"
              name="healthcareProfessionalName"
              className="block w-full h-12 p-3 rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 bg-white padding: 0;"
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* <!-- Description --> */}
        <div className="space-y-2">
          <label className="p-3 text-xl font-inter">Description</label>
          <textarea
            id="description"
            name="description"
            rows="3"
            placeholder="Event Description"
            className="block w-full h-48 rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-3 bg-white"
          ></textarea>
        </div>

        {/* <!-- Organizer Name and Email --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <!-- Organizer Name --> */}
          <div>
            <input
              type="text"
              id="organizerName"
              name="organizerName"
              defaultValue={user?.displayName}
              readOnly
              placeholder="Organizer Name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-3 bg-white"
            />
          </div>

          {/* <!-- Organizer Email --> */}
          <div>
            <input
              type="email"
              id="organizerEmail"
              name="organizerEmail"
              readOnly
              defaultValue={user?.email}
              placeholder="Organizer Email"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-3 bg-white"
            />
          </div>
        </div>

        {/* <!-- Registration Button --> */}
        <div className="col-span-full mt-6">
          <button
            type="submit"
            className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-full"
          >
            <i>Add Camp</i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCamp;
