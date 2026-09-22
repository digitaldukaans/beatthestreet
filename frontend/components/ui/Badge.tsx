import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "green" | "gold" | "blue" | "outline" | "muted";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "default",
  size = "sm",
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-blue-50 text-blue-700 border-blue-200 font-semibold",
    blue: "bg-blue-50 text-blue-700 border-blue-200 font-semibold",
    green: "bg-emerald-50 text-emerald-700 border-emerald-200 font-semibold",
    gold: "bg-amber-50 text-amber-800 border-amber-200 font-semibold",
    outline: "bg-white text-slate-700 border-slate-300 font-medium",
    muted: "bg-slate-100 text-slate-600 border-slate-200 font-medium",
  };

  const sizes = {
    sm: "text-[11px] px-2.5 py-0.5 tracking-wider uppercase font-mono",
    md: "text-xs px-3 py-1 font-medium",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border transition-colors",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
