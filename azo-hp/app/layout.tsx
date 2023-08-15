"use client";

import { CssBaseline } from "@mui/material";
import { COLORS } from "./component/Colors";
import { Footer } from "./component/Footer";
import { Header } from "./component/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <title>Azo HP</title>
      </head>
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: COLORS.gray,
        }}
      >
        <CssBaseline />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
