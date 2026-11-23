
import "./globals.css";
import { Poppins, Nunito } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata = {
  title: "Panti Asuhan Harapan Remaja",
  description:
    "Website resmi Panti Asuhan Harapan Remaja. Informasi profil, kegiatan, galeri, dan donasi.",
  icons: {
    icon: "/images/logo-panti.png",
    shortcut: "/images/logo-panti.png",
    apple: "/images/logo-panti.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} ${nunito.variable}`}>
        {children}
      </body>
    </html>
  );
}
