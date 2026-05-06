"use client";

import { ButtonHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  loading?: boolean;
};

export function Button({ className = "", variant = "primary", loading, children, disabled, ...props }: ButtonProps) {
  const variants = {
    primary: "bg-ink text-white shadow-lift hover:bg-basil",
    secondary: "bg-white/75 text-ink ring-1 ring-mint-200 hover:bg-white",
    ghost: "bg-transparent text-ink hover:bg-white/60",
    danger: "bg-tomato text-white hover:bg-red-700"
  };

  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-button px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
      {children}
    </button>
  );
}
