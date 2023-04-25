import "@component/styles/globals.css";
import { Montserrat } from "@next/font/google";
import MainLayout from "@component/components/layout/main-layout";
import ReactLoading from "react-loading";
import { useEffect, useState } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className={`${montserrat.className} `}>
      <MainLayout>
        {isLoading ? (
          <div className="relative flex flex-col items-center justify-center h-[90vh]">
            <ReactLoading
              type={"bars"}
              color={"#2c3e50"}
              height={50}
              width={50}
            />
          </div>
        ) : (
          <Component {...pageProps} />
        )}
      </MainLayout>
    </div>
  );
}
