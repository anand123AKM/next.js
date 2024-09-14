"use client";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        {pathname !== "/Login" && pathname !== "/Quotes" ? (
          <h1>Finally Learning Next.Js</h1>
        ) : (
          <h1>Logged in</h1>
        )}
        {children}
      </body>
    </html>
  );
}
