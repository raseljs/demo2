import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#172033", borderRadius: 16 }}>
      <svg width="44" height="44" viewBox="0 0 44 44"><path d="M9 24.6 22 10l13 14.6v10.9a2.5 2.5 0 0 1-2.5 2.5h-21A2.5 2.5 0 0 1 9 35.5V24.6Z" fill="#FDDFD3"/><path d="m15.5 24 6.5-7.4 6.5 7.4v8.4h-13V24Z" fill="#D9735D"/></svg>
    </div>,
    size
  );
}
