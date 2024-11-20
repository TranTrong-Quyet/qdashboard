import React from "react";

const Header = ({ title, description }) => {
  return (
    <div className="flex w-full max-h-[100px] flex-col items-start pt-1 pb-4">
      <h2 className="text-3xl font-medium mb-2">{title}</h2>
      <span className="text-lg font-normal">{description}</span>
    </div>
  );
};

export default Header;
