import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import MouseTrail from "../components/Mousetrail/MouseTrail"; // Correct import path
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"], // Add desired weights here
});

export const metadata: Metadata = {
  title: "ULTRON 8.0 Futurix C-Tech",
  description: "Futurix C.Tech Official Student Association",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} antialiased`}>
        <MouseTrail /> {/* Add the MouseTrail globally */}
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
