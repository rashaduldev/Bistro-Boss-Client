import { CardElement } from "@stripe/react-stripe-js";


const CheckoupForm = () => {
    const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const formData=new FormData(form);
        console.log(formData);
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
            </form>
        </div>
    );
};

export default CheckoupForm;