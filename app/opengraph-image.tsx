import { ImageResponse } from "next/og";

export const alt = "X-BUC TECH | IT and Cybersecurity Solutions";
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
          justifyContent: "center",
          padding: 80,
          background: "#0a0a0a",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 34, color: "#818cf8", letterSpacing: 6 }}>X-BUC TECH</div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 24, lineHeight: 1.1 }}>
          Secure IT. Stronger Cybersecurity.
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, color: "#818cf8", lineHeight: 1.1 }}>
          A More Resilient Business.
        </div>
        <div style={{ fontSize: 30, color: "#a3a3a3", marginTop: 36 }}>
          Managed IT · Cybersecurity · Cloud · Compliance
        </div>
      </div>
    ),
    size,
  );
}
