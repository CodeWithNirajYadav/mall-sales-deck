import "./globals.css";

export const metadata = {
  title: "MALL.DECK",
  description: "The Ultimate Luxury Destination",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-28">
      <body className="bg-[#050505] text-white antialiased">
        {children}
      </body>
    </html>
  );
}