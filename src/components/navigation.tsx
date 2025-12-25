"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Classes", href: "/classes" },
  { name: "Trainers", href: "/trainers" },
  { name: "Membership", href: "/membership" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid #222" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <nav className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 80 }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <span className="heading-font" style={{ fontSize: 24, fontWeight: 700 }}>
            <span className="text-gradient">APEX</span>
            <span style={{ color: "white", marginLeft: 4 }}>Performance</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: "none", gap: 32, alignItems: "center" }} className="desktop-nav">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              style={{
                color: "#9CA3AF",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/trial" className="btn btn-primary" style={{ padding: "10px 24px", fontSize: 14 }}>
            Free Trial
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-btn"
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: "absolute",
            top: 80,
            left: 0,
            right: 0,
            background: "rgba(10,10,10,0.98)",
            borderBottom: "1px solid #222",
            padding: 24,
          }}
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "16px 0",
                color: "#9CA3AF",
                textDecoration: "none",
                fontSize: 18,
                borderBottom: "1px solid #222",
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/trial"
            onClick={() => setMobileOpen(false)}
            className="btn btn-primary"
            style={{ width: "100%", marginTop: 24 }}
          >
            Free Trial
          </Link>
        </div>
      )}

      <style jsx global>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-btn { display: none !important; }
        }
        @media (max-width: 767px) {
          .mobile-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
