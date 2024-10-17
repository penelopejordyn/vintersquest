import "./globals.css";
import { pixel, pixel2 } from "./font";

// Declare the font within the component itself instead of exporting


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  
  return (
    <html lang="en">
      <body className={`${pixel.variable} ${pixel2.variable}`}>
        
        {children}
      </body>
    </html>
  );
}
