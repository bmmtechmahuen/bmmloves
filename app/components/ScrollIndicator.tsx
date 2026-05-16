"use client";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 80) {
        setOpacity(1);
      } else if (y < 220) {
        setOpacity(1 - (y - 80) / 140);
      } else {
        setOpacity(0);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-1 text-[#E8185A] z-10 pointer-events-none"
      style={{
        opacity,
        transition: "opacity 0.4s ease",
        animation: "scrollBounce 1.6s ease-in-out infinite",
      }}
    >
      <span className="text-[11px] tracking-widest uppercase font-semibold">mais detalhes</span>
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(8px); }
        }
      `}</style>
    </div>
  );
}
