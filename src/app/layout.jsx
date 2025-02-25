// import localFont from "next/font/local";
import Navbar from "@/components/shared/NavbarFooter/Navbar";
import "./globals.css";
import Footer from "@/components/shared/NavbarFooter/Footer";
// import { CounterStoreProvider } from "@/providers/counter";
// import { ReactQueryClient } from "@/providers/ReactQueryClient";
export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <section className="flex w-full flex-col items-center">
          <Navbar />
          <div className="w-full lg:w-10/12">{children}</div>
          <Footer></Footer>
        </section>

        {/* <ReactQueryClient> */}
        {/* <CounterStoreProvider> */}

        {/* </CounterStoreProvider> */}
        {/* </ReactQueryClient> */}
      </body>
    </html>
  );
}
