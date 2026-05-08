import Link from "next/link";

interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterProps {
  sections: FooterSection[];
  tagline?: string;
}

export default function Footer({ sections, tagline }: FooterProps) {
  return (
    <footer style={{ backgroundColor: "#0b0f10", borderTop: "1px solid rgba(61,74,61,0.2)" }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "48px 24px",
        display: "grid",
        gridTemplateColumns: `220px ${sections.map(() => "1fr").join(" ")}`,
        gap: 40,
      }}>
        <div>
          <div style={{ fontWeight: 800, fontSize: 20, color: "#4be277", marginBottom: 12 }}>Jambo</div>
          {tagline && <p style={{ fontSize: 13, color: "#bccbb9", lineHeight: 1.6 }}>{tagline}</p>}
        </div>
        {sections.map((sec) => (
          <div key={sec.title} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <h4 style={{ fontWeight: 600, fontSize: 12, letterSpacing: "0.08em", color: "#4be277", marginBottom: 4 }}>
              {sec.title}
            </h4>
            {sec.links.map((l) => (
              <Link key={l.label} href={l.href} style={{ fontSize: 13, color: "#bccbb9" }}>
                {l.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "16px 24px",
        borderTop: "1px solid rgba(61,74,61,0.15)",
        display: "flex", justifyContent: "center", alignItems: "center",
      }}>
        <p style={{ fontSize: 12, color: "#bccbb9" }}>© 2025 Jambo Mobility. Faisons avancer Conakry.</p>
      </div>
    </footer>
  );
}
