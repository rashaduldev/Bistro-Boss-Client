import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise=loadStripe('');
const Payment = () => {
    return (
        <div>
            <SectionTitle heading={'Payment'} subHeading={'Please pay to eat'}></SectionTitle>
            <div className="text-4xl">
               <Elements stripe={stripePromise}>

               </Elements>
            </div>
        </div>
    );
};

export default Payment;