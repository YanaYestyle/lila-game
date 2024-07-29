import { ButtonHTMLAttributes } from "react";

export interface ButtonTheme extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent";
}

export interface ButtonConfig extends ButtonTheme {
  text?: string;
  icon?: boolean; //TODO: to rethink
  navigateTo: () => void;
}
