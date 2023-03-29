"use client";
import { v4 } from "uuid";
interface PaymentParams {
  amount: number;
  currency: string;
  upiId: string;
}

const PaymentButton: React.FC<PaymentParams> = ({
  amount,
  currency,
  upiId,
}) => {
  const handlePayment = () => {
    const packageName = "com.google.android.apps.nbu.paisa.user";
    const paymentData = {
      pa: upiId,
      pn: "RemUnlimited",
      tr: v4(), // Unique transaction ID
      tn: "Shija JioFiber Recharge Payment",
      am: `${amount}.${currency}`, // Payment amount and currency
      cu: currency,
      url: "https://remunlimited.vercel.app", // Your website URL
      mode: "UPI",
      //   mc: "1234", // Merchant Category Code (MCC)
    };
    const data = encodeURIComponent(JSON.stringify(paymentData));

    // Construct the intent URL with the encoded parameters
    const intentUrl = `intent://upi/pay?${data}#Intent;scheme=upi;package=${packageName};S.browser_fallback_url=${paymentData.url};end`;

    // window.location.href = `intent://scan/#Intent;scheme=${scheme};package=${packageName};end;`;
    window.location.href = intentUrl;
  };

  return <button onClick={handlePayment}>Pay with Google Pay</button>;
};

export default function PaymentButtonCus() {
  return <PaymentButton amount={100} currency="INR" upiId="nganaremba@paytm" />;
}
