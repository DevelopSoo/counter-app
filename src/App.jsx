import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [defaultCount, setDefaultCount] = useState(0);
  const [limit, setLimit] = useState(0);
  const [hasLimit, setHasLimit] = useState(false);
  const [theme, setTheme] = useState("bg-white");

  const minusOne = () => {
    setCount((prev) => prev - 1);
  };

  const plusOne = () => {
    if (hasLimit && count >= limit) {
      return;
    } else {
      setCount((prev) => prev + 1);
    }
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

  const handleLimitCount = (e) => {
    setLimit(+e.target.value);
  };

  const toggleLimit = (e) => {
    setHasLimit(e.target.checked);
  };

  const handleTheme = (bgColor) => {
    setTheme(bgColor);
  };

  return (
    <div className={`w-dvw h-dvh flex justify-center items-center ${theme}`}>
      <div
        className={`border border-slate-300 rounded-md p-6 flex items-center gap-4 ${
          theme !== "bg-white" && "text-white"
        }`}
      >
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
            <div className="p-6 border border-slate-300 rounded-md font-semibold">
              <div className="flex items-center gap-4 mb-2">
                Limit off / on:{" "}
                <ToggleButton onClick={toggleLimit} isChecked={hasLimit} />
              </div>
              <div className="flex items-center gap-4">
                Limit:
                <input
                  disabled={!hasLimit}
                  type="number"
                  className={`border rounded-md p-2 w-20 ${
                    !hasLimit && "text-gray-400"
                  }`}
                  value={limit}
                  onChange={handleLimitCount}
                />
              </div>
            </div>
            <div className="p-6 border border-slate-300 rounded-md font-semibold flex flex-col gap-2">
              <div className="flex gap-4">
                <Button
                  onClick={() => handleTheme("bg-white")}
                  className={"w-10 h-10 bg-white"}
                ></Button>
                <Button
                  onClick={() => handleTheme("bg-slate-500")}
                  className={"w-10 h-10 bg-slate-500 border-slate-500"}
                ></Button>
                <Button
                  onClick={() => handleTheme("bg-cyan-500")}
                  className={"w-10 h-10 bg-cyan-500 border-cyan-500"}
                ></Button>
                <Button
                  onClick={() => handleTheme("bg-fuchsia-500")}
                  className={"w-10 h-10 bg-fuchsia-500 border-fuchsia-500"}
                ></Button>
              </div>
              <div className="flex gap-4">
                <Button
                  onClick={() => handleTheme("bg-rose-500")}
                  className={"w-10 h-10 bg-rose-500 border-rose-500"}
                ></Button>
                <Button
                  onClick={() => handleTheme("bg-yellow-500")}
                  className={"w-10 h-10 bg-yellow-500 border-yellow-300"}
                ></Button>
                <Button
                  onClick={() => handleTheme("bg-green-500")}
                  className={"w-10 h-10 bg-green-500 border-green-500"}
                ></Button>
                <Button
                  onClick={() => handleTheme("bg-pink-400")}
                  className={"w-10 h-10 bg-pink-400 border-pink-400"}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`border border-slate-300 rounded-md py-2 px-4 ${className}`}
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

function ToggleButton({ onClick, isChecked }) {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onClick}
        checked={isChecked}
      ></input>
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-blue-500"></div>
    </label>
  );
}
