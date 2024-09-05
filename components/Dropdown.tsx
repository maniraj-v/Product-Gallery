"use client";
import { useState } from "react";

export interface IOption {
  value: string;
  label: string;
}

interface IProductDetails {
  label?: string;
  options: IOption[];
  onSelect: (option: IOption["value"]) => void;
}

function Dropdown({
  label = "Select",
  options = [],
  onSelect,
}: IProductDetails) {
  const [showOptions, setShowOptions] = useState(false);

  const toggleShow = () => setShowOptions((prevState) => !prevState);

  return (
    <div className="flex gap-4 items-center">
      <label htmlFor="select" className="text-gray-700">
        {label} :
      </label>
      <select
        id="select"
        onChange={(e) => {
          onSelect(e.target.value);
        }}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
      >
        {options.map((option) => {
          return (
            <option value={option.value} key={option.label}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
export default Dropdown;
