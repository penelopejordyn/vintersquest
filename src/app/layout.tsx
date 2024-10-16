import localFont from "next/font/local";
import "./globals.css";


export const pixel = localFont({
  src: "./fonts/DiscotapixelRegularDemo-KVZYy.otf",
  variable: "--font-pixel",
  weight: "100 900",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pixel.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
