import { ImageResponse } from "next/og";

export const alt =
  "Alchemist Pharmacy — 30-minute medicine delivery in Lahore";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #0c3d34 0%, #0a6f5d 55%, #0e9079 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "rgba(255,255,255,0.14)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
            }}
          >
            ⚕
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 34, fontWeight: 700, lineHeight: 1 }}>
              Alchemist
            </span>
            <span
              style={{
                fontSize: 18,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              Pharmacy
            </span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 28,
            }}
          >
            <span
              style={{
                background: "rgba(255,255,255,0.15)",
                borderRadius: 999,
                padding: "8px 20px",
                fontSize: 22,
                fontWeight: 600,
              }}
            >
              📍 5 branches across Lahore
            </span>
          </div>
          <span style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>
            Medicine at your door
          </span>
          <span
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#a7f3d0",
            }}
          >
            in 30 minutes.
          </span>
        </div>

        {/* Bottom: WhatsApp cue */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background: "#25d366",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
            }}
          >
            💬
          </div>
          <span style={{ fontSize: 30, color: "rgba(255,255,255,0.9)" }}>
            Send your prescription on WhatsApp — alchemistpharmacy.com
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
