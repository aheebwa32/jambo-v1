'use client';
import { Navbar } from "./components/NavBar";
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";


const G = { background: "rgba(30,41,59,0.85)", backdropFilter: "blur(12px)", border: "1px solid rgba(51,65,85,0.55)", borderRadius: 12 } as const;


const TESTIMONIALS = [
  {
    initials: "AD", name: "Aminata Diallo", role: "Étudiante, Université Kofi Annan",
    color: "#4be277", textColor: "#003915",
    quote: "Avec Jambo, je peux aller à mes cours sans stresser sur le prix. Les tarifs étudiants ont vraiment changé ma routine.",
  },
  {
    initials: "IB", name: "Ibrahima Bah", role: "Chauffeur partenaire",
    color: "#22c55e", textColor: "#003915",
    quote: "Je conduis pour Jambo depuis six mois. L'application est simple, et les courses arrivent régulièrement, même tard le soir.",
  },
  {
    initials: "MS", name: "Mariama Soumah", role: "Consultante",
    color: "#4ae176", textColor: "#003915",
    quote: "Pour mes réunions d'affaires à Conakry, c'est devenu mon option de référence. Ponctuel, propre, et la facture est claire.",
  },
];

const STEPS = [
  {
    num: "01", icon: "install_mobile",
    title: "Téléchargez l'application",
    desc: "Installez Jambo gratuitement depuis l'App Store ou Google Play, puis créez votre compte en moins d'une minute.",
  },
  {
    num: "02", icon: "edit_location_alt",
    title: "Entrez votre destination",
    desc: "Ouvrez l'application, saisissez votre point de départ et votre destination, et obtenez le tarif estimé immédiatement.",
  },
  {
    num: "03", icon: "directions_car",
    title: "Profitez du trajet",
    desc: "Un chauffeur partenaire vous prendra en charge en quelques minutes. Suivez votre trajet en temps réel et payez sans contact.",
  },
];


const apps = [
  {
    title: "Application Passager",
    qr: "/images/qr-passager.jpg",
    alt: "QR code appli Passager",
    appStoreUrl: "#", // TODO: replace with Passenger iOS App Store URL
    playStoreUrl: "#", // TODO: replace with Passenger Android Google Play URL
  },
  {
    title: "Application Chauffeur",
    qr: "/images/qr-chauffeur.jpg",
    alt: "QR code appli Chauffeur",
    appStoreUrl: "#", // TODO: replace with Chauffeur iOS App Store URL
    playStoreUrl: "#", // TODO: replace with Chauffeur Android Google Play URL
  },
];


