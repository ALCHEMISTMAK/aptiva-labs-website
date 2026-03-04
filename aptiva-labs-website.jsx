import { useState, useEffect, useRef } from "react";

const products = [
  {
    name: "BPC-157 | TB-500",
    dose: "5 MG EACH",
    category: "Recovery",
    description: "Dual-peptide synergy for accelerated tissue repair and systemic healing support.",
    purity: "99.9%",
    price: "$89.99",
    color: "#1a8a8a",
    tags: ["Gut Health", "Tissue Repair", "Anti-Inflammatory"],
  },
  {
    name: "RETATRUTIDE",
    dose: "10 MG",
    category: "Metabolic",
    description: "Triple-agonist GLP-1/GIP/GCGR peptide for advanced metabolic optimization.",
    purity: "99%+",
    price: "$129.99",
    color: "#2a7a9a",
    tags: ["Weight Management", "Insulin Sensitivity", "Appetite"],
  },
  {
    name: "GHK-CU",
    dose: "50 MG",
    category: "Regenerative",
    description: "Copper peptide complex promoting collagen synthesis and cellular regeneration.",
    purity: "99%+",
    price: "$69.99",
    color: "#3a6aaa",
    tags: ["Skin Health", "Collagen", "Anti-Aging"],
  },
  {
    name: "BPC-157",
    dose: "10 MG",
    category: "Recovery",
    description: "Body Protection Compound for gut lining integrity and accelerated wound healing.",
    purity: "99%+",
    price: "$74.99",
    color: "#1a7a7a",
    tags: ["Gut Repair", "Joint Health", "Recovery"],
  },
  {
    name: "SEMAX",
    dose: "5 MG",
    category: "Cognitive",
    description: "Neuropeptide enhancing BDNF expression for cognitive performance and focus.",
    purity: "99%+",
    price: "$59.99",
    color: "#4a5aba",
    tags: ["Focus", "Neuroprotection", "Memory"],
  },
];

const DNAIcon = ({ size = 48, color = "#3a9aaa" }) => (
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

const VialSVG = ({ product, index }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        transform: hovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
        cursor: "pointer",
      }}
    >
      <svg width="160" height="220" viewBox="0 0 160 220" fill="none">
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
        <rect x="42" y="60" width="8" height="110" rx="4" fill="white" opacity="0.25" />
        
        {/* Glass shine right subtle */}
        <rect x="108" y="65" width="4" height="100" rx="2" fill="white" opacity="0.12" />
        
        {/* Label area */}
        <rect x="44" y="72" width="72" height="90" rx="3" fill="white" opacity="0.92" />
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
        <text x="80" y="120" textAnchor="middle" fill="#0a1a2a" fontSize="8" fontWeight="800" fontFamily="'DM Sans', sans-serif" letterSpacing="0.5">{product.name}</text>
        
        {/* Dose */}
        <text x="80" y="134" textAnchor="middle" fill="#2a3a4a" fontSize="7" fontWeight="600" fontFamily="'DM Sans', sans-serif">{product.dose}</text>
        
        {/* Purity */}
        <text x="80" y="152" textAnchor="middle" fill={product.color} fontSize="5.5" fontWeight="600" fontFamily="'DM Sans', sans-serif" letterSpacing="0.5">{`<${product.purity} PURITY | HPLC`}</text>
        
        {/* Bottom of vial */}
        <ellipse cx="80" cy="176" rx="42" ry="6" fill="url(#bottomGrad)" />
        
        {/* Liquid subtle */}
        <rect x="42" y="155" width="76" height="18" rx="0" fill={product.color} opacity="0.04" />
        
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
    <circle cx="9" cy="9" r="9" fill="#3a9aaa" opacity="0.15" />
    <path d="M5 9.5L7.5 12L13 6.5" stroke="#3a9aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M20 4L6 10V20C6 29 12.5 35.5 20 38C27.5 35.5 34 29 34 20V10L20 4Z" stroke="#3a9aaa" strokeWidth="2" fill="#3a9aaa" fillOpacity="0.08" />
    <path d="M14 20L18 24L26 16" stroke="#3a9aaa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LabIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M16 6V18L8 32C7 34 8.5 36 11 36H29C31.5 36 33 34 32 32L24 18V6" stroke="#3a9aaa" strokeWidth="2" fill="#3a9aaa" fillOpacity="0.08" />
    <line x1="14" y1="6" x2="26" y2="6" stroke="#3a9aaa" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="24" x2="24" y2="24" stroke="#3a9aaa" strokeWidth="1.5" opacity="0.5" />
    <circle cx="18" cy="29" r="2" fill="#3a9aaa" opacity="0.4" />
    <circle cx="24" cy="28" r="1.5" fill="#3a9aaa" opacity="0.3" />
  </svg>
);

const ShipIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="8" y="14" width="24" height="16" rx="3" stroke="#3a9aaa" strokeWidth="2" fill="#3a9aaa" fillOpacity="0.08" />
    <path d="M16 14V10C16 8 17.5 6 20 6C22.5 6 24 8 24 10V14" stroke="#3a9aaa" strokeWidth="2" />
    <line x1="8" y1="34" x2="32" y2="34" stroke="#3a9aaa" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function AptivaLabsWebsite() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setLoaded(true);
  }, []);

  const navItems = ["Home", "Products", "Science", "About"];

  return (
    <div style={{
      fontFamily: "'DM Sans', 'Outfit', sans-serif",
      background: "#fafcfd",
      color: "#0a1a2a",
      minHeight: "100vh",
      overflowX: "hidden",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .nav-link:hover { color: #3a9aaa !important; }
        .product-card:hover { 
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(58, 154, 170, 0.12);
        }
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(58, 154, 170, 0.35);
        }
        .cta-btn-outline:hover {
          background: #3a9aaa !important;
          color: white !important;
        }
        .tag:hover { background: rgba(58, 154, 170, 0.15) !important; }
        * { box-sizing: border-box; }
        ::selection { background: rgba(58, 154, 170, 0.2); }
      `}</style>

      {/* ═══════════ NAVIGATION ═══════════ */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(250, 252, 253, 0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(58, 154, 170, 0.08)",
        padding: "0 40px",
        animation: "slideDown 0.6s ease-out",
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <DNAIcon size={36} color="#3a9aaa" />
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: 2, color: "#0a1a2a", fontFamily: "'Outfit', sans-serif" }}>APTIVA LABS</div>
              <div style={{ fontSize: 9, letterSpacing: 3, color: "#3a9aaa", fontWeight: 600, marginTop: -2 }}>RESEARCH PEPTIDES</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
            {navItems.map((item) => (
              <a
                key={item}
                className="nav-link"
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#4a5a6a",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "color 0.3s",
                  letterSpacing: 0.5,
                }}
              >
                {item}
              </a>
            ))}
            <div style={{
              position: "relative",
              cursor: "pointer",
              padding: "8px 20px",
              background: "#0a1a2a",
              color: "white",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 0.5,
              transition: "all 0.3s",
            }}>
              Cart {cartCount > 0 && (
                <span style={{
                  position: "absolute",
                  top: -6,
                  right: -6,
                  background: "#3a9aaa",
                  color: "white",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontWeight: 700,
                }}>{cartCount}</span>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* ═══════════ HERO SECTION ═══════════ */}
      <section style={{
        position: "relative",
        padding: "100px 40px 80px",
        overflow: "hidden",
        background: "linear-gradient(170deg, #f0f8fa 0%, #fafcfd 40%, #f4f8fa 100%)",
      }}>
        {/* Decorative elements */}
        <div style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(58,154,170,0.06) 0%, transparent 70%)",
          animation: "pulse 6s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute",
          bottom: -50,
          left: -50,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(58,154,170,0.04) 0%, transparent 70%)",
          animation: "pulse 8s ease-in-out infinite 2s",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 80 }}>
          <div style={{
            flex: 1,
            animation: loaded ? "fadeUp 0.8s ease-out" : "none",
          }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(58, 154, 170, 0.08)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 24,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#3a9aaa" }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: "#3a9aaa", letterSpacing: 1 }}>HPLC VERIFIED · 99%+ PURITY</span>
            </div>

            <h1 style={{
              fontSize: 52,
              fontWeight: 800,
              lineHeight: 1.1,
              margin: "0 0 20px",
              fontFamily: "'Outfit', sans-serif",
              color: "#0a1a2a",
            }}>
              Research-Grade<br />
              <span style={{ color: "#3a9aaa" }}>Peptides</span> You<br />
              Can Trust
            </h1>

            <p style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: "#5a6a7a",
              maxWidth: 440,
              margin: "0 0 36px",
            }}>
              Every vial independently verified through High-Performance Liquid Chromatography. Pharmaceutical precision for serious researchers.
            </p>

            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <button
                className="cta-btn"
                style={{
                  background: "#3a9aaa",
                  color: "white",
                  border: "none",
                  padding: "14px 36px",
                  borderRadius: 10,
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  letterSpacing: 0.5,
                }}
              >
                Shop Peptides →
              </button>
              <button
                className="cta-btn-outline"
                style={{
                  background: "transparent",
                  color: "#3a9aaa",
                  border: "2px solid #3a9aaa",
                  padding: "12px 32px",
                  borderRadius: 10,
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  letterSpacing: 0.5,
                }}
              >
                View COAs
              </button>
            </div>
          </div>

          {/* Hero vials display */}
          <div style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: 0,
            animation: loaded ? "fadeUp 1s ease-out 0.2s both" : "none",
          }}>
            <div style={{ animation: "float 4s ease-in-out infinite 0.5s" }}>
              <VialSVG product={products[0]} index={0} />
            </div>
            <div style={{ marginBottom: 20, animation: "float 4s ease-in-out infinite" }}>
              <VialSVG product={products[1]} index={1} />
            </div>
            <div style={{ animation: "float 4s ease-in-out infinite 1s" }}>
              <VialSVG product={products[4]} index={4} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TRUST BAR ═══════════ */}
      <section style={{
        background: "#0a1a2a",
        padding: "28px 40px",
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
            { value: "99%+", label: "Purity Guaranteed" },
            { value: "HPLC", label: "Verified Testing" },
            { value: "48HR", label: "Fast Shipping" },
            { value: "5,000+", label: "Researchers Served" },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#3a9aaa", fontFamily: "'Outfit', sans-serif" }}>{stat.value}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: 1.5, fontWeight: 500, marginTop: 2 }}>{stat.label.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ PRODUCTS SECTION ═══════════ */}
      <section style={{ padding: "80px 40px", background: "#fafcfd" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 11, letterSpacing: 4, color: "#3a9aaa", fontWeight: 700, marginBottom: 12 }}>OUR CATALOG</div>
            <h2 style={{ fontSize: 38, fontWeight: 800, margin: 0, fontFamily: "'Outfit', sans-serif" }}>Research Peptides</h2>
            <p style={{ fontSize: 16, color: "#6a7a8a", marginTop: 12, maxWidth: 500, marginLeft: "auto", marginRight: "auto" }}>
              Each compound undergoes rigorous third-party HPLC testing. Certificates of Analysis available for every batch.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340, 1fr))",
            gap: 24,
          }}>
            {products.map((product, i) => (
              <div
                key={i}
                className="product-card"
                style={{
                  background: "white",
                  borderRadius: 16,
                  padding: 28,
                  border: "1px solid rgba(58, 154, 170, 0.08)",
                  transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                  cursor: "pointer",
                  display: "flex",
                  gap: 24,
                  alignItems: "center",
                  animation: loaded ? `fadeUp 0.6s ease-out ${0.1 * i}s both` : "none",
                }}
                onClick={() => setSelectedProduct(selectedProduct === i ? null : i)}
              >
                <div style={{ flexShrink: 0 }}>
                  <VialSVG product={product} index={i} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: "inline-block",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: 2,
                    color: product.color,
                    background: `${product.color}12`,
                    padding: "4px 10px",
                    borderRadius: 6,
                    marginBottom: 10,
                  }}>{product.category.toUpperCase()}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 4px", fontFamily: "'Outfit', sans-serif" }}>{product.name}</h3>
                  <div style={{ fontSize: 13, color: "#8a9aaa", fontWeight: 600, marginBottom: 10 }}>{product.dose}</div>
                  <p style={{ fontSize: 13, color: "#5a6a7a", lineHeight: 1.6, margin: "0 0 14px" }}>{product.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                    {product.tags.map((tag, j) => (
                      <span key={j} className="tag" style={{
                        fontSize: 11,
                        padding: "4px 10px",
                        borderRadius: 100,
                        background: "rgba(58, 154, 170, 0.06)",
                        color: "#3a7a8a",
                        fontWeight: 500,
                        transition: "background 0.2s",
                      }}>{tag}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 22, fontWeight: 800, color: "#0a1a2a", fontFamily: "'Outfit', sans-serif" }}>{product.price}</span>
                    <button
                      onClick={(e) => { e.stopPropagation(); setCartCount(c => c + 1); }}
                      className="cta-btn"
                      style={{
                        background: "#0a1a2a",
                        color: "white",
                        border: "none",
                        padding: "10px 22px",
                        borderRadius: 8,
                        fontSize: 13,
                        fontWeight: 700,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        letterSpacing: 0.5,
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ WHY APTIVA ═══════════ */}
      <section style={{
        padding: "80px 40px",
        background: "linear-gradient(180deg, #f0f6f8 0%, #fafcfd 100%)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 11, letterSpacing: 4, color: "#3a9aaa", fontWeight: 700, marginBottom: 12 }}>WHY CHOOSE US</div>
            <h2 style={{ fontSize: 38, fontWeight: 800, margin: 0, fontFamily: "'Outfit', sans-serif" }}>The Aptiva Difference</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {[
              { icon: <ShieldIcon />, title: "Verified Purity", desc: "Every batch tested via HPLC with full Certificates of Analysis available. We guarantee ≥99% purity or your money back." },
              { icon: <LabIcon />, title: "Lab-Grade Quality", desc: "Manufactured in ISO-certified facilities with pharmaceutical-grade processes. Lyophilized under strict cGMP conditions." },
              { icon: <ShipIcon />, title: "Secure Shipping", desc: "Temperature-controlled packaging with discrete, rapid delivery. Cold chain integrity maintained from lab to your door." },
            ].map((feature, i) => (
              <div key={i} style={{
                background: "white",
                borderRadius: 16,
                padding: 36,
                border: "1px solid rgba(58, 154, 170, 0.08)",
                textAlign: "center",
                animation: loaded ? `fadeUp 0.6s ease-out ${0.15 * i}s both` : "none",
              }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>{feature.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 12px", fontFamily: "'Outfit', sans-serif" }}>{feature.title}</h3>
                <p style={{ fontSize: 14, color: "#5a6a7a", lineHeight: 1.7, margin: 0 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ QUALITY ASSURANCE ═══════════ */}
      <section style={{ padding: "80px 40px", background: "#0a1a2a", color: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 80 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, letterSpacing: 4, color: "#3a9aaa", fontWeight: 700, marginBottom: 16 }}>QUALITY ASSURANCE</div>
            <h2 style={{ fontSize: 36, fontWeight: 800, margin: "0 0 20px", fontFamily: "'Outfit', sans-serif", lineHeight: 1.2 }}>
              Every Vial Tells<br />a Story of Precision
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 32 }}>
              Our multi-step quality control process ensures each peptide meets the highest standards for research applications.
            </p>
            {[
              "Third-party HPLC testing on every batch",
              "Mass spectrometry identity confirmation",
              "Endotoxin testing below USP limits",
              "Lyophilized in Class 100 cleanroom",
              "Batch-specific COA with every order",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <CheckIcon />
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 8,
          }}>
            {products.slice(0, 4).map((p, i) => (
              <div key={i} style={{ animation: `float ${3 + i * 0.5}s ease-in-out infinite ${i * 0.3}s` }}>
                <VialSVG product={p} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ NEWSLETTER ═══════════ */}
      <section style={{
        padding: "64px 40px",
        background: "linear-gradient(135deg, #f0f8fa 0%, #e8f4f6 100%)",
      }}>
        <div style={{
          maxWidth: 600,
          margin: "0 auto",
          textAlign: "center",
        }}>
          <DNAIcon size={40} color="#3a9aaa" />
          <h2 style={{ fontSize: 28, fontWeight: 800, margin: "16px 0 8px", fontFamily: "'Outfit', sans-serif" }}>Stay Research-Ready</h2>
          <p style={{ fontSize: 15, color: "#5a6a7a", marginBottom: 28 }}>
            New compounds, batch releases, and exclusive pricing — direct to your inbox.
          </p>
          <div style={{ display: "flex", gap: 12, maxWidth: 460, margin: "0 auto" }}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: 1,
                padding: "14px 20px",
                borderRadius: 10,
                border: "2px solid rgba(58, 154, 170, 0.15)",
                fontSize: 14,
                outline: "none",
                fontFamily: "'DM Sans', sans-serif",
                background: "white",
              }}
            />
            <button
              className="cta-btn"
              style={{
                background: "#3a9aaa",
                color: "white",
                border: "none",
                padding: "14px 28px",
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.3s ease",
                letterSpacing: 0.5,
                whiteSpace: "nowrap",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer style={{
        background: "#060e16",
        padding: "56px 40px 32px",
        color: "rgba(255,255,255,0.4)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 40, flexWrap: "wrap", gap: 32 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <DNAIcon size={28} color="#3a9aaa" />
                <span style={{ fontSize: 16, fontWeight: 800, color: "white", letterSpacing: 2, fontFamily: "'Outfit', sans-serif" }}>APTIVA LABS</span>
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.7, maxWidth: 280 }}>
                Research-grade peptides for qualified researchers. All products are for laboratory research use only.
              </p>
            </div>
            {[
              { title: "Products", links: ["All Peptides", "Recovery", "Metabolic", "Cognitive", "Regenerative"] },
              { title: "Resources", links: ["Certificates of Analysis", "Dosage Calculator", "Research Library", "FAQ"] },
              { title: "Company", links: ["About Us", "Contact", "Shipping Policy", "Terms of Service"] },
            ].map((col, i) => (
              <div key={i}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: "rgba(255,255,255,0.7)", marginBottom: 16 }}>{col.title.toUpperCase()}</div>
                {col.links.map((link, j) => (
                  <div key={j} style={{ marginBottom: 10 }}>
                    <a style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none", cursor: "pointer", transition: "color 0.2s" }}>{link}</a>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}>
            <span style={{ fontSize: 12 }}>© 2026 Aptiva Labs. All rights reserved. For research use only.</span>
            <span style={{ fontSize: 11, letterSpacing: 1 }}>NOT FOR HUMAN CONSUMPTION</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
