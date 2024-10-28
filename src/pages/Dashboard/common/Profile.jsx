import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import UpdateProfileForm from "./UpdateProfileForm";
import { toast } from "react-toastify";
import axios from "axios";

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [updateProfile, setUPdateProfile] = useState(false);

  const handleUpdateProfile = () => {
    setUPdateProfile(!updateProfile);
  };

  const handleUpdate = async(e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.files[0];
    const imagebbUrl = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_imagebb_api
    }`;

    const resImagebb = await axios.post(
      imagebbUrl,
      { image },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const imageUrl = resImagebb.data.data.display_url;

    await updateUser(name, imageUrl).then(async () => {
      toast.success("User updated successfully!");
      setUPdateProfile(false)
    });

  }
  return (
    <div className="flex justify-center items-center h-screen relative">
      <div className="bg-white shadow-lg rounded-2xl w-3/5">
        <img
          alt="profile"
          src="https://wallpapercave.com/wp/wp10784415.jpg"
          className="w-full mb-4 rounded-t-lg h-36"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          {/* <p className='p-2 uppercase px-4 text-xs text-white bg-pink-500 rounded-full'>
              {role}
            </p> */}
          <p className="mt-2 text-xl font-medium text-gray-800 ">
            User Id: {user?.uid}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black ">
                  {user?.displayName}
                </span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black ">{user?.email}</span>
              </p>

              <div>
                <button
                  onClick={handleUpdateProfile}
                  className="bg-[#F43F5E] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1"
                >
                  Update Profile
                </button>
                <button className="bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {updateProfile && (
        <div className="absolute z-10 w-full">
          <UpdateProfileForm handleUpdate={handleUpdate} />
        </div>
      )}
    </div>
  );
};

export default Profile;
