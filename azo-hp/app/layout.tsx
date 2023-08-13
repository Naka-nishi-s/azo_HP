"use client";

import { CssBaseline } from "@mui/material";
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
        }}
      >
        <CssBaseline />
        <Header />
        {children}
        {/* <footer>This is Footer</footer> */}
      </body>
    </html>
  );
}
