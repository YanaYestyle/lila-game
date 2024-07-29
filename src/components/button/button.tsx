import button from "./button.module.scss";
import { ButtonTheme } from "@/models/button-config";

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
