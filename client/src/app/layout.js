import "./globals.css";
import BottomBar from "../components/BottomBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <BottomBar />
      </body>
    </html>
  );
}
