import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [defaultCount, setDefaultCount] = useState(0);

  const minusOne = () => {
    setCount((prev) => prev - 1);
  };

  const plusOne = () => {
    setCount((prev) => prev + 1);
  };

  const reset = () => {
    setCount(defaultCount);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const preventEventBubbling = (e) => {
    e.stopPropagation();
  };

  const handleDefaultCount = (e) => {
    setDefaultCount(+e.target.value);
    setCount(+e.target.value);
  };

  return (
    <div className="w-dvw h-dvh flex justify-center items-center">
      <div className="border border-slate-300 rounded-md p-6 flex items-center gap-4">
        <Button onClick={minusOne}>-</Button>
        <span>{count}</span>
        <Button onClick={plusOne}>+</Button>
        <Button onClick={reset}>reset</Button>
        <Button onClick={openModal}>
          <SettingIcon />
        </Button>
      </div>
      {/* 모달창 */}
      {isOpen && (
        <div
          onClick={closeModal}
          className="w-dvw h-dvh fixed bg-black bg-opacity-50 flex justify-center items-center"
        >
          <div
            onClick={preventEventBubbling}
            className="bg-white rounded-md p-6 flex flex-col gap-6"
          >
            <h1 className="text-xl font-semibold">Settings</h1>
            <div className="p-6 border border-slate-300 rounded-md font-semibold flex items-center gap-4">
              Default count:
              <input
                type="number"
                className="border rounded-md p-2 w-20"
                value={defaultCount}
                onChange={handleDefaultCount}
              />
            </div>
          </div>
        </div>
      )}
    </div>
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

function SettingIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      data-id="9"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
}
