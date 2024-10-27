import "./globals.css";
import { WebProviderFunc } from "./context/WebProvider";



export const metadata = {
  title: "Pracfix | Trusted solving for agrarian field!",
  description: "Trusted solving for agrarian field!",
};

export default function RootLayout({ children }) {
  return (
    <WebProviderFunc>
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
    </WebProviderFunc>
  );
}
