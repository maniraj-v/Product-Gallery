"use client";
import { useState } from "react";

export interface IOption {
  value: string;
  label: string;
}

interface IProductDetails {
  label?: string;
  options: IOption[];
  onSelect: (option: IOption) => void;
}

function Dropdown({
  label = "Select",
  options = [],
  onSelect,
}: IProductDetails) {
  const [showOptions, setShowOptions] = useState(false);

  const toggleShow = () => setShowOptions((prevState) => !prevState);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded={showOptions}
          aria-haspopup={showOptions}
          onClick={toggleShow}
        >
          {label}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden={showOptions}
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      {showOptions && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {options.map((option: IOption, index: number) => {
              return (
                <button
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                  tabIndex={-1}
                  id={"menu-item" + index}
                  onClick={() => {
                    onSelect(option);
                    toggleShow();
                  }}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
export default Dropdown;
