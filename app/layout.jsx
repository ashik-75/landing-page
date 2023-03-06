import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "../styles/globals.css";
import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className="dark:bg-max">
        <Providers>
          <Header />
          <div className="">{children}</div>
          <ScrollToTop />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
