import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const minusOne = () => {
    setCount((prev) => prev - 1);
  };

  const plusOne = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <button
        onClick={minusOne}
        className="border border-slate-300 rounded-md py-2 px-4"
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={plusOne}
        className="border border-slate-300 rounded-md py-2 px-4"
      >
        +
      </button>
    </>
  );
}
