import { Navbar } from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";

const G = { background: "rgba(30,41,59,0.85)", backdropFilter: "blur(12px)", border: "1px solid rgba(51,65,85,0.55)", borderRadius: 12 } as const;
const PANEL = {
  background: "rgba(18,24,27,0.92)",
  backdropFilter: "blur(16px)",
  border: "1px solid rgba(75,226,119,0.12)",
  borderRadius: 18,
  boxShadow: "0 24px 60px rgba(0,0,0,0.28)",
} as const;

const STATS = [
  { value: "500+", label: "chauffeurs formés" },
  { value: "15 %", label: "réduction des embouteillages" },
  { value: "40+", label: "partenaires actifs" },
  { value: "2 M$", label: "investissement R&D" },
];

const PARTNERS = [
  {
    title: "Université Kofi Annan",
    body: "Notre partenariat phare se concentre sur l&apos;urbanisme, les systèmes intelligents et la logistique alimentée par l&apos;IA. Les étudiants collaborent avec nos ingénieurs pour optimiser les déplacements à Kaloum.",
    tags: ["Urbanisme", "Logistique IA"],
    image: "/images/vehicules.jpg",
    imageAlt: "Campus universitaire et mobilité urbaine",
    featured: true,
  },
  {
    title: "Institut Alpha",
    body: "Nous soutenons des programmes en ingénierie durable et en déploiement des infrastructures de recharge dans les principaux axes de Conakry.",
    tags: ["Infrastructures", "Énergie propre"],
    icon: "accessibility_new",
    cta: "En savoir plus",
  },
  {
    title: "Académie Tech",
    body: "Nous accompagnons les jeunes développeurs grâce à des formations intensives sur l&apos;écosystème API de Jambo et les outils de mobilité.",
    tags: ["Portail talents", "Développement"],
    icon: "code",
    cta: "Portail talents",
  },
  {
    title: "Hub Numérique Guinéen",
    body: "Notre collaboration soutient l&apos;initiative « Conakry intelligente » à travers le financement de projets, les données ouvertes et le partage d&apos;expertise.",
    tags: ["Données ouvertes", "Startups"],
    image: "/images/e-vehicules.jpg",
    imageAlt: "Salle de travail technologique",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 72 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 24px 88px" }}>

          {/* Héro */}
          <header style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", borderRadius: 9999, backgroundColor: "rgba(75,226,119,0.15)", color: "#4be277", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 22, textTransform: "uppercase" }}>
              Écosystème collaboratif
            </span>
            <h1 style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 18, color: "#e0e3e5", maxWidth: 900, marginLeft: "auto", marginRight: "auto" }}>
              Faire progresser la mobilité grâce à la <span style={{ color: "#4be277" }}>formation</span> et à l&apos;<span style={{ color: "#4be277" }}>innovation</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "#bccbb9", maxWidth: 760, margin: "0 auto 34px" }}>
              Nous collaborons avec les principales institutions guinéennes pour bâtir des infrastructures intelligentes, développer les talents et accélérer la prochaine génération de solutions de transport à Conakry.
            </p>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 28, flexWrap: "wrap", marginBottom: 34 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "#e0e3e5", fontSize: 14 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: "#4be277" }}>school</span>
                4 partenaires académiques majeurs
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "#e0e3e5", fontSize: 14 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: "#4be277" }}>precision_manufacturing</span>
                12 projets de recherche actifs
              </div>
            </div>

            {/* Logos partenaires principaux */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
              <div style={{ ...PANEL, padding: "18px 26px" }}>
                <Image src="/images/city-taxi.png" alt="CityTaxi" width={140} height={44} style={{ objectFit: "contain", backgroundColor: "transparent" }} />
              </div>
              <div style={{ color: "#bccbb9", fontSize: 26, fontWeight: 300 }}>×</div>
              <div style={{ ...PANEL, padding: "18px 26px" }}>
                <Image src="/images/jambo-logo.png" alt="Jambo" width={110} height={44} style={{ objectFit: "contain", backgroundColor: "transparent" }} />
              </div>
            </div>
          </header>

          {/* Cartes partenaires */}
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: 14, marginBottom: 14 }}>
            {PARTNERS.slice(0, 3).map((partner) => (
              <article key={partner.title} style={{ ...PANEL, overflow: "hidden", display: "flex", flexDirection: partner.featured ? "row" : "column", minHeight: partner.featured ? 320 : 290 }}>
                {partner.featured ? (
                  <>
                    <div style={{ position: "relative", minHeight: 320, flex: 1 }}>
                      <Image src={partner.image!} alt={partner.imageAlt!} fill style={{ objectFit: "cover" }} />
                    </div>
                    <div style={{ padding: 32, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", borderRadius: 9999, backgroundColor: "rgba(75,226,119,0.12)", color: "#4be277", fontSize: 11, fontWeight: 700, marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        Partenaire fondateur
                      </span>
                      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12, color: "#e0e3e5" }}>{partner.title}</h2>
                      <p style={{ fontSize: 15, lineHeight: 1.7, color: "#bccbb9", marginBottom: 22 }} dangerouslySetInnerHTML={{ __html: partner.body }} />
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        {partner.tags.map((t) => (
                          <span key={t} style={{ padding: "5px 12px", borderRadius: 9999, backgroundColor: "#1d2022", color: "#bccbb9", fontSize: 12 }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div style={{ padding: 28, display: "flex", flexDirection: "column", height: "100%" }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: "#272a2c", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 22, color: "#4be277" }}>{partner.icon}</span>
                    </div>
                    <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: "#e0e3e5" }}>{partner.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: "#bccbb9", marginBottom: 20, flex: 1 }} dangerouslySetInnerHTML={{ __html: partner.body }} />
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 22 }}>
                      {partner.tags.map((t) => (
                        <span key={t} style={{ padding: "4px 10px", borderRadius: 9999, backgroundColor: "#1d2022", color: "#bccbb9", fontSize: 12 }}>{t}</span>
                      ))}
                    </div>
                    <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#4be277", fontWeight: 700, fontSize: 14 }}>
                      {partner.cta} <span className="material-symbols-outlined" style={{ fontSize: 14 }}>arrow_forward</span>
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 72 }}>
            <article style={{ ...PANEL, overflow: "hidden", position: "relative", minHeight: 280 }}>
              <Image src="/images/e-vehicules.jpg" alt="Véhicules électriques" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(16,20,21,0.92) 0%, transparent 58%)" }} />
              <div style={{ position: "absolute", bottom: 18, left: 18 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 8px", borderRadius: 9999, backgroundColor: "rgba(75,226,119,0.22)", color: "#4be277", fontSize: 11, fontWeight: 700, marginBottom: 8 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 12 }}>electric_bolt</span>Mobilité verte
                </span>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>Flotte électrique</div>
              </div>
            </article>

            <article style={{ ...PANEL, padding: 30 }}>
              <div style={{ width: 42, height: 42, borderRadius: 10, backgroundColor: "#272a2c", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: "#4be277" }}>school</span>
              </div>
              <h3 style={{ fontSize: 21, fontWeight: 700, marginBottom: 12, color: "#e0e3e5" }}>Formation et certification</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "#bccbb9", marginBottom: 20 }}>
                Tous nos chauffeurs suivent un programme rigoureux axé sur la sécurité routière, le service à la clientèle et la maîtrise de l&apos;application Jambo.
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["Sécurité", "Service client"].map((t) => (
                  <span key={t} style={{ padding: "4px 10px", borderRadius: 9999, backgroundColor: "#1d2022", color: "#bccbb9", fontSize: 12 }}>{t}</span>
                ))}
              </div>
            </article>

            <article style={{ ...PANEL, position: "relative", overflow: "hidden", minHeight: 280 }}>
              <Image src="/images/vehicules.jpg" alt="Salle de travail et innovation" fill style={{ objectFit: "cover", filter: "saturate(0.9) brightness(0.6)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,16,18,0.95) 0%, rgba(12,16,18,0.35) 45%, transparent 100%)" }} />
              <div style={{ position: "absolute", inset: 0, padding: 28, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: "rgba(39,42,44,0.9)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: "#4be277" }}>handshake</span>
                </div>
                <div>
                  <h3 style={{ fontSize: 21, fontWeight: 700, marginBottom: 10, color: "#fff" }}>Devenir partenaire</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "#d5ddd0", marginBottom: 20 }}>
                    Vous êtes une entreprise, une institution ou un investisseur souhaitant rejoindre l&apos;écosystème Jambo en Guinée&nbsp;?
                  </p>
                  <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#4be277", fontWeight: 700, fontSize: 14 }}>
                    Contactez-nous <span className="material-symbols-outlined" style={{ fontSize: 14 }}>arrow_forward</span>
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Stats */}
          <div style={{ textAlign: "center", marginBottom: 72, padding: "24px 0" }}>
            <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: "#e0e3e5" }}>L&apos;impact en chiffres</h2>
            <p style={{ fontSize: 16, color: "#bccbb9", marginBottom: 40 }}>Des résultats concrets pour la mobilité de Conakry.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
              {STATS.map((s) => (
                <div key={s.value} style={{ ...G, padding: 22, textAlign: "center" }}>
                  <div style={{ fontSize: 34, fontWeight: 800, color: "#4be277", marginBottom: 6 }}>{s.value}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", color: "#bccbb9", textTransform: "uppercase" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* La flotte */}
          <section style={{ marginBottom: 80 }}>
            <h2 style={{ fontSize: 30, fontWeight: 700, textAlign: "center", marginBottom: 8, color: "#e0e3e5" }}>La flotte en mouvement</h2>
            <p style={{ fontSize: 16, color: "#bccbb9", textAlign: "center", marginBottom: 40 }}>Des véhicules de précision prêts pour les rues animées de Conakry.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div style={{ borderRadius: 12, overflow: "hidden", position: "relative", gridRow: "span 2", minHeight: 480 }}>
                <Image src="/images/vehicules.jpg" alt="Flotte CityTaxi" fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(16,20,21,0.8) 0%, transparent 60%)" }} />
                <div style={{ position: "absolute", bottom: 20, left: 20 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#4be277", marginBottom: 4 }}>CityTaxi — Suzuki Swift & Ertiga</div>
                  <div style={{ fontSize: 13, color: "#e0e3e5" }}>Courses premium en ville.</div>
                </div>
              </div>
              <div style={{ borderRadius: 12, overflow: "hidden", position: "relative", height: 230 }}>
                <Image src="/images/e-vehicules.jpg" alt="Véhicules électriques" fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(16,20,21,0.8) 0%, transparent 60%)" }} />
                <div style={{ position: "absolute", bottom: 16, left: 16 }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "2px 8px", borderRadius: 9999, backgroundColor: "rgba(75,226,119,0.2)", color: "#4be277", fontSize: 11, fontWeight: 600, marginBottom: 4 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 12 }}>electric_bolt</span>Écologique
                  </span>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>Véhicules électriques</div>
                </div>
              </div>
              <div style={{ ...G, borderRadius: 12, padding: 24, display: "flex", alignItems: "center", justifyContent: "center", height: 230 }}>
                <div style={{ textAlign: "center" }}>
                  <Image src="/images/city-taxi.png" alt="CityTaxi" width={140} height={50} style={{ objectFit: "contain", marginBottom: 12, backgroundColor: "transparent" }} />
                  <p style={{ fontSize: 13, color: "#bccbb9", lineHeight: 1.5 }}>Où vous voulez, quand vous voulez.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div style={{ ...PANEL, padding: 56, borderRadius: 20, textAlign: "center" }}>
            <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: "#e0e3e5" }}>Rejoignez notre écosystème</h2>
            <p style={{ fontSize: 17, color: "#bccbb9", maxWidth: 560, margin: "0 auto 36px", lineHeight: 1.7 }}>
              Vous êtes une institution, une université ou un hub d&apos;innovation souhaitant accélérer la mobilité en Afrique de l&apos;Ouest&nbsp;? Construisons ensemble l&apos;avenir de Conakry.
            </p>
            <button style={{ backgroundColor: "#22c55e", color: "#004b1e", fontWeight: 700, fontSize: 16, padding: "15px 48px", borderRadius: 12, border: "none", cursor: "pointer", boxShadow: "0 14px 30px rgba(34,197,94,0.25)" }}>
              Demander un partenariat
            </button>
          </div>
        </div>
      </main>

      <Footer sections={[
        { title: "Entreprise", links: [{ label: "Politique de confidentialité", href: "#" }, { label: "Conditions d'utilisation", href: "#" }] },
        { title: "Ressources", links: [{ label: "Centre d'aide", href: "#" }, { label: "Contactez-nous", href: "#" }] },
        { title: "Carrières", links: [{ label: "Postes ouverts", href: "#" }, { label: "Devenir chauffeur", href: "#" }] },
      ]} />
    </>
  );
}
