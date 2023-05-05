import "@component/styles/globals.css";
import { useEffect, useState, createContext } from "react";
import { Montserrat } from "@next/font/google";
import MainLayout from "@component/components/layout/main-layout";
import ReactLoading from "react-loading";
import AppContext from "@component/components/context/appContext";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const [songContext, setSongContext] = useState("default");
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
          <AppContext.Provider value={{ songContext, setSongContext }}>
            <Component {...pageProps} />
          </AppContext.Provider>
        )}
      </MainLayout>
    </div>
  );
}
