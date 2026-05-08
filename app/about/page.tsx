import { Navbar } from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";

const G = { background: "rgba(30,41,59,0.85)", backdropFilter: "blur(12px)", border: "1px solid rgba(51,65,85,0.55)", borderRadius: 12 } as const;

const STATS = [
  { icon: "directions_car", value: "1 500+", label: "Courses/jour" },
  { icon: "favorite", value: "45+", label: "Partenaires stratégiques" },
  { icon: "group", value: "12 000+", label: "Utilisateurs actifs/mois" },
  { icon: "schedule", value: "24h/7j", label: "Disponibilité du service" },
];

const PRINCIPLES = [
  { icon: "accessibility_new", title: "Accessibilité radicale", body: "Nous croyons que la mobilité est un droit, pas un luxe. Notre plateforme est conçue pour être inclusive, permettant à chaque résident de Conakry d'accéder à un transport sûr." },
  { icon: "location_on", title: "Sécurité sans compromis", body: "Chaque trajet s'appuie sur l'héritage de CityTaxi. Nous mettons en œuvre une vérification rigoureuse des chauffeurs, un suivi GPS en temps réel et un système d'urgence 24h/7j." },
  { icon: "bolt", title: "Innovation dynamique", body: "L'innovation est le moteur de Jambo. De l'optimisation des itinéraires aux paiements numériques fluides, nous utilisons des technologies de pointe pour Conakry." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 72 }}>
        <div className="page-container" style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 24px 80px" }}>

          {/* Héro */}
          <section className="hero-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center", marginBottom: 80 }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", color: "#bccbb9", textTransform: "uppercase", marginBottom: 12 }}>Notre évolution</p>
              <h1 style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 24, color: "#e0e3e5" }}>
                Faire avancer Conakry <span style={{ color: "#4be277" }}>vers l&apos;avenir</span>
              </h1>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "#bccbb9", marginBottom: 32 }}>
                Développée par CityTaxi, Jambo est bien plus qu&apos;une application. C&apos;est un engagement envers le cinétisme urbain — alliant innovation de haut niveau et fiabilité locale pour redéfinir comment notre ville se déplace.
              </p>
              <div className="mobile-stack" style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
                <Image src="/images/city-taxi.png" alt="CityTaxi" width={130} height={40} style={{ objectFit: "contain", mixBlendMode: "screen", backgroundColor: "transparent", width: "auto", height: "auto" }} />
                <span style={{ color: "#bccbb9", fontSize: 14 }}>×</span>
                <Image src="/images/jambo-logo.png" alt="Jambo" width={100} height={40} style={{ objectFit: "contain", mixBlendMode: "screen", backgroundColor: "transparent" }} />
              </div>
              <div className="mobile-wrap" style={{ display: "flex", gap: 28 }}>
                {["Sécurité avant tout", "Innovation"].map((l) => (
                  <span key={l} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, color: "#4be277", fontWeight: 600 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>check_circle</span>{l}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden", position: "relative", aspectRatio: "4/3" }}>
              <Image src="/images/vehicules.jpg" alt="Flotte Jambo" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
          </section>

          {/* Stats */}
          <section style={{ marginBottom: 80 }}>
            <h2 style={{ fontSize: 30, fontWeight: 700, textAlign: "center", marginBottom: 40, color: "#e0e3e5" }}>Impact mesuré</h2>
            <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
              {STATS.map((s) => (
                <div key={s.value} style={{ ...G, padding: 28 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 26, color: "#4be277", display: "block", marginBottom: 12 }}>{s.icon}</span>
                  <div style={{ fontSize: 32, fontWeight: 800, color: "#4be277", lineHeight: 1, marginBottom: 6 }}>{s.value}</div>
                  <div style={{ fontSize: 14, color: "#bccbb9" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Nos valeurs */}
          <section className="values-grid" style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 64, marginBottom: 80, alignItems: "start" }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#e0e3e5", lineHeight: 1.3 }}>Nos valeurs fondamentales</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 44 }}>
              {PRINCIPLES.map((p) => (
                <div key={p.title} style={{ display: "flex", gap: 20 }}>
                  <div style={{ width: 42, height: 42, borderRadius: "50%", backgroundColor: "rgba(75,226,119,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 20, color: "#4be277" }}>{p.icon}</span>
                  </div>
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: "#e0e3e5" }}>{p.title}</h3>
                    <p style={{ fontSize: 15, lineHeight: 1.65, color: "#bccbb9" }}>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* La flotte */}
          <section style={{ marginBottom: 80 }}>
            <h2 style={{ fontSize: 30, fontWeight: 700, textAlign: "center", marginBottom: 8, color: "#e0e3e5" }}>La flotte en mouvement</h2>
            <p style={{ fontSize: 16, color: "#bccbb9", textAlign: "center", marginBottom: 40 }}>Des véhicules de précision prêts pour les rues animées de Conakry.</p>
            <div className="feature-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div style={{ borderRadius: 12, overflow: "hidden", position: "relative", gridRow: "span 2", minHeight: 480 }}>
                <Image src="/images/vehicules.jpg" alt="Flotte CityTaxi" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(16,20,21,0.8) 0%, transparent 60%)" }} />
                <div style={{ position: "absolute", bottom: 20, left: 20 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#4be277", marginBottom: 4 }}>CityTaxi — Suzuki Swift & Ertiga</div>
                  <div style={{ fontSize: 13, color: "#e0e3e5" }}>Courses premium en ville.</div>
                </div>
              </div>
              <div style={{ borderRadius: 12, overflow: "hidden", position: "relative", height: 230 }}>
                <Image src="/images/e-vehicules.jpg" alt="Véhicules électriques" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
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
                    <Image src="/images/city-taxi.png" alt="CityTaxi" width={140} height={50} style={{ objectFit: "contain", marginBottom: 12, mixBlendMode: "screen", backgroundColor: "transparent", width: "auto", height: "auto" }} />
                  <p style={{ fontSize: 13, color: "#bccbb9", lineHeight: 1.5 }}>Où vous voulez, quand vous voulez.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section style={{ backgroundColor: "#22c55e", borderRadius: 16, padding: "56px 40px", textAlign: "center" }}>
            <h2 style={{ fontSize: 30, fontWeight: 700, color: "#003915", marginBottom: 12 }}>Prêt à voyager avec nous&nbsp;?</h2>
            <p style={{ fontSize: 16, color: "#004b1e", maxWidth: 480, margin: "0 auto 36px" }}>Rejoignez des milliers de résidents de Conakry qui font confiance à Jambo pour leurs déplacements quotidiens.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
              <a href="#"><Image src="/images/app-store-fr.svg" alt="App Store" width={160} height={48} style={{ objectFit: "contain", width: "auto", height: "auto" }} /></a>
              <a href="#"><Image src="/images/google-play-fr.png" alt="Google Play" width={160} height={48} style={{ objectFit: "contain", width: "auto", height: "auto" }} /></a>
            </div>
          </section>
        </div>
      </main>

      <Footer tagline="Alimenter l'énergie cinétique de Conakry avec des solutions de transport intelligentes, sûres et fiables."
        sections={[
          { title: "Navigation", links: [{ label: "Accueil", href: "/" }, { label: "Services", href: "/services" }, { label: "Partenaires", href: "/partners" }, { label: "À propos", href: "/about" }] },
          { title: "Ressources", links: [{ label: "Centre d'aide", href: "#" }, { label: "Contactez-nous", href: "#" }, { label: "Carrières", href: "#" }] },
          { title: "Légal", links: [{ label: "Politique de confidentialité", href: "#" }, { label: "Conditions d'utilisation", href: "#" }] },
        ]}
      />
    </>
  );
}
