import { useState, useEffect, useRef } from "react";

const products = [
  {
    name: "PC 157 + TB 500",
    dose: "5MG EACH",
    category: "Recuperación",
    description: "Sinergia dual para reparación acelerada de tejidos y soporte de curación sistémica.",
    purity: "99%",
    price: "$89.99",
    color: "#2a9aaa",
    tags: ["Salud Intestinal", "Reparación Tisular", "Anti-Inflamatorio"],
  },
  {
    name: "RETATRUTIDE",
    dose: "10 MG",
    category: "Metabólico",
    description: "Péptido triple agonista GLP-1/GIP/GCGR para optimización metabólica avanzada.",
    purity: "99%",
    price: "$129.99",
    color: "#2a7aaa",
    tags: ["Control de Peso", "Sensibilidad a la Insulina", "Apetito"],
  },
  {
    name: "GHK-CU",
    dose: "50 MG",
    category: "Regenerativo",
    description: "Complejo de péptido de cobre que promueve síntesis de colágeno y regeneración celular.",
    purity: "99%",
    price: "$69.99",
    color: "#3a6aaa",
    tags: ["Salud de la Piel", "Colágeno", "Anti-Envejecimiento"],
  },
  {
    name: "BPC-157",
    dose: "10 MG",
    category: "Recuperación",
    description: "Compuesto de protección corporal para integridad del revestimiento intestinal y curación acelerada.",
    purity: "99%",
    price: "$74.99",
    color: "#1a8a7a",
    tags: ["Reparación Intestinal", "Articulaciones", "Recuperación"],
  },
  {
    name: "SEMAX",
    dose: "5 MG",
    category: "Cognitivo",
    description: "Neuropéptido que mejora la expresión de BDNF para rendimiento cognitivo y enfoque.",
    purity: "99%",
    price: "$59.99",
    color: "#5a4aba",
    tags: ["Enfoque", "Neuroprotección", "Memoria"],
  },
];

const DNAIcon = ({ size = 48, color = "#2a9aaa" }) => (
  <svg width={size} height={size} viewBox="0 0 48 64" fill="none">
    <path d="M14 4C14 4 34 14 34 32C34 50 14 60 14 60" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M34 4C34 4 14 14 14 32C14 50 34 60 34 60" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <line x1="16" y1="12" x2="32" y2="12" stroke={color} strokeWidth="1.5" opacity="0.6" />
    <line x1="14" y1="22" x2="34" y2="22" stroke={color} strokeWidth="1.5" opacity="0.6" />
    <line x1="14" y1="32" x2="34" y2="32" stroke={color} strokeWidth="1.5" opacity="0.6" />
    <line x1="14" y1="42" x2="34" y2="42" stroke={color} strokeWidth="1.5" opacity="0.6" />
    <line x1="16" y1="52" x2="32" y2="52" stroke={color} strokeWidth="1.5" opacity="0.6" />
  </svg>
);

