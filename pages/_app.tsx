import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Analytics } from "analytics";
import { getAnalytics } from "../libs/analytics";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        h: "full",
      },

      "#__next": {
        minH: "full",
        display: "flex",
        flexDir: "column",
      },

      a: {
        fontWeight: "medium",
      },
    },
  },
});

const usePageView = () => {
  const router = useRouter();

  useEffect(() => {
    const analytics = getAnalytics();

    if (!analytics) {
      return;
    }

    const pageView = (url?: string) => {
      analytics.page({
        // We don't want to track the query params to not track the JSON schema URLs
        // It is a privacy concern
        url: url ? url.split("?")[0] : undefined,
      });
    };

    pageView();

    router.events.on("routeChangeComplete", pageView);

    return () => {
      router.events.off("routeChangeComplete", pageView);
    };
  }, [router.events]);
};

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
