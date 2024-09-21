import axios from "axios";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

const AddCamp = () => {
  const [file, setFile] = useState(null);

  const imageBbUrl = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_imagebb_api
  }`;
  const handleChange = async (e) => {
    e.preventDefault();
    const image = e.target.image.files[0];
    const res = await axios.post(
      imageBbUrl,
      { image },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(res.data.data.display_url);
  };

  const handleChange2 = (file) => {
    setFile(file);
  };

  return (
    <div className="container bg-gray-50 mx-auto p-4 rounded-xl">
      {/* <!-- Page Title --> */}
      <h2 className="text-7xl mx-auto font-semibold text-center font-dancing-script mt-2 text-blue-500">
        Add a Camp
      </h2>

      <form onSubmit={handleChange} className="grid grid-cols-1 gap-6 mt-10 p-3">
        {/* <!-- Title --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Event Title"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-3 bg-white"
            />
          </div>
          {/* <!-- Image Upload --> */}
          <div>
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
        <div>
          <select
            id="category"
            name="category"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-3 bg-white"
          >
            <option value="">Select a category</option>
            <option>Music</option>
            <option>Sports</option>
            <option>Arts</option>
            <option>Technology</option>
          </select>
        </div>

        {/* <!-- Description --> */}
        <div>
          <textarea
            id="description"
            name="description"
            rows="3"
            placeholder="Event Description"
            className="block w-full h-48 rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-3 bg-white"
          ></textarea>
        </div>

        {/* <!-- Location --> */}
        <div>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Location"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-3 bg-white"
          />
        </div>

        {/* <!-- Organizer Name and Email --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <!-- Organizer Name --> */}
          <div>
            <input
              type="text"
              id="organizer-name"
              name="organizer-name"
              placeholder="Organizer Name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-3 bg-white"
            />
          </div>

          {/* <!-- Organizer Email --> */}
          <div>
            <input
              type="email"
              id="organizer-email"
              name="organizer-email"
              placeholder="Organizer Email"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-3 bg-white"
            />
          </div>
        </div>

        {/* <!-- Organizer Address --> */}
        <div>
          <input
            type="text"
            id="organizer-address"
            name="organizer-address"
            placeholder="Organizer Address"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-3 bg-white"
          />
        </div>

        {/* <!-- Start Date and End Date --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <!-- Start Date --> */}
          <div className="flex items-center bg-white rounded-md p-3">
            <span className="flex-shrink-0 flex items-center mr-3 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v2M19 3v2M5 10h14M4 21h16a1 1 0 001-1V8a1 1 0 00-1-1H4a1 1 0 00-1 1v12a1 1 0 001 1z"
                ></path>
              </svg>
              <span className="ml-2">Start Date</span>
            </span>
            <input
              type="datetime-local"
              id="start-date"
              name="start-date"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-3 bg-white"
            />
          </div>

          {/* <!-- End Date --> */}
          <div className="flex items-center bg-white rounded-md">
            <span className="flex-shrink-0 flex items-center mr-3 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v2M19 3v2M5 10h14M4 21h16a1 1 0 001-1V8a1 1 0 00-1-1H4a1 1 0 00-1 1v12a1 1 0 001 1z"
                ></path>
              </svg>
              <span className="ml-2">End Date</span>
            </span>
            <input
              type="datetime-local"
              id="end-date"
              name="end-date"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-3 bg-white"
            />
          </div>
        </div>

        {/* <!-- Status and Tags --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <!-- Status --> */}
          <div className="flex items-center bg-white rounded-md">
            <select
              id="status"
              name="status"
              className="block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 bg-white padding: 0;"
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* <!-- Tags --> */}
          <div>
            <input
              type="text"
              id="tags"
              name="tags"
              placeholder="Tags (comma-separated)"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 h-12 bg-white"
            />
          </div>
        </div>

        {/* <!-- Registration Button --> */}
        <div className="col-span-full mt-6">
          <button
            type="submit"
            className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-full"
          >
            Register for Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCamp;
