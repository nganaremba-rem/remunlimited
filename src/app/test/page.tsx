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
    // Replace the placeholders with your own transaction details
    const vpa = encodeURIComponent(upiId);
    const name = encodeURIComponent("RemUnlimited");
    const transId = encodeURIComponent(v4());
    const am = encodeURIComponent(amount);
    const cur = encodeURIComponent(currency);
    const note = encodeURIComponent("WiFi Recharge");
    const mode = encodeURIComponent("UPI");

    // Construct the intent URL with the encoded parameters
    const intentUrl = `intent://upi/pay?pa=${vpa}&pn=${name}&tr=${transId}&am=${am}&cu=${cur}&tn=${note}&mode=${mode}#Intent;scheme=upi;package=${packageName};S.browser_fallback_url=https://remunlimited.vercel.app;end`;

    // Redirect the user to the intent URL to open Google Pay

    console.log(intentUrl);

    // window.location.href = `intent://scan/#Intent;scheme=${scheme};package=${packageName};end;`;
    window.location.href = intentUrl;
  };

  return <button onClick={handlePayment}>Pay with Google Pay</button>;
};

export default function PaymentButtonCus() {
  return <PaymentButton amount={100} currency="INR" upiId="nganaremba@paytm" />;
}
