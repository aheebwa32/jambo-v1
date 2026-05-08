"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/#home", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/partners", label: "Partenaires" },
  { href: "/#contact", label: "Contact" }
  
];

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: "fixed", top: 0, zIndex: 50, width: "100%",
      backgroundColor: "rgba(16,20,21,0.92)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(61,74,61,0.3)",
    }}>
      <div className="nav-shell" style={{
        maxWidth: 1280, margin: "0 auto", padding: "0 24px",
        height: 72,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>

        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)} aria-label="Jambo — Accueil" className="inline-flex items-center flex-shrink-0">
          <Image
            src="/media/images/jambo-logo.png"
            alt="Jambo"
            width={160}
            height={160}
            priority
            className="h-10 w-auto md:h-12 md:w-auto"
          />
        </Link>

        {/* Desktop nav links */}
        <div className="nav-desktop-links" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ color: "rgba(188,203,185,0.85)", fontSize: 15, fontWeight: 500 }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#4be277")}
              onMouseOut={(e) => (e.currentTarget.style.color = "rgba(188,203,185,0.85)")}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="nav-right" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link href="/#download" aria-label="Télécharger l'application" className="nav-cta-link" style={{
            backgroundColor: "#22c55e", color: "#004b1e",
            fontWeight: 700, fontSize: 14, letterSpacing: "0.03em",
            padding: "8px 16px", borderRadius: 8, whiteSpace: "nowrap",
          }}>
            Télécharger
          </Link>

          {/* Burger */}
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((v) => !v)}
            className="nav-burger"
            style={{
              display: "none",
              alignItems: "center", justifyContent: "center",
              width: 40, height: 40, borderRadius: 8,
              border: "1px solid rgba(61,74,61,0.5)",
              backgroundColor: "transparent", color: "#e0e3e5", cursor: "pointer",
            }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="primary-nav"
          className="nav-mobile-menu"
          style={{ borderTop: "1px solid rgba(61,74,61,0.25)", backgroundColor: "#101415" }}
        >
          <ul className="nav-mobile-list" style={{
            maxWidth: 1280, margin: "0 auto",
            padding: "12px 24px",
            display: "flex", flexDirection: "column", gap: 4,
            listStyle: "none",
          }}>
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "block", borderRadius: 8,
                      padding: "8px 12px",
                    color: "rgba(188,203,185,0.85)", fontSize: 15, fontWeight: 500,
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export { NavBar as Navbar };
export default NavBar;
