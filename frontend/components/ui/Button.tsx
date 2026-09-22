import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none rounded-md select-none";

    const variants = {
      primary:
        "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white hover:shadow-lg dark:hover:shadow-white/10 active:bg-slate-700 dark:active:bg-slate-200 border border-transparent",
      secondary:
        "bg-surface-card text-foreground hover:bg-surface-hover border border-surface-border active:bg-surface-subtle",
      outline:
        "bg-transparent text-foreground hover:bg-surface-hover border border-surface-border active:bg-surface-subtle",
      ghost:
        "bg-transparent text-foreground-muted hover:text-foreground hover:bg-surface-hover",
      gold:
        "bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-200 dark:via-amber-300 dark:to-amber-200 text-white dark:text-slate-950 font-semibold hover:shadow-lg hover:shadow-amber-500/20 active:brightness-95 border border-amber-600/40 dark:border-amber-300/40",
    };

    const sizes = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5",
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
