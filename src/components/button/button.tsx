import { ButtonHTMLAttributes } from "react";
import button from "./button.module.scss";

interface ButtonTheme extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent";
}

const Button: React.FC<ButtonTheme> = ({
  children,
  variant = "primary",
  ...props
}) => {
  return (
    <button className={`${button.button} ${button[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
