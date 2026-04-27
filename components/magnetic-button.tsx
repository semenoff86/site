"use client";

import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import { useRef, useState } from "react";

type MagneticButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function MagneticButton({ children, className = "", ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (event.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.25;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      className={`transition-transform duration-200 ease-out ${className}`}
      data-cursor-hover="true"
      {...props}
    >
      {children}
    </button>
  );
}
