import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import styles from "./layout.module.scss";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "El-Pachris Obeng",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/images/icon.png"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body className={inter.className}>
        <div className={styles.links_container}>
          <a
            href="https://github.com/elpah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.image}
              src="/images/socials_svg/github.svg"
              alt="github"
              height={35}
              width={35}
              priority
            />
          </a>
          <a
            href="https://www.linkedin.com/in/elpachris"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.image}
              src="/images/socials_svg/linkedin.svg"
              alt="linkedin"
              height={35}
              width={35}
              priority
            />
          </a>
          <a
            href="https://x.com/elpahh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.image}
              src="/images/socials_svg/x.png"
              alt="x"
              height={35}
              width={35}
              priority
            />
          </a>
          <a href="mailto:obengelpachris@gmail.com">
            <Image
              className={styles.image}
              src="/images/socials_svg/email.svg"
              alt="email"
              height={35}
              width={35}
              priority
            />
          </a>
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
