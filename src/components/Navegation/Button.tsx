import React from "react";
import { IconType } from "react-icons/lib";

type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: ButtonType;
  outline?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  type,
  outline,
  icon: Icon,
}) => {
  return (
    <button
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full py-3 text-base font-semibold ${
        outline ? "bg-transparent" : "bg-primary"
      }
      ${outline ? "border-primary border-[2px]" : "border-none"}
      ${outline ? "text-primary" : "text-white"}
      `}
      disabled={disabled}
      onClick={onClick}
      type={type || "button"}
    >
      {Icon && <Icon className="absolute left-4" size={24} />}
      {label}
    </button>
  );
};

export default Button;
