import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Le Design Concept | Interior Design & Build",
  description:
    "Le Design Concept creates thoughtful interiors and handles the build from first idea to final fitting in Shah Alam, Selangor.",
  icons: {
    icon: `${basePath}/brand/le-design-logo.png`,
    shortcut: `${basePath}/brand/le-design-logo.png`,
  },
  openGraph: {
    title: "Le Design Concept | Interior Design & Build",
    description:
      "Thoughtful spaces, expressive details and a build process handled from first idea to final fitting.",
    url: siteUrl,
    siteName: "Le Design Concept",
    images: [
      {
        url: `${siteUrl.replace(/\/$/, "")}/og.png`,
        width: 1200,
        height: 630,
        alt: "Le Design Concept interior design and build",
      },
    ],
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Design Concept | Interior Design & Build",
    description: "Interior design, thoughtfully considered and beautifully built.",
    images: [`${siteUrl.replace(/\/$/, "")}/og.png`],
  },
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
