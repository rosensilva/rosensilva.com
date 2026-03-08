import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rosen Silva - Technical Lead at WSO2";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #080808 0%, #1a1a2e 50%, #16213e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            marginBottom: 32,
            fontSize: 36,
            fontWeight: 700,
            color: "white",
          }}
        >
          RS
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          Rosen Silva
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#818cf8",
            marginBottom: 24,
          }}
        >
          Technical Lead at WSO2
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#9ca3af",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          Building enterprise-grade integration software powering 350+ enterprises worldwide
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 16,
            color: "#4b5563",
          }}
        >
          rosensilva.com
        </div>
      </div>
    ),
    { ...size }
  );
}
