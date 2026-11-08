
import { ImageResponse } from "next/og";

export const alt =
  "Harun Or Roshid - Full Stack Developer Portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "85px",
          backgroundColor: "#0A192F",
          color: "#CCD6F6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 25,
            fontWeight: 600,
            letterSpacing: 4,
            color: "#64FFDA",
          }}
        >
          FULL STACK DEVELOPER
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 800,
            marginTop: 30,
            letterSpacing: -3,
          }}
        >
          Harun Or Roshid
          <span style={{ color: "#64FFDA" }}>
            .
          </span>
        </div>

        <div
          style={{
            fontSize: 29,
            marginTop: 24,
            color: "#9FB0CA",
          }}
        >
          React • Next.js • Node.js • MongoDB
        </div>

        <div
          style={{
            width: 150,
            height: 6,
            marginTop: 45,
            borderRadius: 10,
            backgroundColor: "#64FFDA",
          }}
        />
      </div>
    ),
    size
  );
}
