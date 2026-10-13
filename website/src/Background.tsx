import { useEffect, useRef } from "react";
const css = `
.deep-dive-rays { animation: deep-dive-sway 12s ease-in-out infinite alternate; transform-origin: 50% 0; }
@keyframes deep-dive-sway {
  from { transform: rotate(-3deg); }
  to   { transform: rotate(3deg); }
}
@media (prefers-reduced-motion: reduce) {
  .deep-dive-rays { animation: none; }
}
`;

const raysMask =
  "radial-gradient(ellipse 80% 70% at 50% 0%, #000 10%, transparent 75%)";

const grain =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

function Background() {
  const waterRef = useRef<HTMLDivElement>(null);
  const raysRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        maxScroll > 0
          ? Math.min(1, Math.max(0, window.scrollY / maxScroll))
          : 0;

      if (waterRef.current)
        waterRef.current.style.transform = `translateY(${-progress * 200}vh)`;

      if (raysRef.current)
        raysRef.current.style.opacity = String(
          Math.max(0, 1 - window.scrollY / (window.innerHeight * 0.5)),
        );
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black"
    >
      <style>{css}</style>
      <div
        ref={waterRef}
        className="absolute inset-x-0 top-0 h-[300vh] transition-transform duration-700 ease-out will-change-transform"
        style={{
          background:
            "linear-gradient(to bottom, #0b3b3c 0%, #082f3d 20%, #0a2540 45%, #061633 70%, #02060f 100%)",
        }}
      />
      <div
        ref={raysRef}
        className="absolute inset-0 transition-opacity duration-700"
      >
        <div
          className="deep-dive-rays absolute -inset-x-1/4 top-0 h-full blur-md"
          style={{
            background:
              "repeating-linear-gradient(100deg, rgba(94, 234, 212, 0.07) 0 40px, transparent 40px 130px)",
            maskImage: raysMask,
            WebkitMaskImage: raysMask,
          }}
        />
      </div>
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: grain }}
      />
    </div>
  );
}

export default Background;
