import { Mulish } from "next/font/google";
import "./globals.css";
import { cn, constructMetadata } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { UserProvider } from "@/context/UserContext";
import { EnokiFlowProvider } from "@mysten/enoki/dist/cjs/react";

const mulish = Mulish({ subsets: ["latin"] });
const ENOKI_API_KEY = process.env.NEXT_PUBLIC_ENOKI_API_KEY;
export const metadata = constructMetadata();

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light !scroll-smooth">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="22623642-4859-4b11-bc9c-5e1be448cb2c"
        ></script>
      </head>
      <EnokiFlowProvider apiKey={ENOKI_API_KEY}>
        <UserProvider>
          <body
            className={cn(
              "min-h-screen font-sans antialiased",
              mulish.className
            )}
          >
            <Toaster />
            <Navbar />
            {children}
          </body>
        </UserProvider>
      </EnokiFlowProvider>
    </html>
  );
}
