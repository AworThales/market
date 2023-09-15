import "./pay.scss"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import newRequest from "../../utils/newRequest";
import {useParams} from "react-router-dom";
import { CheckoutForm } from "../../components/checkoutForm/CheckoutForm";

const stripePromise = loadStripe("pk_test_51NqbSeJMgINfUakQ7waYbK8viUwzivH9ZyCKN7LXk4CCgLuPzssP4A9aXhqLDJbTnDhmyYtEhLwy4N9n8uprOsBx00wQiL9BWf");

export const Pay = () => {
    const {id} = useParams()
    const [clientSecret, setClientSecret] = useState("");


    useEffect(()=>{
        const makeRequest = async () =>{
            try {
                const res = newRequest.post(`/orders/create-payment-intent/${id}`)
                setClientSecret(res.data.clientSecret);
            } catch (err) {
                console.log(err);
            }
        };
        makeRequest();
    }, []);


    const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };

  return (
    <div className="pay">
        {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  )
}
