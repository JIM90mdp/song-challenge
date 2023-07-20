import "@component/styles/globals.css";
import { useEffect, useState } from "react";
import MainLayout from "@component/components/layout/main-layout";
import ReactLoading from "react-loading";
import "../app.css";

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <MainLayout>
      {isLoading ? (
        <div>
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
  );
}
