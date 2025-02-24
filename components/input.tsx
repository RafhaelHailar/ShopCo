import type React from "react";
import { twMerge } from "tailwind-merge";

interface InputProps {
  className?: string;
  icon?: React.ReactElement;
  placeholder?: string;
}

export default function Input({ className, icon, placeholder }: InputProps) {
  return (
    <div
      className={twMerge(
        "flex items-center py-3 rounded-3xl gap-x-3 bg-gray-100 px-5",
        className
      )}
    >
      {icon && icon}
      <input type="text" className="outline-none" placeholder={placeholder} />
    </div>
  );
}
