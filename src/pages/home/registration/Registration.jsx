import { Link, useNavigate } from "react-router-dom";
import Google from "../../../components/socialMediaLogin/Google";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Registration = () => {
  const { logInWithEmail, updateUser, logOut } = useAuth();
  const axiosPublic = useAxiosPublic();
  const date = new Date();
  const navigation = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const image = form.image.files[0];

    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password Does not Match!");
      return;
    }

    // const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    // if (!regex.test(password)) {
    //   toast.error(
    //     "Password must contain a upperCase, LowerCase, a Number and a special character"
    //   );
    //   return;
    // }

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

    const userInfo = {
      name,
      email,
      phoneNumber,
      registrationTime: date,
      lastLoginTime: new Date(),
      imageUrl,
      role: 'user'
    };
    const res = await axiosPublic.put("/user", userInfo);
    if (res.data.upsertedCount > 0 || res.data.modifiedCount > 0) {
      logInWithEmail(email, password).then(() => {
        updateUser(name, imageUrl).then(async () => {
          await logOut();
          toast.success("SignUp Successful Please Login!");
          navigation("/sign-in");
        });
      });
    }
  };
  return (
    <div className="font-[sans-serif] bg-slate-50 w-full flex items-center py-10 min-h-screen">
      <div className="w-full">
        <Link to="/">
          <img
            src="https://readymadeui.com/readymadeui.svg"
            alt="logo"
            className="w-40 mb-6 mx-auto block"
          />
        </Link>
        <div className="p-6 rounded-2xl bg-white shadow-2xl max-w-xl mx-auto border-2 border-gray-400">
          <div className="mb-4">
            <h3 className="text-gray-800 text-2xl font-bold text-center">
              Create an account
            </h3>
          </div>

          <form onSubmit={handleSignUp} className="space-y-4">
            {/* name input field */}

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Name</label>
              <div className="relative flex items-center">
                <input
                  name="name"
                  type="text"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                  placeholder="Enter name"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-4 h-4 absolute right-4"
                  viewBox="0 0 24 24"
                >
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path
                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>

            {/* email input field */}

            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Email Id
              </label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                  placeholder="Enter email"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-4 h-4 absolute right-4"
                  viewBox="0 0 682.667 682.667"
                >
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                  </defs>
                  <g
                    clipPath="url(#a)"
                    transform="matrix(1.33 0 0 -1.33 0 682.667)"
                  >
                    <path
                      fill="none"
                      strokeMiterlimit="10"
                      strokeWidth="40"
                      d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                      data-original="#000000"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>

            {/* phone Number input field */}

            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Phone Number
              </label>
              <div className="relative flex items-center">
                <input
                  name="phoneNumber"
                  type="number"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                  placeholder="Enter Phone Number"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-4 h-4 absolute right-4"
                  viewBox="0 0 682.667 682.667"
                >
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                  </defs>
                  <g
                    clipPath="url(#a)"
                    transform="matrix(1.33 0 0 -1.33 0 682.667)"
                  >
                    <path
                      fill="none"
                      strokeMiterlimit="10"
                      strokeWidth="40"
                      d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                      data-original="#000000"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>

            {/* password input field */}

            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                  placeholder="Enter password"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-4 h-4 absolute right-4 cursor-pointer"
                  viewBox="0 0 128 128"
                >
                  <path
                    d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>

            {/* confirmPassword input field */}

            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Confirm Password
              </label>
              <div className="relative flex items-center">
                <input
                  name="confirmPassword"
                  type="password"
                  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500"
                  placeholder="Confirm password"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-4 h-4 absolute right-4 cursor-pointer"
                  viewBox="0 0 128 128"
                >
                  <path
                    d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>

            {/* image input field */}

            <div>
              <label className="text-gray-800 text-sm mb-2 block">
                Profile Picture
              </label>
              <div className="relative flex items-center">
                <input name="image" type="file" className="file-input w-full" />
              </div>
            </div>

            <div className="!mt-8">
              <button
                type="submit"
                className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none"
              >
                Create an account
              </button>
            </div>
          </form>

          <div className="flex max-w-md mx-auto flex-col border-opacity-100 my-1">
            <div className="divider">OR</div>
          </div>

          {/* signIn with google */}

          <Google />
          <p className="text-gray-800 text-sm mt-4 text-center">
            Already have an account?{" "}
            <Link
              to="/sign-in"
              className="text-blue-600 font-semibold hover:underline ml-1"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
