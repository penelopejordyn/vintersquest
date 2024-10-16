import localFont from "next/font/local";
import "./globals.css";

// Declare the font within the component itself instead of exporting
const pixel = localFont({
  src: "./fonts/DiscotapixelRegularDemo-KVZYy.otf",
  variable: "--font-pixel",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pixel.variable}>
        {children}
      </body>
    </html>
  );
}
