import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

const AddCamp = () => {
  // <h2 classNameName="text-7xl mx-auto font-semibold text-center font-dancing-script my-2 text-blue-500">
  //       Add a Camp
  //     </h2>

  // const [file, setFile] = useState(null);
  const handleChange = (e) => {
    e.preventDefault();
    const file = e.target.file.files[0];
    console.log(file);
  };

  return (
    <div className="container mx-auto p-4">
      {/* <!-- Page Title --> */}
      <h1 className="text-3xl font-bold text-[black] mb-6">Create Event</h1>

      <form onSubmit={handleChange} className="grid grid-cols-1 gap-6">
        {/* <!-- Title --> */}
        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-2">
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Event Title"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-[#f6f6f6]"
            />
          </div>
          {/* <!-- Image Upload --> */}
          <FileUploader name="file" types={fileTypes} />
        </div>

        {/* <!-- Category --> */}
        <div className="p-2">
          <select
            id="category"
            name="category"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-[#f6f6f6]"
          >
            <option value="">Select a category</option>
            <option>Music</option>
            <option>Sports</option>
            <option>Arts</option>
            <option>Technology</option>
          </select>
        </div>

        {/* <!-- Description and Image Upload --> */}

        {/* <!-- Description --> */}
        <div>
          <textarea
            id="description"
            name="description"
            rows="3"
            placeholder="Event Description"
            className="block w-full h-48 rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-[#f6f6f6]"
          ></textarea>
        </div>

        {/* <!-- Location --> */}
        <div className="p-2">
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Location"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-[#f6f6f6]"
          />
        </div>

        {/* <!-- Organizer Name and Email --> */}
        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <!-- Organizer Name --> */}
          <div>
            <input
              type="text"
              id="organizer-name"
              name="organizer-name"
              placeholder="Organizer Name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-[#f6f6f6]"
            />
          </div>

          {/* <!-- Organizer Email --> */}
          <div>
            <input
              type="email"
              id="organizer-email"
              name="organizer-email"
              placeholder="Organizer Email"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-[#f6f6f6]"
            />
          </div>
        </div>

        {/* <!-- Organizer Address --> */}
        <div className="p-2">
          <input
            type="text"
            id="organizer-address"
            name="organizer-address"
            placeholder="Organizer Address"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-[#f6f6f6]"
          />
        </div>

        {/* <!-- Start Date and End Date --> */}
        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <!-- Start Date --> */}
          <div className="flex items-center bg-[#f6f6f6] rounded-md p-2">
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
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-[#f6f6f6]"
            />
          </div>

          {/* <!-- End Date --> */}
          <div className="flex items-center bg-[#f6f6f6] rounded-md p-2">
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
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2 bg-[#f6f6f6]"
            />
          </div>
        </div>

        {/* <!-- Status and Tags --> */}
        <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* <!-- Status --> */}
          <div className="flex items-center bg-[#f6f6f6] rounded-md">
            <select
              id="status"
              name="status"
              className="block w-full h-12 rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 bg-[#f6f6f6] padding: 0;"
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
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 h-12 bg-[#f6f6f6]"
            />
          </div>
        </div>

        {/* <!-- Registration Button --> */}
        <div className="col-span-full mt-6 p-2">
          <button
            type="submit"
            className="block w-full bg-[#8c0327] hover:bg-[#6b0220] text-white font-bold py-3 px-4 rounded-full"
          >
            Register for Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCamp;
