import "./globals.css";
import { pixel, pixel2 } from "./font";
import { AppProvider } from "./context/AppContext";

// Declare the font within the component itself instead of exporting


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  
  return (
    <html lang="en">
      <body className={`${pixel.variable} ${pixel2.variable}`}>
        <AppProvider>
        {children}
        </AppProvider>
      </body>
    </html>
  );
}
