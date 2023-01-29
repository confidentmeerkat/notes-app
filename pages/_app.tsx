import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import Layout from "@/components/Layout";
const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: Infinity } } });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