const VialSVG = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        transform: hovered ? "translateY(-8px) scale(1.03)" : "translateY(0) scale(1)",
        cursor: "pointer",
      }}
    >
      <svg width="130" height="185" viewBox="0 0 160 220" fill="none">
        {/* Cap */}
        <rect x="52" y="8" width="56" height="28" rx="4" fill="url(#capGrad)" />
        <rect x="54" y="10" width="52" height="6" rx="2" fill="#d0d0d0" opacity="0.5" />
        <ellipse cx="80" cy="8" rx="28" ry="4" fill="#c8c8c8" />
        {/* Neck */}
        <rect x="58" y="36" width="44" height="16" fill="url(#glassNeck)" />
        {/* Crimp ring */}
        <rect x="50" y="50" width="60" height="6" rx="2" fill="url(#crimpGrad)" />
        {/* Body */}
        <rect x="38" y="56" width="84" height="120" rx="6" fill="url(#glassBody)" />
        {/* Glass shine left */}
        <rect x="42" y="60" width="8" height="110" rx="4" fill="white" opacity="0.28" />
        {/* Glass shine right subtle */}
        <rect x="108" y="65" width="4" height="100" rx="2" fill="white" opacity="0.13" />
        {/* Label */}
        <rect x="44" y="72" width="72" height="90" rx="3" fill="white" opacity="0.93" />
        <line x1="50" y1="100" x2="110" y2="100" stroke={product.color} strokeWidth="1" opacity="0.5" />
        {/* DNA icon on label */}
        <g transform="translate(68, 76) scale(0.35)">
          <path d="M14 4C14 4 34 14 34 32C34 50 14 60 14 60" stroke={product.color} strokeWidth="3" strokeLinecap="round" />
          <path d="M34 4C34 4 14 14 14 32C14 50 34 60 34 60" stroke={product.color} strokeWidth="3" strokeLinecap="round" />
          <line x1="16" y1="16" x2="32" y2="16" stroke={product.color} strokeWidth="2" opacity="0.5" />
          <line x1="14" y1="32" x2="34" y2="32" stroke={product.color} strokeWidth="2" opacity="0.5" />
          <line x1="16" y1="48" x2="32" y2="48" stroke={product.color} strokeWidth="2" opacity="0.5" />
        </g>
        {/* Brand name */}
        <text x="80" y="96" textAnchor="middle" fill="#1a2a3a" fontSize="7" fontWeight="700" fontFamily="'DM Sans', sans-serif" letterSpacing="1.5">APTIVA LABS</text>
        {/* Product name */}
        <text x="80" y="118" textAnchor="middle" fill="#0a1a2a" fontSize="7.5" fontWeight="800" fontFamily="'DM Sans', sans-serif" letterSpacing="0.5">{product.name}</text>
        {/* Dose */}
        <text x="80" y="133" textAnchor="middle" fill="#2a3a4a" fontSize="7" fontWeight="600" fontFamily="'DM Sans', sans-serif">{product.dose}</text>
        {/* Colored band at bottom of label */}
        <rect x="44" y="148" width="72" height="14" rx="0" fill={product.color} />
        <text x="80" y="158" textAnchor="middle" fill="white" fontSize="5" fontWeight="600" fontFamily="'DM Sans', sans-serif" letterSpacing="0.3">{`<${product.purity} PURITY | HPLC VERIFIED`}</text>
        {/* Bottom of vial */}
        <ellipse cx="80" cy="176" rx="42" ry="6" fill="url(#bottomGrad)" />
        <defs>
          <linearGradient id="capGrad" x1="52" y1="8" x2="108" y2="36">
            <stop offset="0%" stopColor="#b8b8b8" />
            <stop offset="50%" stopColor="#d8d8d8" />
            <stop offset="100%" stopColor="#a8a8a8" />
          </linearGradient>
          <linearGradient id="crimpGrad" x1="50" y1="50" x2="110" y2="56">
            <stop offset="0%" stopColor="#c0c0c0" />
            <stop offset="50%" stopColor="#e0e0e0" />
            <stop offset="100%" stopColor="#b0b0b0" />
          </linearGradient>
          <linearGradient id="glassNeck" x1="58" y1="36" x2="102" y2="52">
            <stop offset="0%" stopColor="#e8f0f4" />
            <stop offset="100%" stopColor="#f4f8fa" />
          </linearGradient>
          <linearGradient id="glassBody" x1="38" y1="56" x2="122" y2="176">
            <stop offset="0%" stopColor="#eaf2f6" />
            <stop offset="30%" stopColor="#f6fafe" />
            <stop offset="70%" stopColor="#f0f6fa" />
            <stop offset="100%" stopColor="#e4eef4" />
          </linearGradient>
          <linearGradient id="bottomGrad" x1="38" y1="170" x2="122" y2="182">
            <stop offset="0%" stopColor="#d0dce4" />
            <stop offset="50%" stopColor="#e0eaf0" />
            <stop offset="100%" stopColor="#c8d8e0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="9" fill="#2a9aaa" opacity="0.15" />
    <path d="M5 9.5L7.5 12L13 6.5" stroke="#2a9aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const HamburgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <line x1="3" y1="6" x2="21" y2="6" stroke="#0a1a2a" strokeWidth="2" strokeLinecap="round" />
    <line x1="3" y1="12" x2="21" y2="12" stroke="#0a1a2a" strokeWidth="2" strokeLinecap="round" />
    <line x1="3" y1="18" x2="21" y2="18" stroke="#0a1a2a" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <line x1="5" y1="5" x2="19" y2="19" stroke="#0a1a2a" strokeWidth="2" strokeLinecap="round" />
    <line x1="19" y1="5" x2="5" y2="19" stroke="#0a1a2a" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M20 4L6 10V20C6 29 12.5 35.5 20 38C27.5 35.5 34 29 34 20V10L20 4Z" stroke="#2a9aaa" strokeWidth="2" fill="#2a9aaa" fillOpacity="0.08" />
    <path d="M14 20L18 24L26 16" stroke="#2a9aaa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LabIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M16 6V18L8 32C7 34 8.5 36 11 36H29C31.5 36 33 34 32 32L24 18V6" stroke="#2a9aaa" strokeWidth="2" fill="#2a9aaa" fillOpacity="0.08" />
    <line x1="14" y1="6" x2="26" y2="6" stroke="#2a9aaa" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="24" x2="24" y2="24" stroke="#2a9aaa" strokeWidth="1.5" opacity="0.5" />
    <circle cx="18" cy="29" r="2" fill="#2a9aaa" opacity="0.4" />
    <circle cx="24" cy="28" r="1.5" fill="#2a9aaa" opacity="0.3" />
  </svg>
);

const ShipIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="8" y="14" width="24" height="16" rx="3" stroke="#2a9aaa" strokeWidth="2" fill="#2a9aaa" fillOpacity="0.08" />
    <path d="M16 14V10C16 8 17.5 6 20 6C22.5 6 24 8 24 10V14" stroke="#2a9aaa" strokeWidth="2" />
    <line x1="8" y1="34" x2="32" y2="34" stroke="#2a9aaa" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const tickerItems = [
  "GRADO FARMACÉUTICO",
  "REGENERACIÓN CELULAR",
  "EUROPA · LATAM",
  "HPLC CERTIFICADO",
  "PUREZA ≥99%",
  "ENVÍO SEGURO",
  "INVESTIGACIÓN AVANZADA",
  "GRADO FARMACÉUTICO",
  "REGENERACIÓN CELULAR",
  "EUROPA · LATAM",
  "HPLC CERTIFICADO",
  "PUREZA ≥99%",
];

export default function AptivaLabsV2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setLoaded(true);
  }, []);

  const navItems = ["Inicio", "Péptidos", "Ciencia", "Nosotros", "Contacto"];

  return (
    <div style={{
      fontFamily: "'DM Sans', 'Outfit', sans-serif",
      background: "#f5fafc",
      color: "#0a1a2a",
      minHeight: "100vh",
      overflowX: "hidden",
      position: "relative",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.7; }
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .cta-filled:hover {
          background: #1a7a8a !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(42,154,170,0.35);
        }
        .cta-outlined:hover {
          background: #2a9aaa !important;
          color: white !important;
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 48px rgba(42,154,170,0.13);
        }
        .nav-link-mobile:hover { color: #2a9aaa !important; }
        * { box-sizing: border-box; }
        ::selection { background: rgba(42,154,170,0.2); }
        .whatsapp-btn:hover { transform: scale(1.1); box-shadow: 0 8px 24px rgba(37,211,102,0.45) !important; }
      `}</style>

      {/* ═══ NAVIGATION ═══ */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 200,
        background: "rgba(245, 250, 252, 0.92)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(42,154,170,0.09)",
        padding: "0 20px",
        animation: "slideDown 0.5s ease-out",
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <DNAIcon size={34} color="#2a9aaa" />
            <div>
              <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: 2.5, color: "#0a1a2a", fontFamily: "'Outfit', sans-serif", lineHeight: 1.1 }}>APTIVA LABS</div>
              <div style={{ fontSize: 8, letterSpacing: 3, color: "#2a9aaa", fontWeight: 600 }}>PÉPTIDOS DE INVESTIGACIÓN</div>
            </div>
          </div>

          {/* Desktop nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 28 }} className="desktop-nav">
            {navItems.map((item) => (
              <a key={item} style={{
                fontSize: 13,
                fontWeight: 500,
                color: "#4a5a6a",
                textDecoration: "none",
                cursor: "pointer",
                transition: "color 0.2s",
                letterSpacing: 0.3,
              }}
              onMouseEnter={e => e.target.style.color = "#2a9aaa"}
              onMouseLeave={e => e.target.style.color = "#4a5a6a"}
              >{item}</a>
            ))}
            <div style={{
              cursor: "pointer",
              padding: "8px 18px",
              background: "#0a1a2a",
              color: "white",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 0.4,
              position: "relative",
            }}>
              Carrito {cartCount > 0 && (
                <span style={{
                  position: "absolute", top: -6, right: -6,
                  background: "#2a9aaa", color: "white",
                  width: 18, height: 18, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 10, fontWeight: 700,
                }}>{cartCount}</span>
              )}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div style={{
            background: "white",
            borderTop: "1px solid rgba(42,154,170,0.1)",
            padding: "16px 20px 24px",
            animation: "slideDown 0.25s ease-out",
          }}>
            {navItems.map((item) => (
              <div key={item}
                className="nav-link-mobile"
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: "12px 0",
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#2a3a4a",
                  cursor: "pointer",
                  borderBottom: "1px solid rgba(42,154,170,0.07)",
                  transition: "color 0.2s",
                }}
              >{item}</div>
            ))}
            <button
              style={{
                marginTop: 16,
                width: "100%",
                background: "#2a9aaa",
                color: "white",
                border: "none",
                padding: "14px",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
              }}
              onClick={() => setMenuOpen(false)}
            >Ver Péptidos →</button>
          </div>
        )}
      </nav>

      {/* ═══ HERO SECTION ═══ */}
      <section style={{
        position: "relative",
        padding: "52px 20px 40px",
        background: "linear-gradient(160deg, #eaf5f8 0%, #f5fafc 45%, #eef4f8 100%)",
        overflow: "hidden",
      }}>
        {/* Background glow blobs */}
        <div style={{
          position: "absolute", top: -80, right: -80,
          width: 340, height: 340, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(42,154,170,0.08) 0%, transparent 70%)",
          animation: "pulse 7s ease-in-out infinite",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: 0, left: -60,
          width: 250, height: 250, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(42,154,170,0.05) 0%, transparent 70%)",
          animation: "pulse 9s ease-in-out infinite 2s",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(42,154,170,0.1)",
            borderRadius: 100,
            padding: "7px 18px",
            marginBottom: 28,
            animation: loaded ? "fadeUp 0.6s ease-out" : "none",
          }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#2a9aaa" }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: "#2a9aaa", letterSpacing: 1.2 }}>GRADO FARMACÉUTICO · HPLC CERTIFICADO</span>
          </div>

          {/* Hero headline */}
          <h1 style={{
            fontSize: "clamp(40px, 10vw, 60px)",
            fontWeight: 800,
            lineHeight: 1.08,
            margin: "0 0 18px",
            fontFamily: "'Outfit', sans-serif",
            animation: loaded ? "fadeUp 0.7s ease-out 0.1s both" : "none",
          }}>
            <span style={{ color: "#0a1a2a" }}>Optimiza Tu</span><br />
            <span style={{ color: "#2a9aaa" }}>Biología</span>
          </h1>

          {/* Hero subtitle */}
          <p style={{
            fontSize: "clamp(15px, 4vw, 17px)",
            lineHeight: 1.75,
            color: "#4a5a6a",
            maxWidth: 480,
            margin: "0 0 36px",
            animation: loaded ? "fadeUp 0.7s ease-out 0.2s both" : "none",
          }}>
            Péptidos médicos verificados por HPLC con ≥99% de pureza. Diseñados para potenciar los procesos naturales de tu cuerpo: recuperación, regeneración y rendimiento óptimo.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            marginBottom: 48,
            animation: loaded ? "fadeUp 0.7s ease-out 0.3s both" : "none",
          }}>
            <button
              className="cta-filled"
              style={{
                background: "#2a9aaa",
                color: "white",
                border: "none",
                padding: "15px 32px",
                borderRadius: 12,
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.3s ease",
                letterSpacing: 0.3,
              }}
            >
              Ver Péptidos →
            </button>
            <button
              className="cta-outlined"
              style={{
                background: "transparent",
                color: "#2a9aaa",
                border: "2px solid #2a9aaa",
                padding: "13px 28px",
                borderRadius: 12,
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
                letterSpacing: 0.3,
              }}
            >
              Ver Certificados
            </button>
          </div>

          {/* Vials display */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: 0,
            marginBottom: 12,
            animation: loaded ? "fadeUp 0.9s ease-out 0.4s both" : "none",
          }}>
            <div style={{ animation: "float 4.5s ease-in-out infinite 0.4s" }}>
              <VialSVG product={products[0]} />
            </div>
            <div style={{ marginBottom: 18, animation: "float 4s ease-in-out infinite" }}>
              <VialSVG product={products[1]} />
            </div>
            <div style={{ animation: "float 4.5s ease-in-out infinite 0.8s" }}>
              <VialSVG product={products[2]} />
            </div>
          </div>

          {/* Scroll down indicator */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 8,
            animation: "pulse 2.5s ease-in-out infinite",
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 9L12 15L18 9" stroke="#2a9aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* ═══ TRUST TICKER ═══ */}
      <section style={{
        background: "#0a1a2a",
        padding: "14px 0",
        overflow: "hidden",
        position: "relative",
      }}>
        <div style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "ticker 22s linear infinite",
        }}>
          {tickerItems.map((item, i) => (
            <span key={i} style={{
              display: "inline-flex",
              alignItems: "center",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              color: i % 3 === 0 ? "#2a9aaa" : "rgba(255,255,255,0.55)",
              paddingRight: 40,
            }}>
              {item}
              <span style={{ marginLeft: 40, color: "rgba(255,255,255,0.2)" }}>·</span>
            </span>
          ))}
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section style={{
        background: "#0e2030",
        padding: "28px 20px",
        borderBottom: "1px solid rgba(42,154,170,0.12)",
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 20,
        }}>
          {[
            { value: "≥99%", label: "PUREZA GARANTIZADA" },
            { value: "HPLC", label: "VERIFICACIÓN CERTIFICADA" },
            { value: "48HR", label: "ENVÍO RÁPIDO" },
            { value: "5,000+", label: "INVESTIGADORES" },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#2a9aaa", fontFamily: "'Outfit', sans-serif" }}>{stat.value}</div>
              <div style={{ fontSize: 9.5, color: "rgba(255,255,255,0.45)", letterSpacing: 1.8, fontWeight: 600, marginTop: 3 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ PRODUCTS SECTION ═══ */}
      <section style={{ padding: "72px 20px", background: "#fafcfd" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 10, letterSpacing: 4, color: "#2a9aaa", fontWeight: 700, marginBottom: 10 }}>NUESTRO CATÁLOGO</div>
            <h2 style={{ fontSize: "clamp(28px, 6vw, 38px)", fontWeight: 800, margin: "0 0 12px", fontFamily: "'Outfit', sans-serif" }}>
              Péptidos de Investigación
            </h2>
            <p style={{ fontSize: 15, color: "#6a7a8a", maxWidth: 480, margin: "0 auto", lineHeight: 1.65 }}>
              Cada compuesto es sometido a rigurosas pruebas HPLC de terceros. Certificados de análisis disponibles para cada lote.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 20,
          }}>
            {products.map((product, i) => (
              <div
                key={i}
                className="product-card"
                style={{
                  background: "white",
                  borderRadius: 16,
                  padding: 24,
                  border: "1px solid rgba(42,154,170,0.09)",
                  transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                  cursor: "pointer",
                  display: "flex",
                  gap: 20,
                  alignItems: "center",
                  animation: loaded ? `fadeUp 0.6s ease-out ${0.1 * i}s both` : "none",
                }}
                onClick={() => setSelectedProduct(selectedProduct === i ? null : i)}
              >
                <div style={{ flexShrink: 0 }}>
                  <VialSVG product={product} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    display: "inline-block",
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: 2,
                    color: product.color,
                    background: `${product.color}14`,
                    padding: "3px 9px",
                    borderRadius: 5,
                    marginBottom: 8,
                  }}>{product.category.toUpperCase()}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, margin: "0 0 3px", fontFamily: "'Outfit', sans-serif" }}>{product.name}</h3>
                  <div style={{ fontSize: 12, color: "#8a9aaa", fontWeight: 600, marginBottom: 8 }}>{product.dose}</div>
                  <p style={{ fontSize: 12, color: "#5a6a7a", lineHeight: 1.6, margin: "0 0 12px" }}>{product.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
                    {product.tags.map((tag, j) => (
                      <span key={j} style={{
                        fontSize: 10,
                        padding: "3px 9px",
                        borderRadius: 100,
                        background: "rgba(42,154,170,0.07)",
                        color: "#2a7a8a",
                        fontWeight: 500,
                      }}>{tag}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 20, fontWeight: 800, color: "#0a1a2a", fontFamily: "'Outfit', sans-serif" }}>{product.price}</span>
                    <button
                      onClick={(e) => { e.stopPropagation(); setCartCount(c => c + 1); }}
                      style={{
                        background: "#0a1a2a",
                        color: "white",
                        border: "none",
                        padding: "9px 18px",
                        borderRadius: 8,
                        fontSize: 12,
                        fontWeight: 700,
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                        letterSpacing: 0.3,
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = "#2a9aaa"}
                      onMouseLeave={e => e.currentTarget.style.background = "#0a1a2a"}
                    >
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY APTIVA ═══ */}
      <section style={{
        padding: "72px 20px",
        background: "linear-gradient(180deg, #edf5f8 0%, #f5fafc 100%)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 10, letterSpacing: 4, color: "#2a9aaa", fontWeight: 700, marginBottom: 10 }}>POR QUÉ ELEGIRNOS</div>
            <h2 style={{ fontSize: "clamp(26px, 5vw, 36px)", fontWeight: 800, margin: 0, fontFamily: "'Outfit', sans-serif" }}>La Diferencia Aptiva</h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}>
            {[
              { icon: <ShieldIcon />, title: "Pureza Verificada", desc: "Cada lote probado por HPLC con Certificados de Análisis completos disponibles. Garantizamos ≥99% de pureza o devolvemos tu dinero." },
              { icon: <LabIcon />, title: "Calidad de Laboratorio", desc: "Fabricado en instalaciones certificadas ISO con procesos de grado farmacéutico. Liofilizado bajo estrictas condiciones cGMP." },
              { icon: <ShipIcon />, title: "Envío Seguro", desc: "Embalaje con control de temperatura y entrega rápida y discreta. Integridad de la cadena de frío desde el laboratorio hasta tu puerta." },
            ].map((feature, i) => (
              <div key={i} style={{
                background: "white",
                borderRadius: 16,
                padding: 32,
                border: "1px solid rgba(42,154,170,0.09)",
                textAlign: "center",
              }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>{feature.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 10px", fontFamily: "'Outfit', sans-serif" }}>{feature.title}</h3>
                <p style={{ fontSize: 13, color: "#5a6a7a", lineHeight: 1.7, margin: 0 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ QUALITY ASSURANCE ═══ */}
      <section style={{
        padding: "72px 20px",
        background: "#0a1a2a",
        color: "white",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 56,
            alignItems: "center",
          }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: 4, color: "#2a9aaa", fontWeight: 700, marginBottom: 14 }}>CONTROL DE CALIDAD</div>
              <h2 style={{ fontSize: "clamp(24px, 5vw, 34px)", fontWeight: 800, margin: "0 0 18px", fontFamily: "'Outfit', sans-serif", lineHeight: 1.2 }}>
                Cada Vial Cuenta<br />una Historia de Precisión
              </h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: 28 }}>
                Nuestro proceso de control de calidad de múltiples pasos garantiza que cada péptido cumpla con los más altos estándares para aplicaciones de investigación.
              </p>
              {[
                "Pruebas HPLC de terceros en cada lote",
                "Confirmación de identidad por espectrometría de masas",
                "Pruebas de endotoxinas por debajo de los límites USP",
                "Liofilizado en sala limpia Clase 100",
                "COA específico por lote en cada pedido",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <CheckIcon />
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 4,
            }}>
              {products.slice(0, 4).map((p, i) => (
                <div key={i} style={{ animation: `float ${3 + i * 0.5}s ease-in-out infinite ${i * 0.3}s` }}>
                  <VialSVG product={p} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ NEWSLETTER ═══ */}
      <section style={{
        padding: "56px 20px",
        background: "linear-gradient(135deg, #eaf5f8 0%, #e2f0f4 100%)",
      }}>
        <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          <DNAIcon size={36} color="#2a9aaa" />
          <h2 style={{ fontSize: "clamp(22px, 5vw, 28px)", fontWeight: 800, margin: "14px 0 8px", fontFamily: "'Outfit', sans-serif" }}>
            Mantente Actualizado
          </h2>
          <p style={{ fontSize: 14, color: "#5a6a7a", marginBottom: 24, lineHeight: 1.65 }}>
            Nuevos compuestos, lanzamientos de lotes y precios exclusivos — directo a tu bandeja de entrada.
          </p>
          <div style={{ display: "flex", gap: 10, maxWidth: 440, margin: "0 auto", flexWrap: "wrap" }}>
            <input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: 1,
                minWidth: 200,
                padding: "13px 18px",
                borderRadius: 10,
                border: "2px solid rgba(42,154,170,0.15)",
                fontSize: 14,
                outline: "none",
                fontFamily: "'DM Sans', sans-serif",
                background: "white",
              }}
            />
            <button
              style={{
                background: "#2a9aaa",
                color: "white",
                border: "none",
                padding: "13px 24px",
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.25s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#1a7a8a"}
              onMouseLeave={e => e.currentTarget.style.background = "#2a9aaa"}
            >
              Suscribirse
            </button>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{
        background: "#060e16",
        padding: "48px 20px 28px",
        color: "rgba(255,255,255,0.4)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 36,
            flexWrap: "wrap",
            gap: 28,
          }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <DNAIcon size={26} color="#2a9aaa" />
                <span style={{ fontSize: 15, fontWeight: 800, color: "white", letterSpacing: 2.5, fontFamily: "'Outfit', sans-serif" }}>APTIVA LABS</span>
              </div>
              <p style={{ fontSize: 12, lineHeight: 1.7, maxWidth: 260 }}>
                Péptidos de grado investigación para investigadores calificados. Todos los productos son solo para uso en laboratorio.
              </p>
            </div>
            {[
              { title: "Productos", links: ["Todos los Péptidos", "Recuperación", "Metabólico", "Cognitivo", "Regenerativo"] },
              { title: "Recursos", links: ["Certificados de Análisis", "Calculadora de Dosis", "Biblioteca de Investigación", "FAQ"] },
              { title: "Empresa", links: ["Sobre Nosotros", "Contacto", "Política de Envío", "Términos de Servicio"] },
            ].map((col, i) => (
              <div key={i}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "rgba(255,255,255,0.65)", marginBottom: 14 }}>
                  {col.title.toUpperCase()}
                </div>
                {col.links.map((link, j) => (
                  <div key={j} style={{ marginBottom: 9 }}>
                    <a style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.38)",
                      textDecoration: "none",
                      cursor: "pointer",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => e.target.style.color = "#2a9aaa"}
                    onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.38)"}
                    >{link}</a>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 10,
          }}>
            <span style={{ fontSize: 11 }}>© 2026 Aptiva Labs. Todos los derechos reservados. Solo para uso en investigación.</span>
            <span style={{ fontSize: 10, letterSpacing: 1.5 }}>NO APTO PARA CONSUMO HUMANO</span>
          </div>
        </div>
      </footer>

      {/* ═══ WHATSAPP FLOATING BUTTON ═══ */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        style={{
          position: "fixed",
          bottom: 24,
          right: 20,
          zIndex: 999,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "#25d366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(37,211,102,0.35)",
          transition: "all 0.3s ease",
          textDecoration: "none",
        }}
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
