import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GrNN7HXPStBJfqmlYYKWwgQMQMIpFtJJITtARFfWqjk3fggytYcq5TdnQsAA6RxFdRLoYmEtWQF7Sxqu5JFfsAG00rDRBiybB";

  function onToken(token) {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="React Clothing Ltd."
      billingAddress
      shippingAddress
      image="/home/sajal/Desktop/cloth-app/src/assets/logo.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripCheckoutButton;
