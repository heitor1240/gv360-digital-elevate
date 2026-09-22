import { useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "solid" | "ghost" | "line";
  external?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
};

export function MagneticLink({
  href,
  children,
  className,
  variant = "solid",
  external,
  onClick,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setOffset({
      x: (e.clientX - (r.left + r.width / 2)) * 0.18,
      y: (e.clientY - (r.top + r.height / 2)) * 0.28,
    });
  };

  const base =
    "group relative inline-flex items-center gap-3 text-sm tracking-tight transition-colors duration-300";
  const styles = {
    solid:
      "rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground hover:bg-[#0b4fe0]",
    ghost:
      "rounded-full border border-border-strong px-7 py-3.5 text-foreground hover:border-primary hover:text-primary",
    line: "text-muted-foreground hover:text-primary",
  }[variant];

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      data-cursor="link"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={offset}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.4 }}
      className={cn(base, styles, className)}
    >
      {children}
    </motion.a>
  );
}
