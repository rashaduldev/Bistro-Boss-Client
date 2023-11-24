import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";


const CheckoupForm = () => {
    const [clientSeccret,setClientSeccret]=useState('');
    const [error,setError]=useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure=useAxiosSecure();
    const [cart]=useCart();
    const totalPrice=cart.reduce((total,item)=>total+item.price,0);

    useEffect(()=>{
        axiosSecure.post('/payment-intent',{price:totalPrice})
        .then(res=>{
            console.log(res.data.clientSeccret);
            setClientSeccret(res.data.clientSeccret)
        })

    },[axiosSecure,totalPrice])

    const handleSubmit=async(event)=>{
        event.preventDefault();
        const form=event.target;
        const formData=new FormData(form);
        console.log(formData);
        if (!stripe || !elements) {
            return ;
        }
        const card=elements.getElement(CardElement);
        if (card===null) {
            return ;
        }
        const {error,paymentMethod}= await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      <p className="text-red-500">{error}</p>
            </form>
        </div>
    );
};

export default CheckoupForm;