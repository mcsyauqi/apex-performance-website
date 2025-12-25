import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ background: "#0A0A0A", borderTop: "1px solid #222", padding: "64px 0 32px" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <span className="heading-font" style={{ fontSize: 24, fontWeight: 700 }}>
              <span className="text-gradient">APEX</span>
              <span style={{ color: "white", marginLeft: 4 }}>Performance</span>
            </span>
            <p style={{ color: "#6B7280", fontSize: 14, marginTop: 16, lineHeight: 1.7 }}>
              Where champions are made. Premium fitness experience in Jakarta.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "white", fontSize: 14, fontWeight: 600, marginBottom: 16 }}>Quick Links</h4>
            {["Classes", "Trainers", "Membership", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                style={{ display: "block", color: "#6B7280", fontSize: 14, marginBottom: 12, textDecoration: "none" }}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "white", fontSize: 14, fontWeight: 600, marginBottom: 16 }}>Contact</h4>
            <p style={{ color: "#6B7280", fontSize: 14, marginBottom: 12 }}>123 Fitness Street, Jakarta</p>
            <p style={{ color: "#6B7280", fontSize: 14, marginBottom: 12 }}>+62 21 1234 5678</p>
            <p style={{ color: "#6B7280", fontSize: 14 }}>hello@apex.com</p>
          </div>

          {/* Hours */}
          <div>
            <h4 style={{ color: "white", fontSize: 14, fontWeight: 600, marginBottom: 16 }}>Hours</h4>
            <p style={{ color: "#6B7280", fontSize: 14, marginBottom: 12 }}>Mon-Fri: 6AM - 11PM</p>
            <p style={{ color: "#6B7280", fontSize: 14, marginBottom: 12 }}>Sat-Sun: 7AM - 9PM</p>
            <p style={{ color: "#6B7280", fontSize: 14 }}>Elite: 24/7 Access</p>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid #222", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <p style={{ color: "#4B5563", fontSize: 12 }}>
            © 2024 APEX Performance. All rights reserved.
          </p>
          <p style={{ color: "#4B5563", fontSize: 12 }}>
            Created by <span style={{ color: "#EF4444" }}>Creativism Digital Marketing</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
