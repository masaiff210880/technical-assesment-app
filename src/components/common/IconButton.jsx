import React from "react";
import { useNavigate } from "react-router-dom";

function IconButton({ name, icon: Icon, to, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    if (to) navigate(to);
  };

  return (
    <button
      onClick={handleClick}
      className="
        flex items-center gap-2 px-4 py-2 rounded-md
        text-sm font-medium transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-teal-500
        
        bg-teal-600 text-white
        hover:bg-teal-700
        
        dark:bg-teal-500
        dark:hover:bg-teal-600
      "
    >
      {Icon && <Icon size={18} />}
      <span>{name}</span>
    </button>
  );
}

export default IconButton;
