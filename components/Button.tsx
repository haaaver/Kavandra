"use client";

import { ButtonHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  loading?: boolean;
};

export function Button({ className = "", variant = "primary", loading, children, disabled, ...props }: ButtonProps) {
  const variants = {
    primary: "bg-rose-600 text-white shadow-lift hover:bg-rose-500 hover:shadow-[0_18px_55px_rgba(244,63,94,0.34)]",
    secondary: "bg-white/10 text-ink ring-1 ring-white/15 hover:bg-white/15 hover:ring-rose-400/40",
    ghost: "bg-transparent text-ink hover:bg-white/10 hover:text-rose-200",
    danger: "bg-rose-700 text-white hover:bg-rose-600"
  };

  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-button px-4 py-2 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 ${variants[variant]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
      {children}
    </button>
  );
}
