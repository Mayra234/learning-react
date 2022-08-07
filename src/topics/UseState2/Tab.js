import React from "react";

export const Tab = ({ text, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ border: "1px solid black", padding: 10, cursor: "pointer" }}
    >
      {text}
    </div>
  );
};
