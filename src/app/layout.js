import { Montserrat, Plus_Jakarta_Sans, La_Belle_Aurore, Epilogue } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1"
        />
      </head>
      <body
        className={`${jakarta.variable} ${montserrat.variable} ${aurore.variable} ${epilogue.variable} bg-[#fbf9f5] text-[#1b1c1a]`}
      >
        <Toaster position="bottom-right" />
        <header>
          <Navbar/>
        </header>
        <main>
          {children}
        </main>
        <div>
         <Footer/>
        </div>
      </body>
    </html>
  );
}
