import { LaunchesProvider } from "../contexts/LaunchesContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <LaunchesProvider>
      <Component {...pageProps} />
    </LaunchesProvider>
  );
}

export default MyApp;
