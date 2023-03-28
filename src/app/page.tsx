import Button from "./Button";

export default function App() {
  return (
    <>
      <header className={"dark:bg-gray-900 drop-shadow-lg bg-sky-200 p-16"}>
        <h1
          className="text-center 
        drop-shadow-sm bg-gradient-to-tr  dark:from-sky-300 dark:to-green-300 from-sky-600 to-green-600 bg-clip-text text-transparent font-extrabold text-4xl"
        >
          Shija JioFiber
        </h1>
      </header>
      <main className="dark:bg-gray-800 flex-1 dark:text-white flex justify-center items-center">
        {/* Display the button component here */}
        <Button>Pay Now</Button>
      </main>
    </>
  );
}
