"use client";
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
      pn: "Your Merchant Name",
      tr: "123456ABCDEF", // Unique transaction ID
      tn: "Payment for goods/services",
      am: `${amount}.${currency}`, // Payment amount and currency
      cu: currency,
      url: "https://www.yourwebsite.com", // Your website URL
      mc: "1234", // Merchant Category Code (MCC)
    };
    const scheme = `upi://pay?${encodeURIComponent(
      JSON.stringify(paymentData)
    )}`;

    window.location.href = `intent://scan/#Intent;scheme=${scheme};package=${packageName};end;`;
  };

  return <button onClick={handlePayment}>Pay with Google Pay</button>;
};

export default function PaymentButtonCus() {
  return <PaymentButton amount={100} currency="INR" upiId="nganaremba@paytm" />;
}
