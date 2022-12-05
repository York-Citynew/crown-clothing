import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  FormContainer,
  PaymentFormContainer,
  PaymentButton,
} from "./payment-form.styles.jsx";
import { clearCart } from "../../store/features/cart/cart-slice";

const PaymentForm = () => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const { cartTotal } = useSelector((store) => store.cart);
  const { displayName } = useSelector((store) => store.currentUser);
  const paymentHandler = async (e) => {
    e.preventDefault();
    setIsProcessingPayment((prev) => !prev);
    if (!stripe || !elements) return;
    const response = await fetch("/.netlify/functions/create-peyment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: cartTotal * 100 }),
    }).then((res) => res.json());
    let client_secret;
    let paymentResult;
    //fix this
    client_secret = await response.paymentIntent.client_secret;
    paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: displayName ? displayName : "Guest",
        },
      },
    });

    //fix this
    setIsProcessingPayment((prev) => !prev);
    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment successful");
        dispatch(clearCart());
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};
export default PaymentForm;
