import Layout from "@/components/layout";
import { ComponentType } from "react";
import "@/styles/globals.css";

interface AppProps {
  Component: ComponentType<any>;
  pageProps: Record<string, any>;
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
