import { useEffect, useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Menü nyitásnál ne lehessen scrollolni a háttérben
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <main className="min-h-screen">
      {/* FIX HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto flex h-16 items-center justify-between px-5">
          {/* háttér */}
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

          {/* Hamburger */}
          <button
            className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 bg-white/70"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
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
      {menuOpen && (
        <div className="fixed inset-0 z-[60]">
          {/* háttér overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMenuOpen(false)}
          />

          {/* panel */}
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl">
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
                onClick={() => setMenuOpen(false)}
              >
                ✕
              </button>
            </div>

            <nav className="p-5">
              <a className="block py-3 text-lg text-black/90" href="#services" onClick={() => setMenuOpen(false)}>
                Services
              </a>
              <a className="block py-3 text-lg text-black/90" href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a className="block py-3 text-lg text-black/90" href="#careers" onClick={() => setMenuOpen(false)}>
                Careers
              </a>
              <a className="block py-3 text-lg text-black/90" href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>

              <div className="mt-6 pt-6 border-t border-black/10">
                <button className="w-full rounded-lg bg-[#C9A24A] text-black font-medium py-3">
                  Access Request
                </button>
                <p className="mt-3 text-xs text-black/50 leading-relaxed">
                  D’OROVIA is not a financial service provider. Access is
                  subject to review and eligibility.
                </p>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* HERO – MOBILE */}
      <section
        className="
          relative min-h-screen
          bg-[url('/src/assets/background/hero-world-purpil-mobil.png')]
          bg-cover bg-center bg-no-repeat
          flex items-center
        "
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/50 to-black/70" />

        {/* Content */}
        <div className="relative z-10 px-6 pt-28 pb-16 max-w-md">
          <h1 className="text-white text-4xl font-semibold leading-tight mb-6">
            Achieve Your <br />
            Business Goals
          </h1>

          <p className="text-white/90 text-base leading-relaxed mb-8">
            We provide expert advice to help you navigate complex challenges
            and drive success.
          </p>

          <div className="flex flex-col gap-4">
            <button className="w-full rounded-lg bg-[#C9A24A] text-white font-medium py-3">
              Our Services
            </button>

            <button className="w-full rounded-lg bg-[#1F5C5B] text-white font-medium py-3">
              Get in Touch
            </button>
          </div>

          {/* NAV rész / “trusted” line – ha erre gondoltál */}
          <div className="mt-10 text-xs text-white/70 leading-relaxed">
            Global reach via local partners • Structured engagement • Discreet, compliant,
            role-defined advisory
          </div>
        </div>
      </section>

      {/* placeholder a következő szekcióknak, hogy a nav linkek ne legyenek üresek */}
      <section id="services" className="min-h-screen bg-white" />
      <section id="about" className="min-h-screen bg-white" />
      <section id="careers" className="min-h-screen bg-white" />
      <section id="contact" className="min-h-screen bg-white" />
    </main>
  );
}
