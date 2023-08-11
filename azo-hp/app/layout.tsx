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
      <body>{children}</body>
    </html>
  );
}
