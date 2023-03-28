"use client";

function openRazorPay() {
  console.log("openRazorPay");
}

const Button = ({ children }: { children: string }) => {
  return (
    <>
      <button
        className="bg-gradient-to-tr from-orange-400 to bg-rose-500 text-white px-10 py-5 rounded-xl shadow-xl font-extrabold uppercase hover:shadow-inner hover:from-orange-500 hover:to-rose-500"
        onClick={openRazorPay}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
