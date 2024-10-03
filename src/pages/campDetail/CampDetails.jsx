import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosProtected from "../../hooks/useAxiosProtected";
import Spinner from "../../components/spinner/Spinner";
import {
  CiBadgeDollar,
  CiCircleCheck,
  CiLocationOn,
  CiStethoscope,
  CiUser,
} from "react-icons/ci";

const CampDetails = () => {
  const { id } = useParams();
  const axiosProtected = useAxiosProtected();

  const { data: campData = [], isPending } = useQuery({
    queryKey: ["campData"],
    queryFn: async () => {
      const { data } = await axiosProtected(`/view-camp-details/${id}`);
      return data;
    },
  });

  if (isPending) {
    return <Spinner />;
  }

  const {
    _id,
    imageLink,
    campName,
    description,
    campFee,
    campTime,
    campLocation,
    participantCount,
    rating,
    healthcareProfessionalName,
    publishDate,
  } = campData;

  return (
    <div>
      <div className="mx-auto max-w-screen-xl pt-28 text-center">
        <p className="text-gray-500">Published {new Date(publishDate).toLocaleString()}</p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">
          {campName}
        </h1>
        <h2 className="flex justify-center items-center tracking-widest text-sm title-font font-medium text-gray-400 py-2">
          <CiLocationOn size={18} className="mr-2 inline" />
          {campLocation}
        </h2>
        <div className="flex justify-center items-center flex-wrap gap-5">
          {/* <div className="flex gap-5 items-center py-2">
            <div>
              <CiCircleCheck className="mr-2 inline" />
              <span className="text-gray-400 text-sm">{targetAudience}</span>
            </div>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <CiStethoscope size={20} className="mr-2" />
              {professionalsAttendanceCount}
            </span>
          </div> */}
          <div>
            {campFee ? (
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <CiBadgeDollar size={20} className="mr-2" />
                {campFee}
              </span>
            ) : (
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                Free
              </span>
            )}
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <CiUser size={18} className="mr-2" />
              {participantCount}
            </span>
          </div>
        </div>
        {/* <div
          className="mt-6 flex flex-wrap justify-center gap-2"
          aria-label="Tags"
        >
          {specializedServices.map((service, idx) => {
            return (
              <button
                key={idx}
                className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200"
              >
                {service}
              </button>
            );
          })}
        </div> */}
      </div>
      <article className="max-w-screen-lg mx-auto">
        <img
          className="sm:h-[30rem] rounded-xl mt-10 w-full"
          src={imageLink}
          alt="Featured Image"
        />
        <div className="mt-5 max-w-screen-lg space-y-12 px-4 py-10 font-serif text-lg tracking-wide text-gray-700">
          <strong className="text-2xl font-medium">{description}</strong>
        </div>
        <div className="flex justify-center items-center py-5">
          <button
            className="text-white disabled:bg-gradient-to-br disabled:from-slate-400 disabled:via-slate-700 disabled:to-slate-900 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Join Camp
          </button>
        </div>
      </article>
    </div>
  );
};

export default CampDetails;
