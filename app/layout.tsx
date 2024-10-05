import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Become a Seller",
  description: "become a seller",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

