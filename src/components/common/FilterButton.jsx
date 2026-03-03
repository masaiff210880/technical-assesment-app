import React from "react";

function FilterButton({ name, icon: Icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center gap-2 px-4 py-2 rounded-md border
        text-sm font-medium transition-colors duration-200
        
        bg-white text-slate-700 border-slate-300
        hover:bg-slate-100
        
        dark:bg-slate-800
        dark:text-slate-200
        dark:border-slate-700
        dark:hover:bg-slate-700
      "
    >
      {Icon && <Icon size={18} />}
      <span>{name}</span>
    </button>
  );
}

export default FilterButton;
