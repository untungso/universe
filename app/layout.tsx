import "./globals.css";

export const metadata = {
  title: "Malah Ngoding",
  description: "Lupa Makan, Lupa Tidur, Malah Ngoding",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
