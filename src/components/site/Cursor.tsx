import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/** Cursor minimalista — apenas em ponteiros finos (desktop). */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState<"idle" | "link" | "media">("idle");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.35 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduce.matches) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-host");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as HTMLElement | null)?.closest?.("[data-cursor]");
      const mode = target?.getAttribute("data-cursor");
      setState(mode === "media" ? "media" : mode ? "link" : "idle");
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("cursor-host");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border border-primary"
        animate={{
          width: state === "media" ? 84 : state === "link" ? 44 : 14,
          height: state === "media" ? 84 : state === "link" ? 44 : 14,
          marginLeft: state === "media" ? -42 : state === "link" ? -22 : -7,
          marginTop: state === "media" ? -42 : state === "link" ? -22 : -7,
          backgroundColor:
            state === "idle" ? "oklch(0.88 0.22 128)" : "oklch(0.88 0.22 128 / 0.08)",
        }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
      >
        {state === "media" && (
          <span className="text-[10px] tracking-[0.18em] text-primary uppercase">Ver</span>
        )}
      </motion.div>
    </motion.div>
  );
}
