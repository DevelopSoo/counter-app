import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const minusOne = () => {
    setCount((prev) => prev - 1);
  };

  const plusOne = () => {
    setCount((prev) => prev + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <Button onClick={minusOne}>-</Button>
      <span>{count}</span>
      <Button onClick={plusOne}>+</Button>
      <Button onClick={reset}>reset</Button>
    </>
  );
}

function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border border-slate-300 rounded-md py-2 px-4"
    >
      {children}
    </button>
  );
}
