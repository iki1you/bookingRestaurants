import type { Metadata } from "next";
import "./globals.scss";
import { ReactNode } from "react";
import { clsx } from "clsx";
import { comfortaa, montserrat } from "@/styles/fonts";
import Header from "@/components/shared/header/Header";
import Avatar from "@/components/shared/avatar/Avatar";
import { YMaps } from "@pbe/react-yandex-maps";
import Footer from "@/components/shared/footer/Footer";
import { SessionProvider } from "next-auth/react";
import { NextAuthProvider } from "@/app/providers";

export const metadata: Metadata = {
  title: "Restaurants booking",
  description: "Service for booking restaurants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(comfortaa.className, montserrat.variable)}>
        <Header />
        <NextAuthProvider>{children}</NextAuthProvider>
        <div id={"portal"} />
        <Footer />
      </body>
    </html>
  );
}
