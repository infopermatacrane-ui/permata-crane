import "./globals.css";

export const metadata = {
  title: "Permata Crane",
  description: "Sewa Crane Profesional & Terpercaya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
