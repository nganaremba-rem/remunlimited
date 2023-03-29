"use client";

function GooglePayButton({ amount = "100" }: { amount: string }): JSX.Element {
  function isGooglePayInstalled(): boolean {
    const userAgent = navigator.userAgent;
    return (
      userAgent.indexOf("Android") > -1 && userAgent.indexOf("Chrome") > -1
    );
  }

  function openGooglePay(): void {
    const packageName = "com.google.android.apps.walletnfcrel";
    const paymentData = {
      transactionId: "12345",
      totalPriceStatus: "FINAL",
      totalPrice: amount,
      currencyCode: "USD",
      merchantId: "YOUR_MERCHANT_ID",
    };
    const scheme = `intent://pay/#Intent;scheme=https;package=${packageName};S.payload=${encodeURIComponent(
      JSON.stringify(paymentData)
    )};end;`;

    window.location.href = scheme;
  }

  function handleClick(): void {
    if (isGooglePayInstalled()) {
      openGooglePay();
    } else {
      alert("Please install the Google Pay app to proceed.");
    }
  }

  return <button onClick={handleClick}>Pay with Google Pay</button>;
}

export default GooglePayButton;
