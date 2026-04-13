export const metadata = {
  title: "Deepnet Menu",
  description: "Menus and items",
};


import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-50 text-neutral-900">
        <Navbar />
        <div className="mx-auto">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}

