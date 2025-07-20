'use client';

import { useEffect, useState } from 'react';

const INTERACTIVES_SELECTOR = 'a, button, [role="button"], .cursor-interactive';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  // ❇️ Track mouse position
  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    setMounted(true);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // ❇️ Track hover state on interactive elements
  useEffect(() => {
    function checkHover(e: MouseEvent) {
      const el = e.target as Element;
      if (el && el.closest(INTERACTIVES_SELECTOR)) setHovering(true);
      else setHovering(false);
    }

    window.addEventListener('mouseover', checkHover);
    window.addEventListener('mouseout', checkHover);

    return () => {
      window.removeEventListener('mouseover', checkHover);
      window.removeEventListener('mouseout', checkHover);
    };
  }, []);

  // ❇️ Hide the default system cursor
  useEffect(() => {
    if (mounted) {
      document.body.style.cursor = 'none';
      return () => {
        document.body.style.cursor = '';
      };
    }
  }, [mounted]);

  // ❇️ Trail logic with safe keys
  const [trail, setTrail] = useState<{ x: number; y: number; t: number }[]>([]);
  useEffect(() => {
    if (!mounted) return;
    setTrail((prev) => [
      ...prev.slice(-9),
      { x: pos.x, y: pos.y, t: Date.now() },
    ]);
  }, [pos.x, pos.y, mounted]);

  return (
    <>
      {/* 🌟 Main Cursor */}
      <div
        style={{
          left: pos.x,
          top: pos.y,
          pointerEvents: 'none',
          position: 'fixed',
          zIndex: 99999,
          transform: 'translate(-50%, -50%)',
          transition: hovering
            ? 'transform 0.14s cubic-bezier(0.22, 1, 0.36, 1), background 0.18s'
            : 'transform 0.19s, background 0.3s',
        }}
        className="mix-blend-difference"
      >
        {/* Core */}
        <div
          className={`rounded-full ${
            hovering
              ? 'bg-purple-400/80 border-4 border-purple-200/80 scale-150 animate-pulse'
              : 'bg-white/80 border-2 border-purple-400/40'
          } shadow-xl`}
          style={{
            width: 32,
            height: 32,
            transition: 'all 0.15s cubic-bezier(0.22, 1, 0.36, 1)',
            boxShadow: hovering
              ? '0 0 36px 8px rgba(168, 85, 247, 0.19)'
              : '0 0 16px 3px rgba(168,85,247,0.09)',
            filter: 'blur(0.5px)',
          }}
        />

        {/* Glow/Spotlight */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: hovering ? 90 : 50,
            height: hovering ? 90 : 50,
            background: hovering
              ? 'radial-gradient(circle, rgba(168,85,247,0.20) 0%,rgba(255,255,255,0) 70%)'
              : 'radial-gradient(circle, rgba(168,85,247,0.09) 0%,rgba(255,255,255,0) 70%)',
            borderRadius: '9999px',
            pointerEvents: 'none',
            transform: 'translate(-50%,-50%)',
            transition: 'width 0.22s, height 0.22s, background 0.33s',
          }}
        />
      </div>

      {/* 💫 Trail Effect */}
      <div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          pointerEvents: 'none',
          zIndex: 99998,
        }}
      >
        {trail.map((item, i) => (
          <div
            key={`${item.t}-${i}`} // ✅ unique key
            style={{
              left: item.x,
              top: item.y,
              position: 'fixed',
              width: 14,
              height: 14,
              borderRadius: '9999px',
              transform: 'translate(-50%, -50%)',
              background:
                'radial-gradient(circle, rgba(168, 85, 247, 0.08) 50%, rgba(255,255,255,0) 80%)',
              opacity: 0.2 + (i / trail.length) * 0.8,
              pointerEvents: 'none',
            }}
          />
        ))}
      </div>
    </>
  );
}
