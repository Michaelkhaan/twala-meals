"use client";

import React, { ReactNode, useState } from "react";

interface Props {
  icon: ReactNode;
  placeholder: string;
  inputClassName?: string;
  className?: string;
}

const Input = ({ icon, placeholder, inputClassName, className }: Props) => {
  const [address, setAddress] = useState("");

  return (
    <div
      className={`w-full flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-2 bg-white shadow-md max-w-md ${className}`}
    >
      {/* Icon */}
      <span className="text-gray-500">{icon}</span>
      {/* Input Field */}
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder={placeholder}
        className={`flex-grow outline-none text-sm font-OpenSans font-bold ${inputClassName}`}
      />
      {/* Close Button */}
      {address && (
        <button
          onClick={() => setAddress("")}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Input;
