import React from "react";

const Buttons = ({ label, onclick }) => {
  return (
    <button
      onClick={onclick}
      className="text-[purple] outline max-w-[180px] hover:text-blue-500 hover:bg-blue-900 
      p-3 rounded-md"
    >
      {label || "Button"}
    </button>
  );
};

export default Buttons;
