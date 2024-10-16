import type { Metadata } from "next";
import ClientPage from "./clientpage"; // Importing the client-side page

export const metadata: Metadata = {
  title: "Vintner's Quest",
  description: "A pixel art visual novel about winemaking",
};

export default function Page() {
  return (
    <div>
      <ClientPage />  {/* Render the client-side page here */}
    </div>
  );
}
