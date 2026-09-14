import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shin Jiho | Game & Software Developer",
  description: "Game, AI, data, web and system development portfolio."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
