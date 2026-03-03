import React from "react";

function OutlineButton({
  children,
  variant = "default",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg border px-4 py-1.5 text-xs font-medium transition-colors";

  const variants = {
    default:
      "border-slate-300 text-slate-800 bg-white hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800",
    danger:
      "border-red-200 text-red-600 bg-red-50 hover:bg-red-100 dark:border-red-400/30 dark:text-red-300 dark:bg-red-500/10 dark:hover:bg-red-500/20",
  };

  const classes = [base, variants[variant] || variants.default, className]
    .join(" ")
    .trim();

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}

export default OutlineButton;
