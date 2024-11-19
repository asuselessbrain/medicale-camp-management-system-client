import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useAxiosProtected from "../../../../hooks/useAxiosProtected";

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Publishable_Key);

const PaymentModal = ({ handleModal, campFee, campName }) => {
  const [clientSecret, setClientSecret] = useState(null);
  const axiosProtected = useAxiosProtected();

  useEffect(() => {
    axiosProtected
      .post("/create-payment-intent", { campFee: campFee })
      .then((res) => setClientSecret(res.data.clientSecret));
  }, [axiosProtected, campFee]);
  return (
    <div
      data
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative w-full max-w-2xl mx-auto top-32 rounded-lg max-h-full border-2 border-gray-600">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Pay Now
            </h3>
            <button
              type="button"
              onClick={handleModal}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <p className="md:px-5 mt-2 text-xl font-bold text-black">
            {campName}
          </p>
          {/* <!-- Modal body --> */}
          <div className="p-4 md:p-5 lg:mt-4">
            {clientSecret && (
              <Elements stripe={stripePromise}>
                <PaymentForm handleModal={handleModal} clientSecret={clientSecret} />
              </Elements>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

PaymentModal.propTypes = {
  handleModal: PropTypes.func.isRequired,
};

export default PaymentModal;
