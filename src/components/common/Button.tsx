import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

type ButtonProps = {
  children: ReactNode;
  to?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary: "bg-[#2E7D32] text-white hover:bg-[#256629] shadow-lg shadow-green-900/15",
  secondary: "bg-white text-[#122018] hover:bg-gray-100 dark:bg-white/10 dark:text-white dark:hover:bg-white/15",
  ghost: "bg-transparent text-[#1565C0] hover:bg-blue-50 dark:text-blue-200 dark:hover:bg-white/10",
};

export function Button({ children, to, type = "button", variant = "primary", className }: ButtonProps) {
  const classes = cn(
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold whitespace-nowrap transition",
    variants[variant],
    className,
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
