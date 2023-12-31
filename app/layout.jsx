import Link from "next/link";
import "./globals.css";
//import { Inter } from 'next/font/google'
//const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "DIN MÆGLER",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/" className="logo">
            DIN MÆGLER
          </Link>
          <div className="links">
            <Link href="/favoritter">Min favoritter</Link>
            <Link href="/Mæglere">Mæglere</Link>
            <Link href="/Kontakt-os">Kontakt os</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

