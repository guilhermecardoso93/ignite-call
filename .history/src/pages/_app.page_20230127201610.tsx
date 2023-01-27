/* eslint-disable prettier/prettier */
import "../lib/dayjs";
import type { AppProps } from "next/app";
import { DefaultSeo } from 'next-seo';
import { SessionProvider } from "next-auth/react";
import { globalStyles } from "../styles/global";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../lib/react-query";

globalStyles();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <DefaultSeo
          openGraph={{
            type: "website",
            locale: "pt_BR",
            url: "https://www.ignitecall.com/",
            siteName: "Ignite Call",
          }}
          twitter={{
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image",
          }}
        />
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  );
}
