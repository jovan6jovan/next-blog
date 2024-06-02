import type { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import "styles/globals.css";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title key="title">Next Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
