import { Navbar } from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";

const G = { background: "rgba(30,41,59,0.85)", backdropFilter: "blur(12px)", border: "1px solid rgba(51,65,85,0.55)", borderRadius: 12 } as const;

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 72 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "56px 24px 80px" }}>

          <header style={{ marginBottom: 56, textAlign: "center" }}>
            <h1 style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16, color: "#e0e3e5", maxWidth: 660, margin: "0 auto 16px" }}>
              Des solutions de mobilité sur mesure pour <span style={{ color: "#4be277" }}>Conakry</span>.
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "#bccbb9", maxWidth: 560, margin: "0 auto" }}>
              Bien plus qu&apos;une application de covoiturage — un écosystème complet conçu pour responsabiliser notre communauté.
            </p>
          </header>

          {/* Grille services */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 14, marginBottom: 14 }}>

            {/* Service principal — CityTaxi */}
            <div style={{ ...G, position: "relative", overflow: "hidden", minHeight: 440, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
              <div style={{ position: "absolute", inset: 0 }}>
                <Image src="/images/vehicules.jpg" alt="Flotte CityTaxi" fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(16,20,21,0.95) 0%, rgba(16,20,21,0.3) 60%, transparent 100%)" }} />
              </div>
              <div style={{ position: "relative", zIndex: 2, padding: 40 }}>
                <Image src="/images/city-taxi.png" alt="CityTaxi" width={120} height={36} style={{ objectFit: "contain", marginBottom: 16 }} />
                <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12, color: "#fff" }}>Courses CityTaxi</h2>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,0.75)", maxWidth: 400, marginBottom: 24 }}>
                  Réservez un taxi confortable en quelques secondes. Suzuki Swift, Ertiga — pour 1 à 7 passagers. Suivi GPS en temps réel, chauffeurs vérifiés.
                </p>
                <div style={{ display: "flex", gap: 12 }}>
                  <button style={{ backgroundColor: "#4be277", color: "#003915", fontWeight: 700, fontSize: 14, padding: "12px 22px", borderRadius: 8, border: "none", cursor: "pointer" }}>Réserver maintenant</button>
                  <button style={{ backgroundColor: "transparent", color: "#e0e3e5", fontWeight: 600, fontSize: 14, padding: "12px 22px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.25)", cursor: "pointer" }}>Voir les tarifs</button>
                </div>
              </div>
            </div>

            {/* Véhicules électriques */}
            <div style={{ ...G, position: "relative", overflow: "hidden", minHeight: 440, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
              <div style={{ position: "absolute", inset: 0 }}>
                <Image src="/images/e-vehicules.jpg" alt="Véhicules électriques" fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(16,20,21,0.95) 0%, rgba(16,20,21,0.3) 60%, transparent 100%)" }} />
              </div>
              <div style={{ position: "relative", zIndex: 2, padding: 32 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 12px", borderRadius: 9999, backgroundColor: "rgba(75,226,119,0.2)", color: "#4be277", fontWeight: 600, fontSize: 11, letterSpacing: "0.08em", marginBottom: 16 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 13 }}>electric_bolt</span>Écologique
                </span>
                <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: "#fff" }}>Véhicules électriques</h2>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.75)", marginBottom: 20 }}>Mobilité zéro émission pour un Conakry plus vert. Silencieux, propres et économiques.</p>
                <button style={{ backgroundColor: "#4be277", color: "#003915", fontWeight: 700, fontSize: 13, padding: "10px 20px", borderRadius: 8, border: "none", cursor: "pointer" }}>En savoir plus</button>
              </div>
            </div>
          </div>

          {/* Rangée 2 - Services supplémentaires */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 40 }}>

            {/* Épicerie et réductions */}
            <div style={{ ...G, position: "relative", overflow: "hidden", minHeight: 320, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 32 }}>
              <div style={{ position: "absolute", inset: 0 }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(16,20,21,0.2) 0%, rgba(16,20,21,0.95) 100%)", zIndex: 1 }} />
              </div>
              <div style={{ position: "relative", zIndex: 2 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 12px", borderRadius: 9999, backgroundColor: "rgba(75,226,119,0.2)", color: "#4be277", fontWeight: 600, fontSize: 11, letterSpacing: "0.08em", marginBottom: 12 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 13 }}>shopping_cart</span>Lifestyle
                </span>
                <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: "#e0e3e5" }}>Épicerie & Réductions</h2>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.75)" }}>Réductions exclusives pour les enseignants et étudiants. Accédez à des produits essentiels à prix réduits en partenariat avec des fournisseurs locaux.</p>
              </div>
            </div>

            {/* Stages et Innovation */}
            <div style={{ ...G, position: "relative", overflow: "hidden", minHeight: 320, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 32, borderLeft: "4px solid #4be277" }}>
              <div style={{ position: "absolute", inset: 0 }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(16,20,21,0.2) 0%, rgba(16,20,21,0.95) 100%)", zIndex: 1 }} />
              </div>
              <div style={{ position: "relative", zIndex: 2 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 12px", borderRadius: 9999, backgroundColor: "rgba(75,226,119,0.2)", color: "#4be277", fontWeight: 600, fontSize: 11, letterSpacing: "0.08em", marginBottom: 12 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 13 }}>school</span>Talent
                </span>
                <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: "#e0e3e5" }}>Stages & Innovation</h2>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.75)" }}>Soutenir la prochaine génération de leaders technologiques. Expérience pratique en ingénierie logicielle, logistique, et science des données.</p>
              </div>
            </div>
          </div>

          {/* Rangée 3 - Chauffeur et Jambo Pay */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 60 }}>

            {/* Devenir chauffeur */}
            <div style={{ ...G, padding: 36, borderLeft: "4px solid #4be277" }}>
              <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: "#e0e3e5" }}>Devenez chauffeur Jambo</h2>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: "#bccbb9", marginBottom: 20 }}>Rejoignez notre flotte de chauffeurs professionnels. Gérez vos horaires librement, suivez vos revenus en temps réel et bénéficiez d&apos;un support dédié.</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
                    {["Horaires flexibles", "Revenus transparents", "Support 24h/7j"].map((t) => (
                      <span key={t} style={{ padding: "3px 10px", borderRadius: 4, backgroundColor: "#1d2022", color: "#bccbb9", fontSize: 12 }}>{t}</span>
                    ))}
                  </div>
                  
                </div>
                <div style={{ width: 140, height: 140, borderRadius: 12, overflow: "hidden", flexShrink: 0, backgroundColor: "#fff", padding: 8 }}>
                  <Image src="/images/qr-chauffeur.jpg" alt="QR Chauffeur" width={124} height={124} style={{ objectFit: "contain" }} />
                </div>
              </div>
            </div>

            {/* Jambo Pay - Bientôt */}
            <div style={{ backgroundColor: "#4be277", borderRadius: 12, padding: 36, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 240, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "50%", zIndex: 1 }} />
              <div style={{ zIndex: 2, position: "relative" }}>
                <span style={{ display: "inline-block", padding: "6px 14px", borderRadius: 6, backgroundColor: "rgba(255,255,255,0.2)", color: "#003915", fontWeight: 700, fontSize: 11, letterSpacing: "0.08em", marginBottom: 12 }}>À BIENTÔT</span>
                <h2 style={{ fontSize: 24, fontWeight: 700, color: "#003915", marginBottom: 12 }}>Jambo Pay</h2>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#003915" }}>Paiements numériques transparents pour tous les services Jambo. Virements instantanés, frais réduits, sécurité maximale.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div style={{ ...G, padding: 56, borderRadius: 16, textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(to right, transparent, #4be277, transparent)" }} />
            <h2 style={{ fontSize: 30, fontWeight: 700, marginBottom: 16, color: "#e0e3e5" }}>Prêt à bouger avec Jambo&nbsp;?</h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "#bccbb9", maxWidth: 500, margin: "0 auto 40px" }}>Téléchargez l&apos;application et rejoignez des milliers d&apos;utilisateurs qui réinventent la mobilité urbaine à Conakry.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
              <a href="#"><Image src="/images/app-store-fr.svg" alt="App Store" width={160} height={48} style={{ objectFit: "contain" }} /></a>
              <a href="#"><Image src="/images/google-play-fr.png" alt="Google Play" width={180} height={54} style={{ objectFit: "contain" }} /></a>
            </div>
          </div>
        </div>
      </main>

      <Footer tagline="Faire avancer Conakry avec des solutions technologiques durables."
        sections={[
          { title: "Services", links: [{ label: "Courses CityTaxi", href: "#" }, { label: "Véhicules électriques", href: "#" }, { label: "Devenir chauffeur", href: "#" }] },
          { title: "Assistance", links: [{ label: "Centre d'aide", href: "#" }, { label: "Contactez-nous", href: "#" }, { label: "Carrières", href: "#" }] },
          { title: "Légal", links: [{ label: "Politique de confidentialité", href: "#" }, { label: "Conditions d'utilisation", href: "#" }] },
        ]}
      />
    </>
  );
}
