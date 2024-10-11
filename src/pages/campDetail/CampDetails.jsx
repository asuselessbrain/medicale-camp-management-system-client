import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosProtected from "../../hooks/useAxiosProtected";
import Spinner from "../../components/spinner/Spinner";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaUserDoctor } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { TbCoinTakaFilled } from "react-icons/tb";
import { IoLocationSharp, IoPeople } from "react-icons/io5";
import JoinCampModal from "./JoinCampModal";
import { useState } from "react";

const CampDetails = () => {
  const { id } = useParams();
  const axiosProtected = useAxiosProtected();
  // const [ratings, setRating] = useState(rating);
  const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

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
    // _id,
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

  const campTimeArr = campTime.split("T");


  return (
    <div style={{ minHeight: "calc(100vh - 280px)" }} className="flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl mb-6 md:mb-10 font-bold text-center">Publish Date:<span className="font-semibold text-xl">{ new Date(publishDate).toLocaleString()}</span></h2>
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex-1 space-y-4">
          <h2 className="text-4xl font-bold">{campName}</h2>
          <p>{description}</p>
          <div className="flex flex-col md:flex-row items-center pt-4 justify-between">
            <div className="flex items-center gap-1 mb-6 md:mb-0 text-gray-600 dark:text-gray-400">
              <FaUserDoctor size={20} />
              <p>{healthcareProfessionalName}</p>
            </div>
            <div className="flex gap-1 items-center text-gray-700 dark:text-gray-400">
              <IoLocationSharp size={24} />
              <p>{campLocation}</p>
            </div>
          </div>

          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                <MdDateRange size={20} />
                <p>{campTimeArr[0]}</p>
              </div>
              <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                <FaRegClock size={20} />
                <p>{campTimeArr[1]}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                <TbCoinTakaFilled size={20} />
                <p>{campFee}</p>
              </div>
              <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                <IoPeople size={20} />
                <p>{participantCount}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img className="rounded" src={imageLink} alt="" />
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex items-center justify-between gap-6 md:gap-0 ">
            <p className="text-2xl font-semibold">Camp Fee: {campFee}</p>
            <Rating
              style={{ maxWidth: 100 }}
              className="text-2xl font-semibold"
              value={rating}
              readOnly
            />
          </div>
          <button onClick={open} className="btn bg-black text-white px-6 py-4 rounded-xl border-none font-semibold">
            Join Now
          </button>
        </div>
      </div>
     {
      isOpen &&  <JoinCampModal isOpen={isOpen} close={close} campData={campData} />
     }
    </div>
  );
};

export default CampDetails;
