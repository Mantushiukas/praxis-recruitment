import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Praxis Recruitment | Recruitment by Practitioners",
  description: "Strategic recruitment services for Technology, Digital Marketing, and HR roles. Expert talent acquisition by experienced practitioners.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${montserrat.variable} ${montserrat.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
