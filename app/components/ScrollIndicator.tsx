"use client";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#exemplo"
      className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#E8185A] hover:opacity-70 transition-opacity z-10"
      style={{ animation: "scrollBounce 1.6s ease-in-out infinite" }}
    >
      <span className="text-[11px] tracking-widest uppercase font-semibold">mais detalhes</span>
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </a>
  );
}
