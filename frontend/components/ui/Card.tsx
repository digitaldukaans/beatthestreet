import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export function Card({ className, hoverEffect = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg bg-surface border border-surface-border p-6 transition-all duration-300 relative overflow-hidden",
        hoverEffect && "hover:border-slate-700 hover:bg-surface-hover/80 hover:shadow-xl hover:shadow-black/40",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

