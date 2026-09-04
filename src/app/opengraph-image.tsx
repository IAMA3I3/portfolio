import { ImageResponse } from "next/og"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = "Abdulazeez Salami – Web Developer"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 220,
            height: 220,
            borderRadius: 36,
            background: "rgba(37, 99, 235, 0.15)",
            color: "#2563eb",
            fontSize: 110,
            fontWeight: 700,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          AS
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 56,
            fontWeight: 700,
            color: "#171717",
          }}
        >
          Abdulazeez Salami
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 12,
            fontSize: 32,
            fontWeight: 500,
            color: "#2563eb",
          }}
        >
          Web Developer
        </div>
      </div>
    ),
    { ...size }
  )
}