export default function HomePage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 72 }}>

        {/* ── Héro vidéo ── */}
        <section style={{ position: "relative", height: "92vh", overflow: "hidden" }}>
          <video
            autoPlay muted loop playsInline
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src="/video/spot-video-1.mp4" type="video/mp4" />
          </video>
          {/* overlay */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(16,20,21,0.55) 0%, rgba(16,20,21,0.75) 60%, #101415 100%)" }} />

          <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 14px", borderRadius: 9999, border: "1px solid rgba(75,226,119,0.45)", color: "#4be277", fontSize: 12, fontWeight: 600, letterSpacing: "0.07em", marginBottom: 24, width: "fit-content", margin: "0 auto 24px" }}>
              <span className="material-symbols-outlined" style={{ fontSize: 15 }}>location_on</span>
              La Révolution de la Mobilité à Conakry
            </span>
            <h1 style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.025em", marginBottom: 24, color: "#fff", maxWidth: 900 }}>
            Jambo : une mobilité inclusive et fiable à Conakry.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: "rgba(255,255,255,0.8)", marginBottom: 40, maxWidth: 620 }}>
              Jambo by CityTaxi — des trajets sûrs, accessibles et rapides au cœur de Conakry. Téléchargez l&apos;application et bougez librement.
            </p>

            {/* CTA store badges */}
            <div id="telecharger" style={{ display: "flex", gap: 16, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="#" style={{ display: "block" }}>
                <Image src="/images/app-store-fr.svg" alt="Télécharger sur l'App Store" width={160} height={48} style={{ objectFit: "contain" }} />
              </a>
              <a href="#" style={{ display: "block" }}>
                <Image src="/images/google-play-fr.png" alt="Disponible sur Google Play" width={180} height={54} style={{ objectFit: "contain" }} />
              </a>
            </div>
          </div>

        </section>

        
        

        {/* ── La flotte réelle ── */}
        <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 80px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ borderRadius: 16, overflow: "hidden", position: "relative", minHeight: 420 }}>
              <Image src="/images/vehicules.jpg" alt="Flotte CityTaxi" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(16,20,21,0.85) 0%, transparent 50%)" }} />
              <div style={{ position: "absolute", bottom: 24, left: 24 }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Flotte CityTaxi</div>
                <div style={{ fontSize: 14, color: "#bccbb9" }}>Véhicules Suzuki Swift & Ertiga — confortables et climatisés</div>
              </div>
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden", position: "relative", minHeight: 420 }}>
              <Image src="/images/e-vehicules.jpg" alt="Véhicules électriques" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(16,20,21,0.85) 0%, transparent 50%)" }} />
              <div style={{ position: "absolute", bottom: 24, left: 24 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 9999, backgroundColor: "rgba(75,226,119,0.2)", color: "#4be277", fontSize: 11, fontWeight: 600, marginBottom: 8 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 13 }}>electric_bolt</span>Écologique
                </span>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Véhicules électriques</div>
                <div style={{ fontSize: 14, color: "#bccbb9" }}>Mobilité zéro émission pour Conakry</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── KPIs ── */}
        <section style={{ backgroundColor: "#0b0f10", padding: "64px 24px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
            {[
              { icon: "directions_car", value: "1 500+", label: "Courses par jour" },
              { icon: "star", value: "4,9/5", label: "Note moyenne" },
              { icon: "timer", value: "< 5 min", label: "Temps d'attente moyen" },
              { icon: "verified_user", value: "100%", label: "Chauffeurs vérifiés" },
            ].map((k) => (
              <div key={k.value} style={{ ...G, padding: 28, textAlign: "center" }}>
                <span className="material-symbols-outlined" style={{ fontSize: 32, color: "#4be277", display: "block", marginBottom: 12 }}>{k.icon}</span>
                <div style={{ fontSize: 34, fontWeight: 800, color: "#4be277", lineHeight: 1, marginBottom: 6 }}>{k.value}</div>
                <div style={{ fontSize: 13, color: "#bccbb9" }}>{k.label}</div>
              </div>
            ))}
          </div>
        </section>


        <section style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: 9999, backgroundColor: "rgba(75,226,119,0.12)", color: "#4be277", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", marginBottom: 16, textTransform: "uppercase" }}>Simple &amp; Rapide</span>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#e0e3e5", letterSpacing: "-0.02em", marginBottom: 8 }}>Comment ça marche&nbsp;?</h2>
            <p style={{ fontSize: 16, color: "#bccbb9" }}>Trois étapes simples pour démarrer.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, position: "relative" }}>
            {/* connector line */}
            <div style={{ position: "absolute", top: 52, left: "16.66%", right: "16.66%", height: 1, background: "linear-gradient(to right, #4be277, rgba(75,226,119,0.2), #4be277)", zIndex: 0 }} />
            {STEPS.map((s, i) => (
              <div key={s.num} style={{ ...G, padding: 36, position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <div style={{ position: "relative", marginBottom: 24 }}>
                  <div style={{ width: 72, height: 72, borderRadius: "50%", backgroundColor: "#4be277", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 30, color: "#003915" }}>{s.icon}</span>
                  </div>
                  <div style={{ position: "absolute", top: -8, right: -8, width: 24, height: 24, borderRadius: "50%", backgroundColor: "#0b0f10", border: "1px solid rgba(75,226,119,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: "#4be277" }}>{String(i + 1).padStart(2, "0")}</div>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e0e3e5", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "#bccbb9", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Download CTA below steps */}
          {/* <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 48, flexWrap: "wrap" }}>
            <a href="#"><Image src="/images/app-store-fr.svg" alt="App Store" width={160} height={48} style={{ objectFit: "contain" }} /></a>
            <a href="#"><Image src="/images/google-play-fr.png" alt="Google Play" width={180} height={54} style={{ objectFit: "contain" }} /></a>
          </div> */}
        </section>



{/* ── Pourquoi Jambo ── */}
        <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 96px" }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, textAlign: "center", marginBottom: 8, color: "#e0e3e5" }}>Pourquoi choisir Jambo&nbsp;?</h2>
          <p style={{ fontSize: 16, color: "#bccbb9", textAlign: "center", marginBottom: 48 }}>L&apos;avenir du transport urbain à Conakry est là.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ ...G, padding: 32, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0 }}>
                <Image src="/images/vehicules.jpg" alt="" fill style={{ objectFit: "cover", opacity: 0.12 }} />
              </div>
              <div style={{ position: "relative" }}>
                <span className="material-symbols-outlined" style={{ fontSize: 28, color: "#4be277", display: "block", marginBottom: 12 }}>security</span>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "#e0e3e5" }}>Sécurité garantie</h3>
                <p style={{ fontSize: 14, color: "#bccbb9", lineHeight: 1.6 }}>Chaque chauffeur est vérifié et chaque trajet est suivi en temps réel par notre équipe de dispatch disponible 24h/24 et 7j/7.</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#22c55e", borderRadius: 12, padding: 32 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 28, color: "#004b1e", display: "block", marginBottom: 12 }}>groups</span>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "#004b1e" }}>Très inclusif</h3>
              <p style={{ fontSize: 14, color: "#004b1e", lineHeight: 1.6, marginBottom: 16 }}>Des solutions adaptées à tous les résidents, quel que soit le lieu ou la destination.</p>
              <div style={{ fontSize: 44, fontWeight: 800, color: "#003915" }}>100%</div>
            </div>
            <div style={{ ...G, padding: 32 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 28, color: "#4be277", display: "block", marginBottom: 12 }}>speed</span>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "#e0e3e5" }}>Déploiement rapide</h3>
              <p style={{ fontSize: 14, color: "#bccbb9", lineHeight: 1.6 }}>Temps moyen de prise en charge inférieur à 5 minutes dans les quartiers centraux de Conakry.</p>
            </div>
            <div style={{ ...G, padding: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <Image src="/images/city-taxi.png" alt="CityTaxi" width={100} height={30} style={{ objectFit: "contain" }} />
              </div>
              <p style={{ fontSize: 14, color: "#bccbb9", lineHeight: 1.6, marginBottom: 16 }}>Développé et opéré par CityTaxi, leader du transport à la demande en Guinée.</p>
              <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#4be277", fontSize: 14, fontWeight: 600 }}>
                En savoir plus <span className="material-symbols-outlined" style={{ fontSize: 15 }}>arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
        


        {/* ── Témoignages ── */}
        <section style={{ backgroundColor: "#0b0f10", padding: "96px 24px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: 9999, backgroundColor: "rgba(75,226,119,0.12)", color: "#4be277", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", marginBottom: 16, textTransform: "uppercase" }}>Ils utilisent Jambo</span>
              <h2 style={{ fontSize: 36, fontWeight: 800, color: "#e0e3e5", letterSpacing: "-0.02em", marginBottom: 8 }}>Étudiants, chauffeurs et professionnels</h2>
              <p style={{ fontSize: 16, color: "#bccbb9" }}>Des résidents de Conakry partagent leurs expériences.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {TESTIMONIALS.map((t) => (
                <div key={t.name} style={{ background: "rgba(30,41,59,0.85)", backdropFilter: "blur(12px)", border: "1px solid rgba(51,65,85,0.55)", borderRadius: 12, padding: 36, display: "flex", flexDirection: "column", gap: 24, position: "relative" }}>
                  {/* quote mark */}
                  <div style={{ position: "absolute", top: 24, right: 28, fontSize: 72, lineHeight: 1, color: "rgba(75,226,119,0.08)", fontFamily: "Georgia, serif", fontWeight: 700 }}>&ldquo;</div>
                  <div style={{ display: "flex", gap: 4 }}>
                    {[1,2,3,4,5].map((s) => (
                      <span key={s} className="material-symbols-outlined" style={{ fontSize: 16, color: "#4be277" }}>star</span>
                    ))}
                  </div>
                  <p style={{ fontSize: 15, color: "#e0e3e5", lineHeight: 1.7, fontStyle: "italic", flex: 1 }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, borderTop: "1px solid rgba(61,74,61,0.3)", paddingTop: 20 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: t.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: t.textColor, flexShrink: 0 }}>
                      {t.initials}
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#e0e3e5" }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: "#bccbb9" }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        
         {/* ── Partenaires / CTA bande verte ── */}
<div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <section style={{ backgroundColor: "#22c55e", borderRadius: 16, padding: "96px 24px", textAlign: "center" }}>
            <h2 style={{ fontSize: 30, fontWeight: 700, color: "#003915", marginBottom: 12 }}>Prêt à rejoindre la révolution de la mobilité&nbsp;?</h2>
            <p style={{ fontSize: 16, color: "#004b1e", maxWidth: 480, margin: "0 auto 36px" }}> Des milliers de conakrykas font déjà confiance à Jambo chaque jour. Rejoignez-les.</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
              <a href="#"><Image src="/images/app-store-fr.svg" alt="App Store" width={160} height={48} style={{ objectFit: "contain" }} /></a>
              <a href="#"><Image src="/images/google-play-fr.png" alt="Google Play" width={160} height={48} style={{ objectFit: "contain" }} /></a>
            </div>
          </section>
</div>


           


        


{/* ── Download Section ── */}
<section
  id="download"
  style={{
    backgroundColor: "#0b0f10",
    padding: "96px 24px",
    position: "relative",
    overflow: "hidden",
    borderTopLeftRadius: "48px",
    borderTopRightRadius: "48px",
  }}
>
  {/* Decorative blur */}
  <div
    style={{
      position: "absolute",
      left: "50%",
      top: "30%",
      width: "288px",
      height: "288px",
      backgroundColor: "rgba(75, 226, 119, 0.1)",
      borderRadius: "9999px",
      filter: "blur(120px)",
      transform: "translateX(-50%)",
      zIndex: 0,
    }}
  />

  <div style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto" }}>
    <div style={{ textAlign: "center", marginBottom: "64px" }}>
      <h2
        style={{
          fontSize: "42px",
          fontWeight: 800,
          color: "#4be277",
          marginBottom: "16px",
          letterSpacing: "-0.02em",
        }}
      >
        Téléchargez <span style={{ color: "#4be277" }}>Jambo</span> maintenant
      </h2>
      <p style={{ fontSize: "18px", color: "#bccbb9", maxWidth: "600px", margin: "0 auto" }}>
        Scannez le QR code correspondant à votre profil pour démarrer
      </p>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", maxWidth: "1100px", margin: "0 auto" }}>
      {apps.map((a) => (
        <div
          key={a.title}
          style={{
            background: "rgba(30,41,59,0.85)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(51,65,85,0.55)",
            borderRadius: "20px",
            padding: "48px 32px",
            textAlign: "center",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = "rgba(75,226,119,0.5)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = "rgba(51,65,85,0.55)";
          }}
        >
          <h3 style={{ fontSize: "26px", fontWeight: 700, color: "#e0e3e5", marginBottom: "32px" }}>
            {a.title}
          </h3>

          <div
            style={{
              backgroundColor: "#fff",
              padding: "16px",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(75,226,119,0.1)",
              display: "inline-block",
              marginBottom: "32px",
            }}
          >
            <Image
              src={a.qr}
              alt={a.alt}
              width={192}
              height={192}
              style={{ borderRadius: "8px" }}
            />
          </div>

          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={a.appStoreUrl} target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/app-store-fr.svg"
                alt="App Store"
                width={135}
                height={40}
              />
            </a>
            <a href={a.playStoreUrl} target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/google-play-fr.png"
                alt="Google Play"
                width={135}
                height={40}
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
        {/* ── Contact ── */}
        <section id="contact" style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>

            {/* Left info */}
            <div>
              <span style={{ display: "inline-block", padding: "4px 14px", borderRadius: 9999, backgroundColor: "rgba(75,226,119,0.12)", color: "#4be277", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", marginBottom: 20, textTransform: "uppercase" }}>Contact</span>
              <h2 style={{ fontSize: 36, fontWeight: 800, color: "#e0e3e5", letterSpacing: "-0.02em", marginBottom: 16 }}>
                Parlons de votre projet
              </h2>
              <p style={{ fontSize: 16, color: "#bccbb9", lineHeight: 1.7, marginBottom: 40 }}>
                Que vous soyez un partenaire potentiel, un investisseur ou simplement curieux d&apos;en savoir plus sur Jambo, notre équipe est disponible pour vous répondre.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { icon: "location_on", label: "Adresse", value: "Avenue de la République, Kaloum\nConakry, Guinée" },
                  { icon: "schedule", label: "Disponibilité", value: "Lun – Ven, 8h00 – 18h00" },
                  { icon: "support_agent", label: "Support", value: "Disponible 24h/7j via l'application" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "rgba(75,226,119,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 20, color: "#4be277" }}>{item.icon}</span>
                    </div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "#4be277", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 2 }}>{item.label}</div>
                      <div style={{ fontSize: 14, color: "#bccbb9", lineHeight: 1.5, whiteSpace: "pre-line" }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right form */}
            <div style={{ ...G, padding: 40, borderRadius: 16 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "#e0e3e5", marginBottom: 6 }}>Envoyez-nous un message</h3>
              <p style={{ fontSize: 14, color: "#bccbb9", marginBottom: 28 }}>Notre équipe vous répondra dans les 24 heures.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#bccbb9", marginBottom: 6 }}>Prénom</label>
                    <input type="text" placeholder="Amadou" style={{ width: "100%", background: "#1d2022", border: "1px solid rgba(61,74,61,0.5)", color: "#e0e3e5", borderRadius: 8, padding: "10px 14px", fontSize: 14, outline: "none", fontFamily: "Inter, sans-serif", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#bccbb9", marginBottom: 6 }}>Nom</label>
                    <input type="text" placeholder="Diallo" style={{ width: "100%", background: "#1d2022", border: "1px solid rgba(61,74,61,0.5)", color: "#e0e3e5", borderRadius: 8, padding: "10px 14px", fontSize: 14, outline: "none", fontFamily: "Inter, sans-serif", boxSizing: "border-box" }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#bccbb9", marginBottom: 6 }}>Adresse e-mail</label>
                  <input type="email" placeholder="amadou@exemple.com" style={{ width: "100%", background: "#1d2022", border: "1px solid rgba(61,74,61,0.5)", color: "#e0e3e5", borderRadius: 8, padding: "10px 14px", fontSize: 14, outline: "none", fontFamily: "Inter, sans-serif", boxSizing: "border-box" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#bccbb9", marginBottom: 6 }}>Sujet</label>
                  <select style={{ width: "100%", background: "#1d2022", border: "1px solid rgba(61,74,61,0.5)", color: "#e0e3e5", borderRadius: 8, padding: "10px 14px", fontSize: 14, outline: "none", fontFamily: "Inter, sans-serif", boxSizing: "border-box" }}>
                    <option value="">Sélectionnez un sujet</option>
                    <option>Partenariat commercial</option>
                    <option>Investissement</option>
                    <option>Support technique</option>
                    <option>Devenir chauffeur</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "#bccbb9", marginBottom: 6 }}>Message</label>
                  <textarea placeholder="Décrivez votre demande..." rows={5} style={{ width: "100%", background: "#1d2022", border: "1px solid rgba(61,74,61,0.5)", color: "#e0e3e5", borderRadius: 8, padding: "10px 14px", fontSize: 14, outline: "none", fontFamily: "Inter, sans-serif", resize: "vertical", boxSizing: "border-box" }} />
                </div>
                <button style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, backgroundColor: "#4be277", color: "#003915", fontWeight: 700, fontSize: 15, padding: "14px 28px", borderRadius: 8, border: "none", cursor: "pointer", width: "100%" }}>
                  Envoyer le message
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>send</span>
                </button>
              </div>
            </div>
          </div>
        </section>


        

        
      </main>

      <Footer
        tagline="Une mobilité inclusive et fiable au cœur de Conakry."
        sections={[
          { title: "LIENS", links: [{ label: "Politique de confidentialité", href: "#" }, { label: "Conditions d'utilisation", href: "#" }, { label: "Centre d'aide", href: "#" }, { label: "Contactez-nous", href: "#" }] },
          { title: "SERVICES", links: [{ label: "Courses en ville", href: "/services" }, { label: "Véhicules électriques", href: "/services" }, { label: "Devenir chauffeur", href: "#" }] },
          { title: "ADRESSE", links: [{ label: "Avenue de la République", href: "#" }, { label: "Kaloum, Conakry, Guinée", href: "#" }] },
        ]}
      />
    </>
  );
}