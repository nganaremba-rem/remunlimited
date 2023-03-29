"use client";

function isGooglePayInstalled(): boolean {
  const userAgent = navigator.userAgent;
  return userAgent.indexOf("Android") > -1 && userAgent.indexOf("Chrome") > -1;
}

function openGooglePay(amount: string): void {
  const packageName = "com.google.android.apps.nbu.paisa.user";
  const paymentData = {
    transactionId: "12345",
    totalPriceStatus: "FINAL",
    totalPrice: amount,
    currencyCode: "INR",
    merchantId: "YOUR_MERCHANT_ID",
  };
  const scheme = `intent://pay/#Intent;scheme=https;package=${packageName};S.payload=${encodeURIComponent(
    JSON.stringify(paymentData)
  )};end;`;

  window.location.href = scheme;
}

function handleClick(amount: string): void {
  if (isGooglePayInstalled()) {
    openGooglePay(amount);
  } else {
    alert("Please install the Google Pay app to proceed.");
  }
}

export default function MyButton() {
  return (
    <div>
      <h1>Nganaremba</h1>
      <button onClick={() => handleClick("100")}>Pay with Google Pay</button>
    </div>
  );
}
