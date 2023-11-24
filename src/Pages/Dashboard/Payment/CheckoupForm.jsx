import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";


const CheckoupForm = () => {
    const [clientSecret,setclientSecret]=useState('');
    const [error,setError]=useState('');
    const stripe = useStripe();
    const {user}=useAuth();
    const elements = useElements();
    const axiosSecure=useAxiosSecure();
    const [cart]=useCart();
    const totalPrice=cart.reduce((total,item)=>total+item.price,0);

    useEffect(()=>{
        axiosSecure.post('/payment-intent',{price:totalPrice})
        .then(res=>{
            console.log(res.data.clientSecret);
            setclientSecret(res.data.clientSecret)
        })

    },[axiosSecure,totalPrice])

    const handleSubmit=async(event)=>{
        event.preventDefault();
        // const form=event.target;
        // const formData=new FormData(form);
        // console.log(formData);
        if (!stripe || !elements) {
            return 
        }
        const card=elements.getElement(CardElement);
        if (card === null) {
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
        // confirm payment method
        const {paymentIntent,error:confirmError}=await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:card,
                billing_details:{
                    name:user?.displayName || 'anonymous',
                    email:user?.email || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('Confirmation Error');
        }else{
            console.log('Payment intent',paymentIntent);
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