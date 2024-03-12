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
      {/* onClick(2) => Button 컴포넌트가 받으려고 하는 데이터의 이름 */}
      {/* minusOne => 실제 기능으로 최종적으로 button 태그 내로 전달하려고 하는 기능 */}
      <Button onClick={minusOne}>-</Button>
      <span>{count}</span>
      <Button onClick={plusOne}>+</Button>
    </>
  );
}

function Button({ children, onClick }) {
  return (
    <button
      // button 태그의 onClick(1) => 원래 버튼 태그가 가지고 있는 onClick 속성
      // {} 내에 있는 onClick(2)은 Button 컴포넌트가 받은 onClick(2)
      onClick={onClick}
      className="border border-slate-300 rounded-md py-2 px-4"
    >
      {children}
    </button>
  );
}
