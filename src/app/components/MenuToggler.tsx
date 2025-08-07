"use client";

import React, { useState } from "react";

const MenuToggler: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <button
      onClick={toggleMenu}
      className="bg-ink border-gray-800 border-2 text-white p-2 rounded flex items-center sticky top-4 left-4"
      aria-label={isVisible ? "Hide Menu" : "Show Menu"}
    >
      {isVisible ? (
        // Hide icon (e.g. X)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        // Show icon (e.g. hamburger)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
      <span className="sr-only">{isVisible ? "Hide Menu" : "Show Menu"}</span>
    </button>
  );
};

export default MenuToggler;
