import { useEffect, useRef, useState } from "react";
import heroWorldMobil from "/src/assets/background/hero-world-purpil-mobil.png";
import heroWorldDesktop from "/src/assets/background/hero-world-purpil-4k.png";
import advisoryStackMobile from "./assets/diagrams/advisory-stack-mobil.png";
import advisoryStackDesktop from "./assets/diagrams/advisory-stack-desktop.png";


const MD_BREAKPOINT = 768; // Tailwind md = 768px

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false); // animation state
  const [menuVisible, setMenuVisible] = useState(false); // mount/unmount
  const closeTimer = useRef<number | null>(null);

  const openMenu = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setMenuVisible(true);
    requestAnimationFrame(() => setMenuOpen(true));
  };

  const closeMenu = () => {
    setMenuOpen(false);
    closeTimer.current = window.setTimeout(() => {
      setMenuVisible(false);
    }, 220);
  };

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // close mobile menu if switching to md+
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= MD_BREAKPOINT) {
        setMenuOpen(false);
        setMenuVisible(false);
      }
    };
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <main className="min-h-screen">
      {/* FIX HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="relative mx-auto flex h-16 items-center justify-between px-5">
          {/* background */}
          <div className="absolute inset-0 bg-white border-b border-black/5" />

          {/* Brand */}
          <div className="relative z-10 flex items-center">
            <div className="relative top-[2px]">
              <span
                className="text-[22px] tracking-[0.01em] text-[#C9A24A]"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                D&apos;OROVIA
              </span>
            </div>
          </div>

          {/* Desktop NAV */}
          <nav className="relative z-10 hidden md:flex items-center gap-8 text-[14px]">
            <a className="text-black/70 hover:text-black transition" href="#services">
              Services
            </a>
            <a className="text-black/70 hover:text-black transition" href="#about">
              About
            </a>
            <a className="text-black/70 hover:text-black transition" href="#careers">
              Careers
            </a>
            <a className="text-black/70 hover:text-black transition" href="#contact">
              Contact
            </a>

            <button className="ml-2 rounded-lg bg-[#C9A24A] px-4 py-2 text-sm font-medium text-white hover:brightness-110 transition">
              Access Request
            </button>
          </nav>

          {/* Hamburger (mobile only) */}
          <button
            className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 bg-white/70 md:hidden"
            aria-label="Open menu"
            onClick={openMenu}
          >
            <div className="flex flex-col gap-[4px]">
              <span className="h-[2px] w-5 bg-black/80" />
              <span className="h-[2px] w-5 bg-black/80" />
              <span className="h-[2px] w-5 bg-black/80" />
            </div>
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {menuVisible && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* overlay */}
          <div
            className={`absolute inset-0 bg-black/50 transition-opacity duration-200 ${
              menuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeMenu}
          />

          {/* panel */}
          <div
            className={`absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl
            transition-transform duration-200 will-change-transform ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between px-5 h-16 border-b border-black/10">
              <span
                className="text-[18px] tracking-[0.01em] text-[#C9A24A]"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                MENU
              </span>
              <button
                className="h-10 w-10 rounded-md border border-black/10"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                ✕
              </button>
            </div>

            <nav className="p-5">
              <a className="block py-3 text-lg text-black/90" href="#services" onClick={closeMenu}>
                Services
              </a>
              <a className="block py-3 text-lg text-black/90" href="#about" onClick={closeMenu}>
                About
              </a>
              <a className="block py-3 text-lg text-black/90" href="#careers" onClick={closeMenu}>
                Careers
              </a>
              <a className="block py-3 text-lg text-black/90" href="#contact" onClick={closeMenu}>
                Contact
              </a>

              <div className="mt-6 pt-6 border-t border-black/10">
                <button className="w-full rounded-lg bg-[#C9A24A] text-white font-medium py-3 hover:brightness-110 transition">
                  Access Request
                </button>
                <p className="mt-3 text-xs text-black/50 leading-relaxed">
                  D’OROVIA is not a financial service provider. Access is subject to review and eligibility.
                </p>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* HERO — responsive */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background images (stable) */}
        <img
          src={heroWorldMobil}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover md:hidden"
        />
        <img
          src={heroWorldDesktop}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 hidden h-full w-full object-cover md:block"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/50 to-black/75" />

        {/* Content */}
        <div className="relative z-10 w-full pt-28 pb-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-md md:max-w-xl lg:max-w-2xl">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
                Achieve Your <br className="hidden md:block" />
                Business Goals
              </h1>

              <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8">
                We provide expert advice to help you navigate complex challenges and drive success.
              </p>

              {/* Buttons: stacked on mobile, inline from sm/md */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-3">
                <button className="w-full sm:w-auto rounded-lg bg-[#C9A24A] text-white font-medium py-3 px-6 hover:brightness-110 transition">
                  Our Services
                </button>

                <button className="w-full sm:w-auto rounded-lg bg-[#1F5C5B] text-white font-medium py-3 px-6 hover:brightness-110 transition">
                  Get in Touch
                </button>
              </div>

              {/* Trusted line */}
              <div className="mt-10 text-xs md:text-sm text-white/70 leading-relaxed">
                Global reach via local partners • Structured engagement • Discreet, compliant, role-defined advisory
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  — responsive  */}
      <section
        id="services"
        className="relative bg-[#F6F1EA] text-[#1E2A3B] overflow-hidden"
      >
        {/* finom háttér glow / gradient */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-32 h-[420px] w-[420px] rounded-full bg-purple-300/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full bg-emerald-300/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-14">
            {/* LEFT / TEXT */}
            <div>
              <h2 className="text-[44px] leading-[1.05] font-semibold tracking-tight md:text-[56px]">
                Advisory, not execution.
                <br />
                Structure, not speculation.
              </h2>

              <div className="mt-10 space-y-8">
                {/* item */}
                <div>
                  <div className="text-[18px] font-semibold">Jurisdiction-aware design</div>
                  <p className="mt-2 max-w-xl text-[16px] leading-relaxed text-[#1E2A3B]/80">
                    We work within the realities of local regulation, not against them.
                  </p>
                </div>

                <div>
                  <div className="text-[18px] font-semibold">Legal-first architecture</div>
                  <p className="mt-2 max-w-xl text-[16px] leading-relaxed text-[#1E2A3B]/80">
                    Every engagement is structured through licensed legal partners.
                  </p>
                </div>

                <div>
                  <div className="text-[18px] font-semibold">Export-backed logic</div>
                  <p className="mt-2 max-w-xl text-[16px] leading-relaxed text-[#1E2A3B]/80">
                    Real economic activity stands behind every solution we advise on.
                  </p>
                </div>

                <div>
                  <div className="text-[18px] font-semibold">Transparency by default</div>
                  <p className="mt-2 max-w-xl text-[16px] leading-relaxed text-[#1E2A3B]/80">
                    Documentation, audit trails and compliance are embedded from day one.
                  </p>
                </div>
              </div>

              {/* CTA line */}
              <div className="mt-12 flex items-center gap-2 text-[16px] text-[#1E2A3B]/85">
                <span className="text-[18px]">→</span>
                <a
                  href="#about"
                  className="underline underline-offset-4 decoration-black/20 hover:decoration-black/50 transition"
                >
                  See who we work with
                </a>
              </div>

              {/* bottom gold rule */}
              <div className="mt-14 h-px w-full bg-[#C9A24A]/70" />
            </div>

            {/* RIGHT / DIAGRAM */}
            <div className="flex justify-center md:justify-end">
              <picture className="w-full max-w-[520px]">
                <source media="(min-width: 768px)" srcSet={advisoryStackDesktop} />
                <img
                  src={advisoryStackMobile}
                  alt="Regulation / Legal / Trade & Export / Capital advisory stack"
                  className="w-full h-auto drop-shadow-[0_24px_50px_rgba(0,0,0,0.14)]"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="min-h-screen bg-white" />
      <section id="careers" className="min-h-screen bg-white" />
      <section id="contact" className="min-h-screen bg-white" />
    </main>
  );
}
