
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ekansh Jindal | Creative Portfolio",
  description:
    "Ekansh Jindal — Computer Science Engineering student, technology enthusiast and creative problem solver.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
