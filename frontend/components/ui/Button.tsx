import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold" | "blue";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg select-none";

    const variants = {
      primary:
        "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/20 active:bg-blue-800 border border-transparent",
      blue:
        "bg-brand-navy-900 text-white hover:bg-brand-navy-800 shadow-md shadow-brand-navy-950/20 border border-transparent",
      secondary:
        "bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200 active:bg-slate-300",
      outline:
        "bg-transparent text-slate-700 hover:text-blue-600 hover:bg-blue-50 border border-slate-300 active:bg-blue-100/50",
      ghost:
        "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100",
      gold:
        "bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold hover:shadow-lg hover:shadow-amber-500/20 active:brightness-95 border border-amber-600/40",
    };

    const sizes = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3 gap-2.5",
    };

    const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target={props.target}
          rel={props.rel || (props.target === "_blank" ? "noopener noreferrer" : undefined)}
        >
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={combinedClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
