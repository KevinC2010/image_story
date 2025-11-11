import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";
import backgroundImage from "../public/bn20.jpg";
export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
  openGraph: {
    title: "Title Here",
    description: "Description Here",
    images: ["image_url_here"],
  },
  keywords: ["keyword1", "keyword2", "keyword3"],
  icons: {
    icon: "path/to/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="path/to/favicon.ico" />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
