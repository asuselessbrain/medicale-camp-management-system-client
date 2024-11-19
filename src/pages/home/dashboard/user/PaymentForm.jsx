import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import { toast } from "react-toastify";

const PaymentForm = ({ handleModal, clientSecret }) => {
  const stripe = useStripe();
  const element = useElements();
  const [error, setError] = useState("");
  const {user} = useAuth()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !element) {
      return;
    }
    setLoading(true)

    const card = element?.getElement(CardElement);

    if (card === null) {
        setLoading(false);
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setError("");

      const {paymentIntent,error: paymentError} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details:{
            name: user?.displayName || 'anonymous',
            email: user?.email || 'anonymous'
          }
        },
      });
      if(paymentError){
        console.log("[paymentError]", paymentError);
        setError(paymentError.message);
        setLoading(false);
        return;
      }else{
        console.log(paymentIntent)
        if(paymentIntent.status === "succeeded"){
            toast.success("Payment Successful!");
            handleModal()
            setError("")
            setLoading(false)
        }
        
      }
    }
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {error && <p className="text-red-600 my-4">{error}</p>}
      <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
        <button
          type="submit"
          disabled={loading || !stripe || !element}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Pay
        </button>
        <button
          type="button"
          onClick={handleModal}
          className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Decline
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
