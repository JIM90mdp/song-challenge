import "@component/styles/globals.css";
import { Montserrat } from "@next/font/google";
import MainLayout from "@component/components/layout/main-layout";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={`${montserrat.className} `}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
}