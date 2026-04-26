import {
  Montserrat,
  Plus_Jakarta_Sans,
  La_Belle_Aurore,
  Epilogue,
} from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";


const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});
const aurore = La_Belle_Aurore({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-aurore",
});
const epilogue = Epilogue({ subsets: ["latin"], variable: "--font-epilogue" });

// expecting metaData

export const metadata = {
  metadataBase: new URL("https://metoradecor.com"),

  title: {
    default: "Metora Decor| Decor That Defines You",
    template: "%s | Metora Decor",
  },

  description: "Metora Decor is home decoration solution for your amazing home",

  applicationName: "Metora Decor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${jakarta.variable} ${montserrat.variable} ${aurore.variable} ${epilogue.variable} bg-[#fbf9f5] text-[#1b1c1a]`}
      >
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
